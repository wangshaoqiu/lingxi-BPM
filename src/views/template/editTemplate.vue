<template>
  <div class="container">
    <vue-scroll>
      <div class="header flex align-center justify-between">
        <div class="flex align-center">
          <img src="../../assets/images/goBack.png" class="pointer" alt="">
          <div class="header_1 pointer" @click="goBack">返回</div>
        </div>
        <div class="tab tab1">
          <div class="menuItem" :class="menuIndex===0?'menuItem2':''" @click="checkTab(0)">基础信息</div>
          <div v-if="menuIndex===0" class="FGX" />
        </div>
        <div class="tab tab2">
          <div class="menuItem" :class="menuIndex===1?'menuItem2':''" @click="checkTab(1)">项目流程</div>
          <div v-if="menuIndex===1" class="FGX" />
        </div>
        <div class="saveBtn" @click="saveTemplate">保存模板</div>
      </div>
      <div class="main">

        <div v-if="menuIndex===0" class="formArea">
          <el-form ref="detail" :model="detail" label-width="182px">
            <el-form-item label="项目模版类型：" required>
              <el-select
                v-model="detail.type"
                v-waves
                class="elSelect"
                placeholder="请选择项目模版类型"
                style="width:31.92%;min-width:300px;"
              >
                <el-option
                  v-for="(item,index) in tmpl_type"
                  :key="index"
                  :label="item.desc"
                  :value="index + 1"
                />
              </el-select>
            </el-form-item>
            <div class="flex mt30">
              <el-form-item label="模板封面：" />
              <div v-if="detail.coverUrl!==''" class="fileImg_box2">
                <img class="fileImg2" :src="detail.coverUrl" alt>
                <div class="mask">
                  <div class="mask_box flex justify-center align-center">
                    <div>
                      <i class="el-icon-delete colorFFF font20 ml10" @click="delNewFileImg" />
                    </div>
                  </div>
                </div>
              </div>

              <el-upload
                v-if="detail.coverUrl===''"
                class="avatar-uploader"
                auto-upload
                :data="uploadParams"
                :action="actionUrl"
                :show-file-list="false"
                :limit="limit"
                :on-success="handleAvatarSuccess"
              >
                <div class="newFile_upload">
                  <div class="upload_add">
                    <i class="el-icon-plus" />
                  </div>
                  <div class="upload_txt">上传图片</div>
                </div>
              </el-upload>
            </div>
            <div class="suggest2">*建议尺寸140*125像素</div>
            <el-form-item label="项目模版名称：" required>
              <el-input
                v-model="detail.name"
                placeholder="请输入项目模版名称"
                autocomplete="off"
                style="width:90.97%;min-width:300px;"
              />
            </el-form-item>
            <el-form-item label="项目模版简介：" style="margin-bottom:0">
              <el-input
                v-model="detail.briefIntro"
                type="textarea"
                rows="5"
                placeholder="请输入项目模版简介"
                style="width:90.97%;min-width:300px;"
              />
            </el-form-item>

            <div
              style="width:100%;margin-top:9.26vh;padding-bottom:50px;"
              class="flex justify-center"
            />
          </el-form>
        </div>

        <div v-if="menuIndex===1" class="flowArea">
          <div v-for="(item,index) in detail.flowNodes" :key="index" class="flow">
            <div v-if="item.type===1" class="flowBox">
              <div class="flowHeader flex justify-between align-center">
                <input
                  v-model="item.name"
                  type="text"
                  placeholder="请输入项目环节名称"
                >
                <img
                  v-if="item.type==2"
                  class="delIcon"
                  src="../../assets/images/icon_del.png"
                  alt
                  @click="delNode(index)"
                >
              </div>
              <div class="executorBox flex align-center" @click="addPerson(index)">
                <div class="executor1">本环节执行人员</div>
                <div class="executor2 flex flex-wrap pointer">
                  <div
                    v-for="(sub,subIndex) in item.executors"
                    :key="subIndex"
                    class="avatar"
                  >{{ sub.nickname }}</div>
                </div>
                <img
                  class="executor3"
                  src="../../assets/images/icon_right.png"
                  alt
                >
              </div>
            </div>

            <div v-if="item.type===2" class="flowBox">
              <div class="flowHeader flex justify-between align-center" style="background:#FFD6A2">
                <div class="approver">审批人</div>
                <img
                  class="delIcon"
                  src="../../assets/images/icon_del.png"
                  alt
                  @click="delNode(index)"
                >
              </div>
              <div class="executorBox flex align-center" @click="addPerson(index)">
                <div class="approver_head flex flex-wrap pointer">
                  <div
                    v-for="(sub,subIndex) in item.executors"
                    :key="subIndex"
                    class="avatar"
                  >{{ sub.nickname }}</div>
                </div>
                <img
                  class="approver_icon"
                  src="../../assets/images/icon_right.png"
                  alt
                >
              </div>
            </div>

            <div class="SHU" />

            <el-popover v-model="item.visible" placement="right" width="200">
              <div class="options">
                <!-- <div class="option option1 flex align-center" @click="addLink(index)">
                  <img src="../../assets/images/nowlink.svg" alt>
                  <div>在此后添加环节</div>
                </div> -->
                <div class="option option2 flex align-center" @click="addExecutor(index)">
                  <img src="../../assets/images/executor.svg" alt>
                  <div>添加节点审批人</div>
                </div>
              </div>
              <img slot="reference" class="icon_add" src="../../assets/images/icon_add.png" alt>
            </el-popover>
          </div>
          <div class="end">
            <div class="end1" />
            <div class="end2">结束</div>
          </div>
          <div class="btns flex justify-between" style="padding-bottom:50px;" />
        </div>

      </div>

      <div class="del-dialog">
        <el-dialog
          title="确认删除本环节吗？"
          :visible.sync="delDialog"
          width="525px"
          :show-close="show_close"
          center
          class="text-center"
        >
          <div class="text-center">
            <span>删除本环节流程，则本环节相关的人员将同时被删除</span>
          </div>

          <span slot="footer" class="dialog-footer flex justify-center">
            <div class="cancelBtn" @click="cancelDel">取消</div>
            <div class="sureBtn" @click="sureDel">确认</div>
          </span>
        </el-dialog>
      </div>

      <el-drawer v-if="detail.flowNodes" ref="drawer" :visible.sync="drawer" direction="rtl" :show-close="show_close">
        <div class="drawerHead flex align-center">
          <div class="drawerHead1">{{ detail.flowNodes[addPerson_index].type===1?'环节执行人':'节点审批人' }}</div>
          <div
            v-if="detail.flowNodes[addPerson_index].type===1"
            class="drawerHead2"
          >{{ detail.flowNodes[addPerson_index].name }}</div>

          <div v-if="detail.flowNodes[addPerson_index].type===2" class="drawerHead2">{{ lastLinkName }}</div>
          <div v-if="detail.flowNodes[addPerson_index].type===2" class="ZHI">至</div>
          <div v-if="detail.flowNodes[addPerson_index].type===2" class="drawerHead3">{{ nextLinkName }}</div>
        </div>
        <div class="drawer_add flex align-center">
          <div class="sureBtn" style="width:90px;margin-left:30px;" @click="showSelectForm">指定成员</div>
          <div v-if="detail.flowNodes[addPerson_index].type===1" class="count">（共 {{ count }} 人）</div>
        </div>

        <div class="drawer_main">
          <div class="table-responsive mt20 mark1">
            <el-table
              :data="detail.flowNodes[addPerson_index].executors"
              :empty-text="emptyText"
              style="width: 100%"
            >
              <el-table-column label="*">
                <template slot-scope="scope">
                  <div class="avatar rounded-circle">{{ scope.row.nickname }}</div>
                </template>
              </el-table-column>
              <el-table-column label="姓名">
                <template slot-scope="scope">{{ scope.row.name }}</template>
              </el-table-column>
              <el-table-column label="部门">
                <template slot-scope="scope">
                  <!-- {{ scope.row.parentOrgName }}
                  <span v-if="scope.row.parentOrgName&&scope.row.orgName!==null">|</span> -->
                  {{ scope.row.orgName }}
                </template>
              </el-table-column>
              <el-table-column label>
                <template slot-scope="scope">
                  <i class="el-icon-close" @click="delPerson(scope.row.id)" />
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div class="drawer_foot flex align-center justify-center">
          <div class="cancelBtn" @click="cancelAdd">取消</div>
          <div class="sureBtn" @click="sureAdd">确认</div>
        </div>
      </el-drawer>

      <!-- 选择执行人或者审核人弹框 -->
      <div v-if="selectForm1" class="selectForm1">
        <div class="selectForm1_wrap flex justify-between">
          <div class="selectForm1_left">
            <div class="selectForm1_title">添加成员</div>
            <el-input v-model="filterText" placeholder="搜索成员" />

            <el-tree
              ref="tree"
              class="filter-tree"
              :data="memberStructures"
              :props="defaultProps"
              accordion
              show-checkbox
              highlight-current
              :filter-node-method="filterNode"
              style="border:1px solid #EBEEF5;padding:5px;height:290px;margin-top:8px;overflow-y:auto"
              @check-change="treeCheck"
            />
          </div>

          <div class="selectForm1_left">
            <div class="selectForm1_title">已选成员</div>
            <div class="selected_box">
              <div class="table-responsive" style="margin-top:-2px">
                <el-table :data="selectedMember" style="width: 100%">
                  <el-table-column label="姓名">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <i class="el-icon-delete" @click="delSelectId(scope.row.id)" />
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>

          <div class="select_footer flex justify-center">
            <div class="cancelBtn" @click="cancelSelect">取消</div>
            <div class="sureBtn" @click="sureSelect">确认</div>
          </div>
        </div>
      </div>
    <!-- end选择执行人或者审核人弹框 -->
    </vue-scroll>
  </div>
</template>

<script>
import waves from '@/directives/waves'
import { memberStructures } from '@/api/organization'
import { editTemplate, templateDetail } from '@/api/template'
import { getOptions } from '@/api/common'
export default {
  directives: {
    waves
  },
  data() {
    return {
      emptyText: '暂无成员',
      memberStructures: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      drawer: false,
      count: 0,
      visible: false,
      delDialog: false,
      show_close: false,
      menuIndex: 0,
      type: '',
      selectForm1: false,
      filterText: '',
      uploadParams: {
        business: 'proj-tmpl-cover'
      },
      actionUrl: '',
      limit: 1,
      visible_arrow: false,
      addPerson_index: 0,
      selectedMember: [],
      tmpl_type: [],
      executor_length: 0,
      lastLinkName: '',
      nextLinkName: '结束',
      templateId: '',
      detail: {}
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
    drawer: 'cancelAdd2'
  },
  created() {
    this.templateId = this.$route.query.id
    this.actionUrl = 'http://tapi.neets.cc/tm/v1/image-utils/ext/upload'
    this.getStructures()
    this.getParams()
    this.getDetail()
  },
  methods: {
    cancelAdd2() {
      this.selectForm1 = false
    },
    saveTemplate() {
      const detail2 = JSON.parse(JSON.stringify(this.detail))
      for (let i = 0; i < detail2.flowNodes.length; i++) {
        var tempArr = []
        for (let x = 0; x < detail2.flowNodes[i].executors.length; x++) {
          // detail2.flowNodes[i].executorIds = []
          tempArr.push(detail2.flowNodes[i].executors[x].id)
          detail2.flowNodes[i].executorIds = tempArr
        }
        delete detail2.flowNodes[i].executors
      }
      editTemplate(detail2, this.templateId).then(res => {
        this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success'
        })
      })
    },
    getDetail() {
      templateDetail(this.templateId).then(res => {
        for (let i = 0; i < res.flowNodes.length; i++) {
          for (let x = 0; x < res.flowNodes[i].executors.length; x++) {
            const name = res.flowNodes[i].executors[x].name.split('').reverse()
            if (name.length === 1) {
              res.flowNodes[i].executors[x].nickname = name[0]
            } else {
              res.flowNodes[i].executors[x].nickname = name[1] + name[0]
            }
          }
        }
        this.detail = res
      })
    },
    goBack() {
      this.$router.push({
        path: 'template'
      })
    },
    checkTab(index) {
      this.menuIndex = index
    },
    getParams() {
      const param = {
        tags: ['tmpl_type']
      }
      getOptions(param).then(res => {
        this.tmpl_type = res.tmpl_type
      })
    },
    // saveTemplate() {
    //   const params = JSON.parse(JSON.stringify(this.form))
    //   for (let i = 0; i < this.form.flowNodes.length; i++) {
    //     params.flowNodes[i].executorIds = []
    //     for (let x = 0; x < this.form.flowNodes[i].executorIds.length; x++) {
    //       params.flowNodes[i].executorIds.push(
    //         this.form.flowNodes[i].executorIds[x].id
    //       )
    //     }
    //   }
    //   addTemplate(params).then(() => {
    //     this.$notify({
    //       title: '成功',
    //       message: '新增模板成功',
    //       type: 'success'
    //     })
    //     this.$router.push({ path: 'template' })
    //   })
    // },

    cancelAdd() {
      // 恢复打开drawer之前的样子
      this.drawer = false
      this.detail.flowNodes[this.addPerson_index].executors.splice(
        this.executor_length
      )
      this.selectForm1 = false
    },
    sureAdd() {
      this.drawer = false

      // reduce方法去重
      const hash = {}
      this.detail.flowNodes[
        this.addPerson_index
      ].executors = this.detail.flowNodes[
        this.addPerson_index
      ].executors.reduce((item, next) => {
        if (!hash[next.id]) {
          hash[next.id] = true
          item.push(next)
        }
        return item
      }, [])

      // this.form.flowNodes[this.addPerson_index].executorIds = hash
    },
    delPerson(id) {
      for (
        let i = 0;
        i < this.detail.flowNodes[this.addPerson_index].executors.length;
        i++
      ) {
        if (
          this.detail.flowNodes[this.addPerson_index].executors[i].id === id
        ) {
          this.detail.flowNodes[this.addPerson_index].executors.splice(i, 1)
        }
      }
    },
    showSelectForm() {
      this.selectForm1 = true
    },
    // 确认选择
    sureSelect() {
      if (this.selectedMember.length === 0) {
        this.$notify({
          title: '失败',
          message: '请至少选择一名成员！',
          type: 'warning'
        })
        return
      }
      // reduce方法去重
      this.detail.flowNodes[this.addPerson_index].executors = this.detail.flowNodes[this.addPerson_index].executors.concat(this.selectedMember)
      const hash = {}
      this.detail.flowNodes[this.addPerson_index ].executors = this.detail.flowNodes[this.addPerson_index].executors.reduce((item, next) => {
        if (!hash[next.id]) {
          hash[next.id] = true
          item.push(next)
        }
        return item
      }, [])

      this.selectedMember = []
      this.filterText = ''
      this.selectForm1 = false
    },
    // 取消选择
    cancelSelect() {
      this.selectForm1 = false
      this.selectedMember = []
      this.filterText = ''
    },
    // 删除预选成员
    delSelectId(id) {
      for (let i = 0; i < this.selectedMember.length; i++) {
        if (id === this.selectedMember[i].id) {
          this.selectedMember.splice(i, 1)
        }
      }
    },
    // 添加成员的输入框选择1
    treeCheck() {
      this.selectedMember = []
      const aa = this.$refs.tree.getCheckedNodes()
      for (let i = 0; i < aa.length; i++) {
        if (aa[i].type === 2) {
          const name1 = aa[i].label.split('').reverse()
          var nickname
          if (name1.length === 1) {
            nickname = name1[0]
          } else {
            nickname = name1[1] + name1[0]
          }

          const obg = {
            name: aa[i].label,
            id: aa[i].id,
            checked: false,
            nickname: nickname,
            orgName: aa[i].memOrgName
          }
          this.selectedMember.push(obg)
        }
      }
    },
    // 树形控件过滤
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 获取完整组织成员架构
    getStructures() {
      memberStructures().then(res => {
        this.memberStructures = res
      })
    },
    addPerson(index) {
      this.drawer = true
      this.addPerson_index = index
      // executor_length 用来记录初始化有多少个人，如果点击取消，恢复初始化
      this.executor_length = this.detail.flowNodes[
        this.addPerson_index
      ].executors.length
      for (let i = 0; i < index; i++) {
        if (this.detail.flowNodes[i].type === 1) {
          this.lastLinkName = this.detail.flowNodes[i].name
        }
      }
      for (let i = index; i < (this.detail.flowNodes.length); i++) {
        if (this.detail.flowNodes[i].type && this.detail.flowNodes[i].type === 1) {
          this.nextLinkName = this.detail.flowNodes[i].name
          return
        } else {
          this.nextLinkName = '结束'
        }
      }
    },
    cancelDel() {
      this.delDialog = false
    },
    sureDel() {
      this.delDialog = false
      this.detail.flowNodes.splice(this.selectNode, 1)
    },
    delNode(index) {
      this.selectNode = index

      this.delDialog = true
    },
    addLink(index) {
      const obj = {
        type: 1,
        name: '项目环节名称',
        executors: [],
        visible: false
      }
      this.detail.flowNodes.splice(index + 1, 0, obj)
      this.detail.flowNodes[index].visible = false
    },
    addExecutor(index) {
      const obj = {
        name: '',
        type: 2,
        executors: [],
        visible: false
      }
      this.detail.flowNodes.splice(index + 1, 0, obj)
      this.detail.flowNodes[index].visible = false
    },

    lastStep() {
      this.menuIndex = 0
    },
    // inputName(index) {
    //   const inputValue = this.detail.flowNodes[index].name
    //   if (inputValue === '项目环节名称') {
    //     this.detail.flowNodes[index].name = ''
    //   }
    // },
    // inputName2(index) {
    //   const inputValue = this.detail.flowNodes[index].name
    //   if (inputValue === '') {
    //     this.detail.flowNodes[index].name = '项目环节名称'
    //   }
    // },
    backTemplate() {
      this.$router.push({
        path: '/template'
      })
    },
    // next() {
    //   if (this.form.type === '') {
    //     this.$notify({
    //       title: '提示',
    //       message: '请选择项目类型',
    //       type: 'warning'
    //     })
    //     return
    //   }
    //   if (this.form.name === '') {
    //     this.$notify({
    //       title: '提示',
    //       message: '请填写项目名称',
    //       type: 'warning'
    //     })
    //     return
    //   }
    //   this.menuIndex = 1
    // },
    handleAvatarSuccess(res) {
      this.detail.coverUrl = res[0].imageUrl
    },
    delNewFileImg() {
      this.detail.coverUrl = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";
.el-icon-close,
.el-icon-delete {
  cursor: pointer;
}
.avatar {
  background: #53B4B3;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 36px;
  font-size: 13px;
}
.selectForm1 {
  position: fixed;
  width: 500px;
  top: 100px;
  height: 500px;
  left: 50%;
  margin-left: -250px;
  z-index: 99999;
  background: #fff;
}
.selectForm1_left {
  width: 48%;
  height: 380px;
}
.selectForm1_title {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 20px;
}
.selected_box {
  width: 1005;
  height: 340px;
  border: 1px solid #ebeef5;
  margin-top: 8px;
  overflow-y: auto;
}
.select_footer {
  position: absolute;
  width: 100%;
  bottom: 30px;
}
.selectForm1_wrap {
  position: relative;
  width: 500px;
  height: 500px;
  padding: 25px 25px 30px 25px;
}
.el-select-dropdown__item {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.container {
  width: 100%;
  height: 100%;
.header {
    position: fixed;
    height:64px;
    min-height: 50px;
background:rgba(255,255,255,1);
box-shadow:0px 1px 3px 0px rgba(0,0,0,0.06);
width:100%;
top:0;
padding:0 30px;

z-index: 999;
@media(min-width: 1800px){
  &{
    height:80px;
  }
}
img{
  width:16px;
  height:16px;
  @media(min-width: 1800px){
  &{
   width:20px;
  height:20px;
  }
}
}
.header_1{
  font-size:15px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);
margin-left:10* $bg1px;
}
@media(min-width: 1800px){
  &{
    font-size:16px;
  }
}
.tab{
height: 54* $bg1px;
margin-top:30* $bg1px;
.menuItem{
font-size:15px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(153,153,153,1);
cursor: pointer;
@media(min-width: 1800px){
  &{
    font-size:16px;
  }
}
}
.menuItem2{
  font-size:15px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:#53B4B3;
cursor: pointer;
@media(min-width: 1800px){
  &{
    font-size:16px;
  }
}
}
.FGX{
  width:44px;
height:4* $bg1px;
background:#53B4B3;
border-radius:2px;
margin-top:22px;
margin-left:10* $bg1px;
@media(min-width: 1800px){
  &{
    margin-top:21px;
  }
}
 @media (max-width: 1200px) {
      & {
        display: none;
      }
    }
}
}
.saveBtn{
  width:90px;
height:35px;
background:#53B4B3;
border-radius:4px;
font-size:14px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
text-align: center;
line-height: 35px;
   cursor: pointer;
}
  }
  .main {
    background: #fff;
    border-radius: 4px;
    width: 1300px;
    overflow: auto;
    margin: 80px auto;
    @media (max-width: 1400px) {
      & {
        width: 90%;
      }
    }
    @media (min-width: 1800px) {
      & {
        top: 145px;
      }
    }
    .topMenu {
      width: 100%;
      height: 75px;
      padding: 0 32%;
      border-bottom: 1px solid #eee;
      .menuItem {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
      .menuItem2 {
        color: #53B4B3;
      }
    }
    .formArea {
      margin-top: 50px;
    }
    .flowArea {
      margin: 0 auto;
      margin-top: 60px;
      width: 340px;
      position: relative;
      .flow {
        margin-left: 10px;
        position: relative;
        .flowBox {
          width: 320px;
          height: 100px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
          border-radius: 4px;
          overflow: hidden;
          .flowHeader {
            width: 320px;
            height: 35px;
            background: rgba(207, 213, 247, 1);
            padding: 0 10px;
            input {
              width: 276px;
              height: 27px;
              background: rgba(207, 213, 247, 1);
              border-radius: 4px;
              text-align: center;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              padding-left: 20px;
              border: 0;
              outline: none;
              &:hover {
                text-decoration: underline;
              }
              &::-webkit-input-placeholder {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
              }
              &:focus {
                background: rgba(255, 255, 255, 1);
                text-align: left;
              }
            }
            .approver {
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin-left: 140px;
            }
            .delIcon {
              width: 14px;
              height: 14px;
              cursor: pointer;
            }
          }
          .executorBox {
            width: 320px;
            height: 65px;
            background: rgba(255, 255, 255, 1);
            padding: 0 15px 0 20px;
            .executor1 {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
            .executor2 {
              width: 138px;
              height: 36px;
              margin-left: 19px;
              overflow: hidden;
              .avatar {
                margin-right: 10px;
              }
              img {
                width: 36px;
                height: 36px;
                margin-right: 10px;
              }
            }
            .executor3 {
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
            .approver_head {
              width: 230px;
              height: 36px;
              margin-left: -4px;
              overflow: hidden;
              .avatar {
                margin-right: 10px;
              }
              img {
                width: 36px;
                height: 36px;
                margin-right: 10px;
              }
            }
            .approver_icon {
              width: 30px;
              height: 30px;
              margin-left: 29px;
              cursor: pointer;
            }
          }
        }
        .SHU {
          width: 1px;
          height: 125px;
          background: #53B4B3;
          opacity: 0.2006;
          margin-left: 170px;
        }
      }
      .end {
        width: 28px;
        height: 39px;
        margin-left: 166px;
        .end1 {
          width: 9px;
          height: 9px;
          background: #53B4B3;
          margin-left: 10px;
          border-radius: 50%;
        }
        .end2 {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-top: 10px;
        }
      }
      .btns {
        width: 100%;
        height: 44px;
        margin-top: 100px;
        .lastStep {
          width: 120px;
          height: 44px;
          background: rgba(238, 238, 238, 1);
          border-radius: 4px;
          border: 1px solid rgba(221, 221, 221, 1);
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 44px;
          text-align: center;
          cursor: pointer;
        }
        .saveTemplate {
          width: 120px;
          height: 44px;
          background: #53B4B3;
          border-radius: 4px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 44px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}

.fileImg_box2 {
  width: 300px;
  height: 165px;
  overflow: hidden;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 6px;
  // border: 1px solid #c0ccda;
  position: relative;
}

.fileImg2 {
  width: 300px;
  height: 165px;
}
.fileImg_box2:hover .mask {
  display: block;
}
.el-upload--picture-card {
  height: 125px;
  width: 140px;
  line-height: 125px;
}
.el-upload-list--picture-card .el-upload-list__item {
  height: 125px;
  width: 140px;
}
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.mask_box {
  width: 100%;
  height: 100%;
}
.suggest2 {
  margin-left: 192px;
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.newFile_upload {
  width: 300px;
  height: 165px;
  border-radius: 4px;
  border: 1px solid rgba(235, 238, 245, 1);
  background: #f6f6f6;
}
.upload_add {
  width: 100%;
  text-align: center;
  font-size: 27px;
  margin-top: 57px;
  color: #999;
  &:hover {
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
  }
}
.upload_txt {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #999999;
  margin-top: 9px;
}
.icon_add {
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 50px;
  left: 158px;
  cursor: pointer;
}
.options {
  width: 200px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  z-index: 99;
  padding-top: 4px;
  .option {
    width: 200px;
    height: 40px;
    cursor: pointer;

    &:hover {
      background: rgba(246, 246, 246, 1);
    }
    img {
      width: 15px;
      height: 15px;
      margin-left: 20px;
    }
    div {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-left: 10px;
    }
  }
}
.drawerHead {
  width: 100%;
  height: 10.2vh;
  min-height: 50px;
  border-bottom: 1px solid #eee;
  .drawerHead1 {
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-left: 30px;
  }
  .drawerHead2 {
    height: 28px;
    background: rgba(94, 114, 228, 0.0918);
    border-radius: 14px;
    margin-left: 30px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    line-height: 28px;
    padding: 0 15px;
  }
  .ZHI {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-left: 10px;
    margin-right: 10px;
  }
  .drawerHead3 {
    height: 28px;
    background: rgba(94, 114, 228, 0.0918);
    border-radius: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    line-height: 28px;
    padding: 0 15px;
  }
}
.drawer_foot {
  width: 100%;
  height: 10vh;
  min-height: 50px;
  position: fixed;
  background: #fff;
  bottom: 0;
  z-index: 99;
  border-radius: 0px 0px 0px 4px;
  border-top: 1px solid rgba(238, 238, 238, 1);
  width: 31.25% !important;
  min-width: 350px !important;
}
.drawer_add {
  margin-top: 30px;
  .count {
    margin-left: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
