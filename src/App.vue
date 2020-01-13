
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getWSID } from './api/message'
import Fingerprint2 from 'fingerprintjs2'
import { getToken } from '@/utils/auth'
export default {
  name: 'App',
  data() {
    return {
      fingerprintId: '',
      murmur: '',
      socket: ''
    }
  },
  created() {
    if (getToken()) {
      this.getMurmur()
      this.$store.dispatch('app/getMsgNum')
    }
  },
  destroyed() {
    this.socket.close()
  },
  methods: {

    getMurmur() {
      const that = this
      Fingerprint2.get(function(components) {
        const values = components.map(function(component, index) {
          if (index === 0) {
            return component.value.replace(/\bNetType\/\w+\b/, '')
          }
          return component.value
        })
        // 生成最终id murmur
        that.murmur = Fingerprint2.x64hash128(values.join(''), 31)

        const param = {
          fingerprintId: that.murmur
        }
        setTimeout(() => {
          getWSID(param).then(res => {
            that.fingerprintId = res.data.wsid
            // var socket
            if (typeof (WebSocket) === 'undefined') {
              console.log('您的浏览器不支持WebSocket')
            } else {
              console.log('您的浏览器支持WebSocket')
              // 实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
              // 等同于socket = new WebSocket("ws://localhost:8083/checkcentersys/websocket/20");

              const path = (process.env.VUE_APP_BASE_API2 + '/mc/websocket/' + that.fingerprintId).replace('https', 'ws')
              that.socket = new WebSocket(path)
              // 打开事件
              that.socket.onopen = function() {
                console.log('Socket 已打开')
                // socket.send("这是来自客户端的消息" + location.href + new Date());
              }
              // 获得消息事件
              that.socket.onmessage = function(msg) {
                if (msg.data !== 'connect successfully') {
                  // const data = JSON.parse(msg.data)
                  // that.$notify.info({
                  //   title: data.title,
                  //   message: data.content,
                  //   position: 'bottom-right'
                  // })
                  that.$store.dispatch('app/getMsgNum')
                }
                // 发现消息进入    开始处理前端触发逻辑
              }
              // 关闭事件
              that.socket.onclose = function() {
                console.log('Socket已关闭')
              }
              // 发生了错误事件
              that.socket.onerror = function() {
                alert('Socket发生了错误')
                // 此时可以尝试刷新页面
              }
            }
          })
        }, 200)
      })
    }
  }
}

</script>
