<template>

  <div class="container">

    <vue-scroll ref="vs" @handle-scroll="handleScroll">
      <div class="header flex justify-between align-center">
        <div class="msg-center">通知中心</div>
        <div class="more_icon">
          <el-dropdown placement="bottom-start" trigger="click">
            <div>
              <img class="more-nohover" src="../assets/images/more.svg" alt />
              <img class="more-hover" src="../assets/images/more2.svg" alt />
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdown2">
              <div @click="select(1)">
                <el-dropdown-item>
                  <div class="flex align-center">
                    <img src="../assets/images/clear.png" alt />
                    <div class="Font666" style="margin-left:10px;">全标已读</div>
                  </div>
                </el-dropdown-item>
              </div>
              <div @click="select(2)">
                <el-dropdown-item>
                  <div class="flex align-center">
                    <img src="../assets/images/delete4.png" alt />
                    <div class="Font666" style="margin-left:10px;">删除已读</div>
                  </div>
                </el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
      <div class="main">
        <div v-for="(item,index) in detail.list" :key="index" class="msgItem" @click="markRead(item.id,item.projectId)">
          <div class="line1 flex justify-between align-center">
            <div class="flex">
              <div class="title">{{ item.title }}</div>
              <div v-if="item.readFlag == 0" class="mark" />
              <div class="time Font999" :style="{marginLeft:item.readFlag == 0?'28px':'40px'}">{{ item.timeStr }}</div>
            </div>
            <img class="transBig" src="../assets/images/delete3.svg" alt="" @click="delMsg(item.id)" />
          </div>
          <div class="line2 Font333">{{ item.content }}</div>
          <div class="line3 Font999">{{ item.desc }}</div>
        </div>
        <img v-if="showLoading&&detail.more" class="loading" src="../assets/images/loading.gif" alt="" />
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import { getMessage, markRead, markAllRead, delMsg, delAllMsg } from '../api/message'
export default {
  data() {
    return {
      detailParam: {
        pageNo: 1,
        pageSize: 10
      },
      detail: {},
      showLoading: false,
      count: 0

    }
  },
  created() {
    this.getMessage()
  },
  methods: {
    async handleScroll(vertical) {
      if (vertical.process === 1 && this.detail.more) {
        // 触底加载更多
        console.log('触底加载更多')
        this.detailParam.pageSize += 10
        this.showLoading = true
        await this.getMessage()
        // }
      }
    },
    delMsg(id) {
      delMsg(id).then(res => {
        this.getMessage()
      })
    },
    markRead(id, projectId) {
      markRead(id).then(() => {
        this.getMessage()
        this.$store.dispatch('app/getMsgNum')
      })
      const routeUrl = this.$router.resolve({ path: '/detail', query: { id: projectId }})
      window.open(routeUrl.href, '_blank')
    },
    select(index) {
      if (index === 1) {
        markAllRead().then(res => {
          this.$notify({
            title: '成功',
            message: '已全部标为已读',
            type: 'success'
          })
          this.getMessage()
          this.$store.dispatch('app/getMsgNum')
        })
      } else if (index === 2) {
        delAllMsg().then(res => {
          this.$notify({
            title: '成功',
            message: '已删除已读消息',
            type: 'success'
          })
          this.getMessage()
        })
      }
    },
    getMessage() {
      getMessage(this.detailParam).then(res => {
        this.detail = res
        this.showLoading = false
      })
    }

  }

}
</script>

<style scoped lang="scss">
.page{
  width:100vw;
  height: 100vh;
  background: #F8F8F8;
}
.loading{
          width:20px;
          height: 20px;
          position: absolute;
          left: 50%;
          margin-left:-10px;
          // top:3px;
        }
.container{
  width:100%;
  height: 100%;
    .header{
  width:100%;
  height: 76px;
  border-bottom:1px solid #EEEEEE;
  padding:0 30px;
  .msg-center{
font-size:20px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(51,51,51,1);
  }
}
}
.more-nohover {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.more-hover {
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;
}
.more_icon {
      &:hover .more-hover {
        display: block;
      }
      &:hover .more-nohover {
        display: none;
      }
    }
    .dropdown2 {
  width:180px;
height:95px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 7px rgba(0,0,0,0.04);
border-radius:4px;
// padding:20px;
}
.main{
  .msgItem{
    width:1140px;
    margin-left:30px;
    border-bottom: 1px solid #eee;
    padding-bottom: 25px;
    cursor: pointer;
    &:hover .line1 img{
      display:block;
    }
    .line1{
      margin-top:25px;
      .title{
font-size:16px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);

      }
      .mark{
        width:8px;
height:8px;
background:rgba(253,75,64,1);
border-radius: 50%;
margin-left: 4px;

      }
      .time{
        // margin-left:28px;
        height: 22px;
        line-height: 22px;
      }
      img{
        width:14px;
        height: 14px;
        display: none;
      }
    }
    .line2{
      margin-top:15px
    }
    .line3{
      margin-top:10px;
    }
  }
}
</style>
