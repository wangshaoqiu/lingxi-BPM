
<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/bg.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.loginForm {
  width: 26%;
  min-height: 55.5%;
  background: rgba(247, 250, 252, 1);
  box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 18.2vh;
  padding: 70px 0 97px 0;
  max-width: 415px;
  min-width: 340px;
}
.logo {
  width: 45.6%;
  height: 7%;
  margin: 0 auto;
}
.logo img {
  width: 100%;
  height: 100%;
}
.welcome {
  font-size: 25px;
  font-family: PingFangSC-Medium, PingFangSC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 55px;
}
.inputBox {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  width: 68%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
}
.phone_input {
  width: 100%;
  height: 40px;
  border: none;

  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding-left: 15px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

input::-webkit-input-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
input::-moz-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
input:-ms-input-placeholder {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
.getCode1 {
  width: 86px;
  height: 32px;
  background: rgba(246, 249, 252, 1);
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 4px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
}
.getCode2 {
  width: 86px;
  height: 32px;
  background: #53B4B3;
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 4px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.loginBtn {
  width: 68%;
  height: 50px;

  margin: 0 auto;
  margin-top: 70px;
}
.el-button {
  width: 100%;
}
</style>
<template>
  <div class="bg">
    <div class="loginForm">
      <div class="logo">
        <img src="../../assets/images/logo1.png">
      </div>
      <div class="welcome">工作云平台</div>
      <div class="inputBox">
        <input v-model="phone" type="text" maxlength="11" placeholder="请输入手机号" class="phone_input">
      </div>
      <div class="inputBox">
        <input
          v-model="code"
          type="text"
          maxlength="8"
          placeholder="请输入验证码"
          class="phone_input"
          @keyup.enter="login"
        >
        <div v-if="!startClock&&phone.length==11" class="getCode2" @click="sendCode">获取验证码</div>
        <div v-if="!startClock&&phone.length!==11" class="getCode1">获取验证码</div>
        <div v-if="startClock" class="getCode1">重新获取{{ clock }}s</div>
      </div>

      <div class="loginBtn">
        <el-button v-waves type="primary" class="el-button" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { sendCode, login, getUserInfo } from '../../api/login'
import { setStorage, removeToken } from '../../utils/auth'
import waves from '@/directives/waves'
import NProgress from 'nprogress'
import { getWSID } from '../../api/message'
import Fingerprint2 from 'fingerprintjs2'
export default {
  name: 'Login',
  directives: {
    waves
  },
  data() {
    return {
      phone: '',
      code: '',
      startClock: false,
      clock: 0,
      requestId: ''
    }
  },
  methods: {
    sendCode() {
      const params = {
        phone: this.phone
      }
      sendCode(params).then(res => {
        this.requestId = res.data.requestId
        this.clock = parseInt(res.data.remainingMsec / 1000)
        this.$message({
          message: '发送成功',
          type: 'success',
          duration: 2000
        })
        this.startClock = true

        const interval = setInterval(() => {
          this.clock--
          if (this.clock === 0) {
            this.startClock = false
            clearInterval(interval)
            // this.clock = 60
          }
        }, 1000)
      })
    },
    login() {
      if (this.code === '') {
        this.$notify({
          title: '提示',
          message: '请先输入验证码！',
          type: 'warning'
        })
        return
      }
      const params = {
        phone: this.phone,
        requestId: this.requestId,
        smsCode: this.code
      }
      NProgress.start()
      login(params).then(res => {
        if (res.status === 200) {
          getUserInfo().then(res => {
            if (res.ents.length === 0) {
              // 没有登录权限则删除token
              removeToken()
              this.$notify({
                title: '错误',
                message: '对不起，您不属于任何一个组织',
                type: 'error'
              })
              return
            }

            setStorage('userInfo', JSON.stringify(res))
            setStorage('ents', JSON.stringify(res.ents[0]))

            this.getMurmur()
            this.$store.dispatch('app/getMsgNum')

            setTimeout(() => {
              NProgress.done()
              this.$router.push({ path: '/' })
            }, 500)
          })
        } else {
          NProgress.done()
        }
      })
    },
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

