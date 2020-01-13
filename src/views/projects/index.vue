<template>
  <div class="container">
    <vue-scroll>
      <div class="header flex align-center justify-between">
        <div class="headerLeft">全部项目</div>
        <div v-waves class="createBtn" @click="gotoAdd">创建新项目</div>
      </div>
      <div class="main">
        <div v-for="(item,index) in list" :key="index" class="classify">
          <div class="title">{{ item.typeName }}</div>
          <div class="items flex flex-wrap">
            <div
              v-for="(sub,subIndex) in item.templates"
              :key="subIndex"
              class="item"
              @click="goList(sub.id,sub.name)"
            >
              <div v-if="sub.coverUrl!==''" class="item_wrap" :style="{backgroundImage:'url('+sub.coverUrl+')'}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
                <!-- <img src="../../assets/images/delete.png" alt=""> -->
              </div>
              <div v-if="sub.coverUrl==''&&index==0" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/manufacture.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
              </div>
              <div v-if="sub.coverUrl==''&&index==1" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/sell.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
              </div>
              <div v-if="sub.coverUrl==''&&index==2" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/fix.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <el-dialog
        :title="addPage===1?'选择项目模版':'填写项目信息'"
        :visible.sync="showDialog"
        class="addTem-dialog"
        center
        width="1000px"
        :append-to-body="true"
      >
        <div v-if="addPage==2" slot="title" class="header-title flex align-center">
          <i class="el-icon-arrow-left back" @click="getBack" />
          <span class="title-age">填写项目信息</span>
        </div>

        <div v-if="addPage===1" class="main" style="padding-right:0">
          <vue-scroll>
            <div v-for="(item,index) in list" :key="index" class="classify">
              <div class="title">{{ item.typeName }}</div>
              <div class="items flex flex-wrap">
                <div
                  v-for="(sub,subIndex) in item.templates"
                  :key="subIndex"
                  class="item"
                  style="height:98px;"
                  @click="selectTem(sub.id)"
                >
                  <img
                    v-if="sub.id === addParam.templateId"
                    class="icon_select"
                    src="../../assets/images/selected.png"
                    alt
                  >
                  <div v-if="sub.coverUrl!==''" class="item_wrap" :style="{backgroundImage:'url('+sub.coverUrl+')'}">
                    <div class="mask" />
                    <div class="title2">{{ sub.name }}</div>
                    <div class="content2">{{ sub.briefIntro }}</div>
                  </div>

                  <div v-if="sub.coverUrl==''&&index==0" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/manufacture.png')})`}">
                    <div class="mask" />
                    <div class="title2">{{ sub.name }}</div>
                    <div class="content2">{{ sub.briefIntro }}</div>
                  </div>
                  <div v-if="sub.coverUrl==''&&index==1" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/sell.png')})`}">
                    <div class="mask" />
                    <div class="title2">{{ sub.name }}</div>
                    <div class="content2">{{ sub.briefIntro }}</div>
                  </div>
                  <div v-if="sub.coverUrl==''&&index==2" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/fix.png')})`}">
                    <div class="mask" />
                    <div class="title2">{{ sub.name }}</div>
                    <div class="content2">{{ sub.briefIntro }}</div>
                  </div>
                </div>
              </div>
            </div>
          </vue-scroll>
        </div>

        <div v-if="addPage===2" class="productInfo flex">
          <div class="infoLeft">
            <vue-scroll>
              <div class="infoLeft_wrap">
                <div class="productFlow">项目流程</div>
                <div v-for="(item,index) in flowNodes" :key="index" class="flow">
                  <div class="flowname">{{ item.name }}</div>
                  <img src="../../assets/images/arrow.png" alt>
                </div>
              </div>
            </vue-scroll>
          </div>
          <div class="FGX" />
          <div class="infoRight">
            <vue-scroll>
              <div class="productname font14 mt30">
                <span style="color:#F44568;margin-right:4px">*</span>项目名称
              </div>
              <input
                v-model="addParam.name"
                style="margin-left:40px;"
                class="name-input mt10"
                type="text"
                placeholder="请输入项目名称"
              >
              <div class="period font14 mt30" style="margin-left:40px;">项目周期</div>
              <div class="startTime mt10">
                <el-date-picker
                  v-model="addParam.startDateStr"
                  type="date"
                  placeholder="开始时间"
                  value-format="yyyy.MM.dd"
                />
              </div>
              <div class="endTime mt10">
                <el-date-picker
                  v-model="addParam.endDateStr"
                  type="date"
                  placeholder="结束时间"
                  value-format="yyyy.MM.dd"
                />
              </div>
              <div class="mt30 font14" style="width: 92%;padding-left: 40px;flex-wrap: wrap;">默认参与人（{{ joinArr.length }}）</div>
              <div class="headImgs mt20 flex flexwrap" style="margin-left:40px;">
                <div v-for="(item,index) in joinArr" :key="index" class="avatar">{{ item.nickname }}</div>
              </div>
            </vue-scroll>
          </div>
          <div class="dialog-foot flex justify-between align-center">
            <div class="footLeft flex align-center" @click="checkPublic">
              <img v-if="addParam.publicFlag===1" src="../../assets/images/lock2.png" alt>
              <img v-if="addParam.publicFlag===0" src="../../assets/images/lock1.png" alt>
              <div class="font14 publicName">{{ addParam.publicFlag===1?'项目公开':'仅参与人可见' }}</div>
            </div>
            <div class="sureBtn" style="margin-left:0" @click="sureAdd">确认</div>
          </div>
        </div>

      </el-dialog>
    </vue-scroll>
  </div>
</template>

<script>
import waves from '@/directives/waves'
import { templateList, templateDetail } from '../../api/template'
import { addProject } from '../../api/project'
export default {
  directives: {
    waves
  },
  data() {
    return {
      visible: false,
      list: [],
      showDialog: false,
      addParam: {
        templateId: '',
        name: '',
        startDateStr: '',
        endDateStr: '',
        publicFlag: 1,
        stepExecutors: []
      },
      addPage: 1,
      flowNodes: [],
      joinArr: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    goList(id, name) {
      this.$router.push({
        path: '/projectList',
        query: {
          id: id,
          templateName: name
        }
      })
    },
    sureAdd() {
      addProject(this.addParam).then(res => {
        this.$notify({
          title: '成功',
          message: '添加项目成功',
          type: 'success'
        })

        setTimeout(() => {
          this.showDialog = false
          const routeUrl = this.$router.resolve({ path: '/detail', query: { id: res.data.id }})
          window.open(routeUrl.href, '_blank')
        }, 1000)
      })
    },
    getBack() {
      this.addPage = 1
    },
    checkPublic() {
      if (this.addParam.publicFlag === 1) {
        this.addParam.publicFlag = 0
      } else {
        this.addParam.publicFlag = 1
      }
    },
    selectTem(id) {
      this.addParam.templateId = id
      templateDetail(id).then(res => {
        // this.flowNodes = res.flowNodes
        const arr = []
        var joinArr = []
        for (let i = 0; i < res.flowNodes.length; i++) {
          // console.log(joinArr)
          // console.log(res.flowNodes[i].executors)
          if (res.flowNodes[i].type === 1) {
            joinArr = joinArr.concat(res.flowNodes[i].executors)
            arr.push(res.flowNodes[i])
          }
        }
        const hash = {}
        joinArr = joinArr.reduce((item, next) => {
          if (!hash[next.id]) {
            hash[next.id] = true
            item.push(next)
          }
          return item
        }, [])
        for (let i = 0; i < joinArr.length; i++) {
          const name = joinArr[i].name.split('').reverse()
          if (name.length === 1) {
            joinArr[i].nickname = name[0]
          } else {
            joinArr[i].nickname = name[1] + name[0]
          }
        }

        this.joinArr = joinArr
        this.flowNodes = arr
        this.addPage = 2
      })
    },

    gotoAdd() {
      this.showDialog = true
      // this.addParam.templateId = ''
      this.addParam = {
        templateId: '',
        name: '',
        startDateStr: '',
        endDateStr: '',
        publicFlag: 1,
        stepExecutors: []
      }
      this.addPage = 1
    },
    getList() {
      templateList().then(res => {
        this.list = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.publicName:hover{
  color:#53B4B3
}
.header-title{
  padding-left:25px;
  height: 22px;
  i{
        color: #666;
    font-size: 17px;
    position: absolute;
    z-index: 99;
    top: 27px;
    left: 25px;
    cursor: pointer;
    &:hover{
      transform:scale(1.1,1.1);
    -ms-transform:scale(1.1,1.1);
    -webkit-transform:scale(1.1,1.1);
    }
  }
  .title-age{
    font-size:16px;
    color:rgba(51,51,51,1);
    margin-left:430px;
  }
}
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 10 * $bg1px;
}
input {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding-left: 15 * $bg1px !important;
}
.flow:nth-last-of-type(1) img {
  display: none;
}
.Font333 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
input {
  width: 83.6%;
  height: 40 * $bg1px;
  outline: none;
  border-radius: 4 * $bg1px;
  padding-left: 10 * $bg1px;
  border: 1 * $bg1px solid rgba(238, 238, 238, 1);
  &::-webkit-input-placeholder {
    color: rgba(153, 153, 153, 1);
  }
  &:-moz-placeholder {
    color: rgba(153, 153, 153, 1);
  }
  &::-moz-placeholder {
    color: rgba(153, 153, 153, 1);
  }
  &:-ms-input-placeholder {
    color: rgba(153, 153, 153, 1);
  }
}

.main {
  width: 100%;
  padding: 0 5 * $bg1px 0 25 * $bg1px;
  height:100%;
  .classify {
    margin-top: 30 * $bg1px;
    .title {
      font-size: 15px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      @media (min-width: 1800px) {
              & {
                font-size: 16px;
              }
            }
    }
    .items {
      flex-wrap: wrap;
      .item {
        height: 160 * $bg1px;
        width: 20%;
        // min-width: 176px;
        // min-height: 94px;
        margin-top: 20 * $bg1px;
        // margin-right:20*$bg1px;
        padding-right: 20 * $bg1px;
        position: relative;
        .icon_select {
          position: absolute;
          width: 25 * $bg1px;
          height: 25 * $bg1px;
          z-index: 999;
          top: 0;
          right: 20 * $bg1px;
          // display: none;
        }

        .item_wrap {
          // background-image: url("../../assets/images/test.jpg");
          background-size: 100% 100%;
          width: 100%;
          position: relative;
          height: 100%;
          overflow: hidden;
          z-index: 9;
          cursor: pointer;
          border-radius: 4px;
          &:hover .mask {
            background: linear-gradient(
              180deg,
              rgba(70, 73, 86, 0.6) 0%,
              rgba(34, 35, 43, 0.8) 100%
            );
          }
          &:hover .content {
            top: 116 * $bg1px !important;
          }
          &:hover .content2 {
            top: 71px !important;
          }
          &:hover .title {
            top: 89 * $bg1px !important;
          }
          &:hover .title2 {
            top: 55.62% !important;
          }
          &:hover img {
            display: block;
          }

          .mask {
            background: linear-gradient(
              180deg,
              rgba(70, 73, 86, 0) 0%,
              rgba(34, 35, 43, 0.8) 100%
            );
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            z-index: 9;
          }
          .title {
            font-size: 15px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            top: 118 * $bg1px;
            left: 20 * $bg1px;
            z-index: 9;
            position: absolute;
            transition: top 0.3s;
            -moz-transition: top 0.3s; /* Firefox 4 */
            -webkit-transition: top 0.3s; /* Safari 和 Chrome */
            -o-transition: top 0.3s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
            @media (min-width: 1800px) {
              & {
                font-size: 16px;
              }
            }
          }
          .title2{
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            top: 73%;
            left: 20 * $bg1px;
            z-index: 9;
            position: absolute;
            transition: top 0.3s;
            -moz-transition: top 0.3s; /* Firefox 4 */
            -webkit-transition: top 0.3s; /* Safari 和 Chrome */
            -o-transition: top 0.3s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
          }
          .content {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            position: absolute;
            top: 160 * $bg1px;
            z-index: 9;
            // left:20*$bg1px;
            width: 100%;
            padding: 0 20 * $bg1px;
            transition: top 0.3s;
            -moz-transition: top 0.3s; /* Firefox 4 */
            -webkit-transition: top 0.3s; /* Safari 和 Chrome */
            -o-transition: top 0.3s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .content2{
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            position: absolute;
            top: 98px;
            z-index: 9;
            // left:20*$bg1px;
            width: 100%;
            padding: 0 20 * $bg1px;
            transition: top 0.3s;
            -moz-transition: top 0.3s; /* Firefox 4 */
            -webkit-transition: top 0.3s; /* Safari 和 Chrome */
            -o-transition: top 0.3s; /* Opera */
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out; /* Firefox 4 */
            -webkit-transition-timing-function: ease-in-out; /* Safari 和 Chrome */
            -o-transition-timing-function: ease-in-out; /* Opera */
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          img {
            display: none;
            position: absolute;
            top: 15 * $bg1px;
            right: 15 * $bg1px;
            width: 15 * $bg1px;
            height: 15 * $bg1px;
            z-index: 999;
          }
        }
      }
    }
  }
}

.productInfo {
  width: 100%;
  height: calc(100% - 72px);
  .back {
    color: #666;
    font-size: 17px;
    position: absolute;
    z-index: 99;
    top: 26px;
    left: 25px;
    cursor: pointer;
  }
  .infoLeft {
    width: 50%;

    height: 100%;
    overflow-y: auto;

    .infoLeft_wrap{
      padding-top: 30px;
      padding-bottom: 20px;

    .productFlow {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      margin-bottom: 30px;
      &:nth-last-child(1) {
        display: none;
      }
    }
    .flow {
      margin: 0 auto;
      width: 156px;
      .flowname {
        width: 156px;
        height: 40px;
        background: rgba(83,180,179, 0.1);
        border-radius: 4px;
        border: 1px solid rgba(83,180,179, 0.3);
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      img {
        width: 9px;
        height: 41px;
        margin-left: 73px;
      }
    }
    }
  }
  .FGX {
    width: 1px;
    margin-top: 30px;
    height: 79%;
    background: rgba(238, 238, 238, 1);
  }
  .infoRight {
    width: 50%;
    overflow-x: hidden;
    height: 100%;
    overflow-y: auto;
    .productname {
      margin-left: 28px;
    }
    input {
      width: 83.6%;
      height: 40px;
      outline: none;
      border-radius: 4px;
      padding-left: 10px;
      border: 1px solid rgba(238, 238, 238, 1);
      &:focus{
        border: 1px solid #53B4B3;
      }
      &::-webkit-input-placeholder {
        color: rgba(153, 153, 153, 1);
      }
      &:-moz-placeholder {
        color: rgba(153, 153, 153, 1);
      }
      &::-moz-placeholder {
        color: rgba(153, 153, 153, 1);
      }
      &:-ms-input-placeholder {
        color: rgba(153, 153, 153, 1);
      }
    }
    .headImgs {
      .avatar {
        width: 36px;
        background: #53B4B3;
        height: 36px;
        border-radius: 50%;
        margin-right: 10px;
        margin-bottom: 10px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
  .dialog-foot {
    height: 72px;
    width: 100%;
    border-top: 1px solid #eee;
    padding: 0 50px 0 25px;
    position: absolute;
    bottom: 0;
    background: #fff;
    z-index: 999;

    .footLeft {
      cursor: pointer;
      img {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }
    }
  }
}

.container {
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1 * $bg1px solid #eee;
    padding: 0 25 * $bg1px;
    @media(min-width:1800px) {
        &{
          height: 75px;
        }
      }
    .headerLeft {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      @media(min-width:1800px) {
        &{
          font-size:18px;
        }
      }
    }
    .createBtn {
      width: 90px;
      height: 35px;
      background: #53B4B3;
      border-radius: 4px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 35px;
      cursor: pointer;
    }
  }
}
</style>
