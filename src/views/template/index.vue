<template>
  <div class="container">
    <vue-scroll>
      <div class="header flex align-center justify-between">
        <div class="headerLeft">全部模板</div>
        <div v-waves class="createBtn" @click="gotoAdd">创建新模板</div>
      </div>
      <div class="main">
        <div v-for="(item,index) in list" :key="index" class="classify">
          <div class="title">{{ item.typeName }}</div>
          <div class="items flex flex-wrap">
            <div v-for="(sub,subIndex) in item.templates" :key="subIndex" class="item" @click="goEdit(sub.id)">
              <div v-if="sub.coverUrl!==''" class="item_wrap" :style="{backgroundImage:'url('+sub.coverUrl+')'}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
                <img src="../../assets/images/delete.png" alt @click.stop="showDel(sub.id)">
              </div>
              <div v-if="sub.coverUrl==''&&index==0" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/manufacture.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
                <img src="../../assets/images/delete.png" alt @click.stop="showDel(sub.id)">
              </div>
              <div v-if="sub.coverUrl==''&&index==1" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/sell.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
                <img src="../../assets/images/delete.png" alt @click.stop="showDel(sub.id)">
              </div>
              <div v-if="sub.coverUrl==''&&index==2" class="item_wrap" :style="{backgroundImage:`url(${require('../../assets/images/fix.png')})`}">
                <div class="mask" />
                <div class="title">{{ sub.name }}</div>
                <div class="content">{{ sub.briefIntro }}</div>
                <img src="../../assets/images/delete.png" alt @click.stop="showDel(sub.id)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>

    <el-dialog
      title="提示"
      :visible.sync="delDialog"
      width="525px"
      :show-close="show_close"
      center
      class="text-center del-dialog"
      :append-to-body="true"
    >
      <div class="text-center">
        <span>确认删除该模板吗？</span>
      </div>

      <span slot="footer" class="dialog-footer flex justify-center">
        <div class="cancelBtn" @click="delDialog = false">取消</div>
        <div class="sureBtn" @click="sureDel">确认</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directives/waves'
import { templateList, delTemplate } from '../../api/template'
export default {
  directives: {
    waves
  },
  data() {
    return {
      visible: false,
      list: [],
      delDialog: false,
      show_close: false,
      selectId: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    sureDel() {
      delTemplate(this.selectId).then(res => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
        this.getList()
      })
      this.delDialog = false
    },
    cancelDel() {

    },
    goEdit(id) {
      this.$router.push({ path: 'editTemplate', query: {
        id: id
      }})
    },
    showDel(id) {
      this.delDialog = true
      this.selectId = id
    },
    gotoAdd() {
      setTimeout(() => {
        this.$router.push({
          path: '/addTemplate'
        })
      }, 180)
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
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 10 * $bg1px;
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
  .main {
    width: 100%;
    padding: 0 5 * $bg1px 0 25 * $bg1px;
    .classify {
      margin-top: 30 * $bg1px;
      .title {
        font-size: 15px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        @media(min-width:1800px) {
        &{
          font-size:16px;
        }
      }
      }
      .items {
        flex-wrap: wrap;
        .item {
          height: 160 * $bg1px;
          width: 20%;
          margin-top: 20 * $bg1px;
          // margin-right:20*$bg1px;
          padding-right: 20 * $bg1px;

          .item_wrap {
            // background-image: url("../../assets/images/test.jpg");
            background-size: 100% 100%;
            width: 100%;
            position: relative;
            height: 100%;
            overflow: hidden;
            z-index: 9;
            border-radius:4px;
            cursor: pointer;
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
            &:hover .title {
              top: 89 * $bg1px !important;
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
              @media(min-width:1800px) {
        &{
          font-size:16px;
        }
      }
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
            img {
              display: none;
              position: absolute;
              top: 15 * $bg1px;
              right: 15 * $bg1px;
              width: 15 * $bg1px;
              height: 15 * $bg1px;
              z-index: 99999;
            }
          }
        }
      }
    }
  }
}
</style>
