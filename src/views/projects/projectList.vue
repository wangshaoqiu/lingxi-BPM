
<style scoped lang="scss">
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.page {
  width: 100%;
  height: 100%;
  background: rgba(245, 245, 245, 1);
}
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-y: hidden;
  // padding: 0 40px;
  padding-top: 60px;
  .listColum {
    width: 320px;
    margin-right: 10px;
    margin-top: 64px;
    padding-bottom: 20px;
    height: calc(100vh - 145px);
    // overflow-y: hidden;
    .stepName {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 20px;
      width:320px;
    }
    .srcollArea{
      height: calc(100vh - 180px);
      width:310px;
      // overflow-y: auto;

    .project {
      width: 300px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 4px 0px
        rgba(0, 0, 0, 0.09);
      border-radius: 4px;
      margin-top: 15px;
      overflow: hidden;
      position: relative;
      &:nth-child(1){
        margin-top: 0px;
      }
      &:hover .urgency{
        width: 7px;
      }
      &:hover .urgency3{
        width: 7px;
      }
      .mask {
        position: absolute;
        width: 100%;
        background: rgba(22, 28, 41, 0.196);
        height: 100%;
        z-index: 99;

        img {
          width: 30px;
          height: 30px;
          position: absolute;
          z-index: 990;
          left: 135px;
          top: 50%;
          margin-top: -15px;
        }
      }

      .urgency {
        width: 4px;
        // min-height: 65px;
        background: rgba(255, 148, 47, 1);
        position: absolute;
    height: 100%;
     transition: width 0.4s;
            -moz-transition: width 0.4s; /* Firefox 4 */
            -webkit-transition: width 0.4s; /* Safari 和 Chrome */
            -o-transition: width 0.4s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
      }
      .urgency2 {
        background: rgba(244, 91, 91, 1);
      }
      .urgency3 {
        width: 0px;
        background: #B7BACE;
        position: absolute;
    height: 100%;
     transition: width 0.4s;
            -moz-transition: width 0.4s; /* Firefox 4 */
            -webkit-transition: width 0.4s; /* Safari 和 Chrome */
            -o-transition: width 0.4s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
      }
      .main {
        width: 100%;
        .projectName {
          height: 55px;
          padding: 0 20px;
          .projectTitle {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .avatarArea{
            width:55px;
            height: 25px;
            flex-direction: row-reverse;
            .avatar{
              flex-direction: row-reverse;
              margin-right: -10px;
              border:1px solid #fff;
            }
          }
        }
        .expired {
          max-width: 109px;
          height: 18px;
          background: rgba(244, 91, 91, 1);
          border-radius: 4px;
          font-size: 11px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 18px;
          margin-top: -14px;
          margin-left: 20px;
          margin-bottom: 15px;
          padding:0 6px;
        }
        .FGX {
          width: 260px;
          height: 1px;
          background: rgba(244, 244, 244, 1);
          margin-left: 20px;
        }
        .Foot {
          width: 100%;
          height: 44px;
          padding: 0 20px;
          .status {
            width: 58px;
            height: 24px;
            background: rgba(249, 250, 255, 1);
            border-radius: 4px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #53B4B3;
            text-align: center;
            line-height: 24px;
          }
          .status2 {
            width: 58px;
            height: 24px;
            background: rgba(255, 231, 232, 1);
            border-radius: 4px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(244, 91, 91, 1);
            text-align: center;
            line-height: 24px;
          }
        }
      }
    }
    }
  }
  .filter {
    position: fixed;
    top: 86px;
    right: 25px;
    cursor: pointer;
    &:hover{
          background-color: #e5e5e5;
    }
  }
}

@media (min-width: 1800px) {
  .navbar {
    height: 80px !important;
  }
  .container {
    // padding: 0 40px;
    padding-top: 80px !important;
  }
  .filter {
    top: 106px !important;
  }
  .filterWrap {
    top: 155px !important;
  }
  .fromJoiner {
    top: 346px !important;
  }
}
.headImg {
  background: #53B4B3;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
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
      margin-right: 59px;
    }
  }
  .navbarRight {
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
.main-container2 {
  width: 100vw;
  margin: 0 auto;
  height: 100%;
  position: relative;
  background: rgba(245, 245, 245, 1);
}
.app-main {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: hidden;
  margin-top: 60px;
  border-radius: 4px;
}
@media (min-width: 1800px) {
  .app-main {
    margin-top: 80px;
  }
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  // width: 100%;
  background: #f8f8f8;
  overflow: hidden;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.mobile .fixed-header {
  width: 100%;
}
.filterWrap {
  width: 400px;
  height: 385px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  z-index: 999;
  position: fixed;
  padding: 25px;
  right: 46px;
  top: 135px;
  .input {
    width: 350px;
    height: 40px;
    border-radius: 4px;
    &:focus{
      border: 1px solid #53B4B3;
    }
  }
  .label {
    width: 70px;
    height: 20px;
    text-align: right;
  }
  .el-radio {
    margin-left: 25px;
    margin-right: 0;
  }
  .el-radio__label {
    padding-left: 5px;
  }
  .refresh{
    width:350px;
    height: 45px;
    border-top:1px solid #F4F4F4;
    .refresh_btn{
      width:70px;
height:24px;
border-radius:4px;
// opacity:;
border:1px solid rgba(83,180,179,0.5979);
font-size:12px;
color:rgba(83,180,179,1);
background-color:#fff;
text-align: center;
line-height: 22px;
margin-left:280px;
margin-top:10px;
cursor: pointer;

    }
  }
}
.fromJoiner {
  width: 255px;
  height: 345px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  right: 72px;
  z-index: 9999;
  top: 326px;
  .selectWrap {
    width: 215px;
    height: 195px;
    border-radius: 4px;
    border: 1px solid rgba(235, 238, 245, 1);
    overflow-y: auto;
    padding-top: 7px;
    .holdPerson {
      padding: 0 30px 0 15px;
      cursor: pointer;
      height: 40px;
      &:hover {
        background: #f6f7ff;
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
.holdOn {
  margin-left: 30px;
}
.participant {
  width: 226px;
  height: 30px;
  // background: rgba(238, 238, 238, 1);
  border-radius: 4px;
  margin-left: 25px;
  padding-left: 5px;
  line-height: 30px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
.mt40{
  margin-top:40px;
}

.mt30{
  margin-top:30px;
}
.mt25{
  margin-top:25px;
}
.mt20{
  margin-top:20px;
}
.mt15{
  margin-top:15px;
}
.mt10{
  margin-top:10px;
}
.pt30{
  padding-top:30px;
}
.pt20{
  padding-top:20px;
}
.pl30{
  padding-left:30px;
}
.pl25{
  padding-left:25px;
}
.pr20{
  padding-right:20px;
}
.pb30{
  padding-bottom: 30px;
}
.pb15{
  padding-bottom: 15px;
}
.ml40{
  margin-left:40px;
}
.ml10{
  margin-left:10px;
}
.ml20{
  margin-left:20px;
}
.ml25{
  margin-left:25px;
}
.ml15{
  margin-left:15px;
}
.ml30{
  margin-left:30px;
}
.mr30{
  margin-right:30px;
}
.pd30{
  padding:30px;
}
.pd10{
  padding:10px;
}
.el-dropdown-link:hover{
  color:#53B4B3;
}
.checkArea{
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
.count{
  position:absolute;
  // left:15px;
  right:229px;
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
</style>
<template>
  <div class="page">
    <div class="navbar flex justify-between">
      <div class="navbarLeft flex align-center">
        <img class="left1 pointer" src="../../assets/images/LOGO.svg" alt @click="backHome">

        <div class="left3" style="margn">BPM</div>
        <div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="cursor:pointer">
              {{ templateName }}
              <span class="ml10">
                <i class="el-icon-caret-bottom" />
              </span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div
                v-for="item in templateArr"
                :key="item.id"
                @click="checkTemplate(item.id,item.name)"
              >
                <el-dropdown-item>{{ item.name }}</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="navbarRight flex align-center">
        <router-link to="message"> <img src="../../assets/images/info.png" alt="" class="mr30"></router-link>
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
    <div class="container" @click="hideForm">
      <div style="padding:0 40px;">
        <div class="flex">
          <div v-for="(item,index) in list" :key="index" class="listColum">
            <div class="stepName">{{ item.name }}·{{ item.projects.length }}</div>
            <div class="srcollArea">
              <vue-scroll>
                <div
                  v-for="(sub,subIndex) in item.projects"
                  :key="subIndex"
                  class="project flex pointer"
                  @click="goDetail(sub.canView,sub.id)"
                >
                  <div v-if="!sub.canView" class="mask">
                    <img src="../../assets/images/lock.png" alt>
                  </div>
                  <div v-if="sub.urgencyDegree==2" class="urgency" />
                  <div v-if="sub.urgencyDegree==3" class=" urgency urgency2" />
                  <div v-if="sub.urgencyDegree==1" class=" urgency3" />
                  <div class="main">
                    <div class="projectName flex align-center justify-between">
                      <div class="Font333 projectTitle" style="max-width:220px">{{ sub.name }}</div>
                      <div class="avatarArea flex">
                        <img v-if="sub.executors.length>2" src="../../assets/images/more3.png" alt>
                        <div v-for="(thd,thdIndex) in sub.executors.slice(0,2)" :key="thdIndex" class="avatar">
                          {{ thd.nickname }}
                        </div>
                      </div>
                    </div>
                    <div v-if="sub.expired" class="expired">{{ sub.endDateStr }} 已截止</div>
                    <div
                      v-if="sub.expired&&(sub.subtaskCnt>0||sub.messageCnt>0||sub.materialCnt>0||sub.currStepStatus==2||sub.currStepStatus==3)"
                      class="FGX mt20"
                    />
                    <div
                      v-if="!sub.expired&&(sub.subtaskCnt>0||sub.messageCnt>0||sub.materialCnt>0||sub.currStepStatus==2||sub.currStepStatus==3)"
                      class="FGX"
                    />
                    <div
                      v-if="sub.subtaskCnt>0||sub.messageCnt>0||sub.materialCnt>0||sub.currStepStatus==2||sub.currStepStatus==3"
                      class="Foot flex justify-between align-center"
                    >
                      <div class="btns flex align-center">
                        <img
                          v-if="sub.subtaskCnt>0"
                          style="margin-right:12px;"
                          src="../../assets/images/task.png"
                          alt
                        >
                        <img
                          v-if="sub.messageCnt>0"
                          style="margin-right:12px;"
                          src="../../assets/images/message.png"
                          alt
                        >
                        <img v-if="sub.materialCnt>0" src="../../assets/images/related2.png" alt>
                      </div>
                      <div v-if="sub.currStepStatus==2" class="status">待审核</div>
                      <div v-if="sub.currStepStatus==3" class="status2">被驳回</div>
                    </div>
                  </div>
                </div>
              </vue-scroll>
            </div>
          </div>
        </div>
      </div>

      <div class="filter flex align-center" @click.stop="checkFilterWrap">
        <img src="../../assets/images/filter.png" alt>
        <div class="Font666 font18">筛选</div>
        <img src="../../assets/images/filter2.png" alt style="margin-left:5px;">
      </div>
    </div>

    <div v-if="filterWrap" class="filterWrap">
      <el-input
        v-model="filterText"
        class="input"
        placeholder="请输入内容"
        @keyup.native.enter="handleChange"
      >
        <i slot="prefix" class="el-input__icon el-icon-search pointer" @click="handleChange" />
      </el-input>
      <div class="flex align-center mt25">
        <div class="Font333 label">截止日期：</div>
        <el-date-picker
          v-model="projectParam.expirationDateStr"
          class="startTime expired"
          type="date"
          value-format="yyyy.MM.dd"
          placeholder="待选择"
          @change="handleChange"
        />
      </div>
      <div class="flex align-center mt25" style="height:30px">
        <div class="Font333 label">参与者：</div>
        <div
          v-if="!showFromJoiner&&participant==''"
          class="Font999"
          style="width:226px;margin-left:30px"
          @click="showFromJoiner = true"
        >待选择</div>
        <div
          v-if="participant!==''||showFromJoiner"
          class="participant pointer"
          @click="showFromJoiner = true"
        >
          <p>{{ participant }}</p>
        </div>
        <img
          v-if="showFromJoiner||participant!==''"
          class="ml15 pointer"
          src="../../assets/images/delete3.png"
          alt
          @click="delSelect"
        >
      </div>
      <div class="flex align-center mt25">
        <div class="Font333 label">逾期任务：</div>
        <el-radio
          v-model="projectParam.expired"
          class="Font333"
          :label="expired1"
          @change="handleChange"
        >是</el-radio>
        <el-radio
          v-model="projectParam.expired"
          class="Font333"
          :label="expired2"
          style="margin-left:39px;"
          @change="handleChange"
        >否</el-radio>
      </div>
      <div class="flex align-center mt30">
        <div class="Font333 label">优先级：</div>
        <el-checkbox
          class="Font333"
          label="1"
          @change="handleCheckboxChange"
        >Low</el-checkbox>
        <el-checkbox
          class="Font333"
          label="2"
          @change="handleCheckboxChange2"
        >Middle</el-checkbox>
        <el-checkbox
          class="Font333"
          label="3"
          @change="handleCheckboxChange3"
        >High</el-checkbox>
      </div>
      <div class="flex align-center mt30">
        <div class="Font333 label">是否完成：</div>
        <el-radio
          v-model="projectParam.completionFlag"
          class="Font333"
          label="1"
          @change="handleChange"
        >是</el-radio>
        <el-radio
          v-model="projectParam.completionFlag"
          class="Font333"
          label="0"
          style="margin-left:39px;"
          @change="handleChange"
        >否</el-radio>
      </div>
      <div class="refresh mt30">
        <div v-waves class="refresh_btn transBig" @click="refresh">重置</div>
      </div>
    </div>

    <div v-if="showFromJoiner" class="fromJoiner">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索成员"
        suffix-icon="el-icon-search"
        @keyup.native.enter="searchPerson"
      />
      <div class="selectWrap mt10">
        <div
          v-for="(sub, subIndex) in joiner"
          :key="subIndex"
          class="holdPerson flex align-center justify-between"
          @click="selectJoiner(sub.name, sub.id)"
        >
          <div class="flex align-center">
            <div class="avatar">{{ sub.nickname }}</div>
            <div class="Font666 ml10">{{ sub.name }}</div>
          </div>
          <img
            v-if="projectParam.memberIds.indexOf(sub.id)>-1"
            src="../../assets/images/right.png"
            alt
          >
        </div>
      </div>
      <div
        class="mt20 sureBtn"
        style="width:216px;margin-left:0px;"
        @click="sureSelect"
      >确认</div>
    </div>
  </div>
</template>

<script>
import waves from '@/directives/waves'
import { getProjects, templateList } from '../../api/template'
import { getParticipants2 } from '../../api/template'
import { getStorage, removeToken, removeStorage } from '@/utils/auth'
export default {
  directives: {
    waves
  },
  data() {
    return {
      searchKeyword: '',
      showFromJoiner: false,
      proectList: [],
      nickName: '',
      keyword: '',
      headName: '',
      avatarUrl: '',
      templateId: '',
      templateName: '',
      list: [],
      templateArr: [],
      projectParam: {
        keyword: '',
        expirationDateStr: '',
        memberIds: [],
        expired: null,
        urgencyDegrees: [],
        completionFlag: null
      },
      expired1: true,
      expired2: false,
      joiner: '',
      joinerNum: 0,
      participantArr: [],
      filterWrap: false,
      participant: '',
      filterText: '',
      showPanel: false,
      hasPermission: false
    }
  },
  watch: {
    filterText(val) {
      this.projectParam.keyword = val
      this.getProjects()
    }
  },
  created() {
    const ents = JSON.parse(getStorage('ents'))
    if ((ents.superAdminFlag && ents.superAdminFlag === 1) || (ents.adminFlag && ents.adminFlag === 1)) {
      this.hasPermission = true
    }
    this.templateId = this.$route.query.id
    this.templateName = this.$route.query.templateName
    this.nickName = JSON.parse(getStorage('ents')).memName
    const avatar = JSON.parse(getStorage('userInfo')).avatar
    if (avatar !== '') {
      this.avatarUrl = avatar
    }
    const name1 = this.nickName.split('').reverse()
    this.headName = name1[1] + name1[0]
    this.getProjects()
    this.getList()
    this.getJoiner()
  },
  methods: {
    handleCheckboxChange(e) {
      if (e) {
        this.projectParam.urgencyDegrees.push(1)
      } else {
        for (let i = 0; i < this.projectParam.urgencyDegrees.length; i++) {
          if (this.projectParam.urgencyDegrees[i] === 1) {
            this.projectParam.urgencyDegrees.splice(i, 1)
          }
        }
      }
      this.getProjects()
    },
    handleCheckboxChange2(e) {
      if (e) {
        this.projectParam.urgencyDegrees.push(2)
      } else {
        for (let i = 0; i < this.projectParam.urgencyDegrees.length; i++) {
          if (this.projectParam.urgencyDegrees[i] === 2) {
            this.projectParam.urgencyDegrees.splice(i, 1)
          }
        }
      }
      this.getProjects()
    },
    handleCheckboxChange3(e) {
      if (e) {
        this.projectParam.urgencyDegrees.push(3)
      } else {
        for (let i = 0; i < this.projectParam.urgencyDegrees.length; i++) {
          if (this.projectParam.urgencyDegrees[i] === 3) {
            this.projectParam.urgencyDegrees.splice(i, 1)
          }
        }
      }
      this.getProjects()
    },
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
    refresh() {
      this.projectParam = {
        keyword: '',
        expirationDateStr: '',
        memberIds: [],
        expired: null,
        urgencyDegrees: [],
        completionFlag: null
      }
      this.participantArr = []
      this.participant = ''
      this.getProjects()
    },
    hideForm() {
      this.showFromJoiner = false
      this.filterWrap = false
    },
    delSelect() {
      this.participantArr = []
      this.participant = ''
      this.projectParam.memberIds = []
      this.showFromJoiner = false
      this.getProjects()
    },
    checkFilterWrap() {
      this.filterWrap = !this.filterWrap
      this.showFromJoiner = false
    },
    goDetail(canview, id) {
      if (!canview) {
        this.$notify({
          title: '提示',
          message: '您无权限查看此项目',
          type: 'warning'
        })
        return
      }
      const routeUrl = this.$router.resolve({ path: '/detail', query: { id: id }})
      window.open(routeUrl.href, '_blank')
    },
    backHome() {
      this.$router.push('/')
    },
    // 设置子任务执行人
    selectJoiner(name, executorId) {
      // 选择的执行人id
      if (this.projectParam.memberIds.indexOf(executorId) > -1) {
        for (let i = 0; i < this.projectParam.memberIds.length; i++) {
          if (this.projectParam.memberIds[i] == executorId) {
            this.projectParam.memberIds.splice(i, 1)
            this.participantArr.splice(i, 1)
          }
        }
      } else {
        this.projectParam.memberIds.push(executorId)
        this.participantArr.push(name)
      }
      this.participant = this.participantArr.join('、')
    },
    // 获取参与人
    getJoiner() {
      const param = {
        keyword: this.searchKeyword
      }
      getParticipants2(param, this.templateId).then(res => {
        for (let i = 0; i < res.length; i++) {
          var name1 = res[i].name.split('').reverse()
          if (name1.length === 1) {
            res[i].nickname = name1[0]
          } else {
            res[i].nickname = name1[1] + name1[0]
          }
        }
        this.joiner = res
        this.joinerNum = res.length
      })
    },
    // 搜索成员
    searchPerson() {
      this.getJoiner()
    },
    sureSelect() {
      this.getProjects()
      this.showFromJoiner = false
    },
    handleChange() {
      this.getProjects()
    },
    checkTemplate(id, name) {
      this.templateName = name
      this.templateId = id
      this.getProjects()
    },
    getList() {
      templateList().then(res => {
        for (let i = 0; i < res.length; i++) {
          this.templateArr = this.templateArr.concat(res[i].templates)
        }
      })
    },
    getProjects() {
      getProjects(this.projectParam, this.templateId).then(res => {
        for (let i = 0; i < res.length; i++) {
          for (let x = 0; x < res[i].projects.length; x++) {
            for (let y = 0; y < res[i].projects[x].executors.length; y++) {
              const name = res[i].projects[x].executors[y].name
              if (name.length === 0) {
                res[i].projects[x].executors[y].nickname = name
              } else {
                res[i].projects[x].executors[y].nickname = name.substr(1, 2)
              }
            }
          }
        }
        this.list = res
      })
    },
    logOut() {
      removeToken()
      removeStorage('ents')
      removeStorage('userInfo')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

