<template>
  <div class="navbar flex justify-between">
    <div class="navbarLeft flex align-center">
      <img class="left1 pointer" src="@/assets/images/LOGO.svg" alt @click="backHome">

      <div class="left3">BPM</div>
    </div>
    <div class="navbarRight flex align-center">
      <router-link to="message"> <img src="../../assets/images/info.png" alt="" style="margin-right:70px"></router-link>
      <div v-if="$store.state.app.msgNum>0" class="count">{{ $store.state.app.msgNum>99?99:$store.state.app.msgNum }}</div>
      <el-popover
        v-model="showPanel"
        class="checkPopover"
        placement="bottom-end"
        trigger="click"
        style="margin-right:29px;"
      >
        <div class="checkArea flex">

          <div class="checkItem flex justify-center flex-column" @click="goto(0)">
            <img src="@/assets/images/BPM2.svg" alt="">
            <div class=" Font333">Cloud BPM</div>
          </div>

          <div class="checkItem flex justify-center flex-column" @click="goto(1)">
            <img src="@/assets/images/knowledge2.svg" alt="">
            <div class=" Font333">知识库</div>
          </div>
          <div v-if="hasPermission" class="checkItem flex justify-center flex-column" @click="goto(2)">
            <img src="@/assets/images/organization2.svg" alt="">
            <div class=" Font333">组织架构</div>
          </div>
        </div>
        <img slot="reference" class="left2" style="cursor:pointer" src="@/assets/images/category2.png" alt>
      </el-popover>

      <el-dropdown>
        <div class="flex align-center">
          <img v-if="avatarUrl!==''" class="right2" :src="avatarUrl" alt>
          <div v-if="avatarUrl==''" class="headImg">{{ headName }}</div>
          <div class="right3">{{ nickName }}</div>
        </div>

        <el-dropdown-menu slot="dropdown">
          <div @click="logOut">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </div>
        </el-dropdown-menu>

      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getStorage, removeToken, removeStorage } from '@/utils/auth'

export default {
  data() {
    return {
      nickName: '',
      keyword: '',
      headName: '',
      avatarUrl: '',
      showPanel: false,
      hasPermission: false
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  created() {
    this.nickName = JSON.parse(getStorage('ents')).memName
    const avatar = JSON.parse(getStorage('userInfo')).avatar

    if (avatar !== '') {
      this.avatarUrl = avatar
    }
    const name1 = this.nickName.split('').reverse()
    this.headName = name1[1] + name1[0]

    const ents = JSON.parse(getStorage('ents'))
    if ((ents.superAdminFlag && ents.superAdminFlag === 1) || (ents.adminFlag && ents.adminFlag === 1)) {
      this.hasPermission = true
    }
  },
  methods: {
    goto(index) {
      this.showPanel = false
      if (index === 0) {
        this.$router.push('/projects')
      } else if (index === 1) {
        window.open('http://xiniu.wiki/#/latest', '_blank')
      } else if (index === 2) {
        window.open('http://xiniu.wiki/#/organization', '_blank')
      }
    },
    backHome() {
      this.$router.push('/')
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logOut() {
      console.log('out')
      removeToken()
      removeStorage('ents')
      removeStorage('userInfo')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.count{
  position:absolute;
  left:15px;
  top:10px;
  width:17px;
height:17px;
background:rgba(253,75,64,1);
text-align: center;
line-height: 17px;
font-size:11px;
font-weight:500;
color:rgba(255,255,255,1);
border-radius: 50%;
}
.el-popover{
  top:52px;

}
.checkArea{
  // width:342px;
  padding:0 5px;
height:110px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 7px rgba(0,0,0,0.04);
border-radius:4px;
.checkItem{
  width:120px;
height:64px;
font-size:0;
 margin-top:21px;
border:1px solid #fff;
// margin-right:5px;
cursor: pointer;
&:nth-last-child(1){
  margin-right: 0;
}
img{
  width:66px;
  height: 34px;
  // margin-top:15px;
  margin-left:28px;
}
div{
  margin-top:10px;
  width:100%;
  text-align: center;

}
&:hover{
  border-radius:4px;
border:1px solid rgba(83,180,179,0.3);
}
}
}
@media(min-width: 1800px) {
    .navbar{
       height: 80px !important;
    }
  }
.headImg{
  background: #53B4B3;;
  color:#fff;
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
      height: 36px;
      margin-left: 30px;
      cursor: pointer;
      text-align: center;
      line-height: 36px;
      font-size:16px;
      font-weight: 500;
}
.navbar {
  height: 60px;
  overflow: hidden;
  position: fixed;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  padding: 0 40px 0 20px;
  top: 0;
  width: 100%;
      z-index: 99;

  .navbarLeft {
    // height: 80px;
    .left1 {
      width: 130px;
      height: 50px;
    }
    .left2 {
      width: 19px;
      height: 19px;
      margin-left: 40px;
      cursor: pointer;
    }
    .left3 {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-left: 15px;
    }
  }
  .navbarRight {
    position: relative;
    .right2 {
      width: 36px;
      height: 36px;
      cursor: pointer;
      border-radius: 50%;
    }
    .right3 {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-left: 12px;
      cursor: pointer;
    }
  }
}
</style>
