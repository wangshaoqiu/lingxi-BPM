
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .header {
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #eee;
    padding-left: 41px;
    .tabItem {
      width: 64px;
      margin-top: 20px;
      margin-right: 59px;
      position: relative;
      cursor: pointer;
      .select {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #53B4B3;
            height: 22px;
    line-height: 22px;
      }
      .noSelect {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
            height: 22px;
    line-height: 22px;
      }
      .XHX {
        width: 30px;
        height: 2px;
        background: #53B4B3;
        border-radius: 1px;
        margin-top: 17px;
        margin-left: 17px;
      }
    }
  }
  .tableWrap {
    width: 100%;
    height: calc(100% - 75px);
    overflow: auto;
    padding: 20px 0 25px 0;
  }
}
.degreeArea {
  width: 150px;
  height: 136px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  i {
    font-size: 10px;
    color: #fff;
  }
  .degree3 {
    width: 118px;

    height: 28px;
    background: rgba(244, 91, 91, 1);
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 16px;
    line-height: 28px;
  }
  .degree2 {
    width: 100px;
    height: 28px;
    background: rgba(255, 148, 47, 1);
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 16px;
    line-height: 28px;
  }
  .degree1 {
    width: 100px;
    height: 28px;
    background: rgba(183, 186, 206, 1);
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 16px;
    line-height: 28px;
  }
}
.degree-wrapper3 {
  width: 47px;
  height: 24px;
  background: rgba(244, 91, 91, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 24px;
}
.degree-wrapper2 {
  width: 59px;
  height: 24px;
  background: rgba(255, 148, 47, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 24px;
}
.degree-wrapper1 {
  width: 44px;
  height: 24px;
  background: rgba(183, 186, 206, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 24px;
}
.status-wrapper {
  width: 56px;
  height: 24px;
  border-radius: 14px;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
}
.status-wrapper4 {
  border: 1px solid rgba(153, 153, 153, 1);
  color: rgba(153, 153, 153, 1);
}
.status-wrapper3 {
  border: 1px solid rgba(244, 91, 91, 1);
  color: rgba(244, 91, 91, 1);
}
.status-wrapper2 {
  border:1px solid rgba(255,148,47,1);
  color: rgba(255, 148, 47, 1);
}
.status-wrapper1 {
  border:1px solid rgba(83,180,179,1);
  color:#53B4B3;
}
.pagination {
  display: flex;
  flex-direction: row-reverse;
}
.subTab {
  width: 100%;
  height: 45px;
  padding-left: 40px;
}
.subTabItem {
  height: 33px;
  width: 48px;
  margin-top: 15px;
  margin-right: 70px;
  cursor: pointer;
  .select {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #53B4B3;
        height: 22px;
    line-height: 22px;
  }
  .noSelect {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    height: 22px;
    line-height: 22px;
  }
  .XHX2 {
    width: 30px;
    height: 2px;
    background: #53B4B3;
    border-radius: 1px;
    margin-top: 6px;
    margin-left: 9px;
  }
}
.count{
  position:absolute;
  right:-17px;
  top:-5px;
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
  <div>
    <div class="container">
      <div class="header flex">
        <div class="tabItem" @click="checkTab(0)">
          <div :class="index==0?'select':'noSelect'">所有项目</div>
          <div v-if="index==0" class="XHX" />
        </div>
        <div class="tabItem" @click="checkTab(1)">
          <div :class="index==1?'select':'noSelect'">我执行的</div>
        </div>
        <div class="tabItem" @click="checkTab(2)">
          <div :class="index==2?'select':'noSelect'">我发起的</div>
        </div>
        <div class="tabItem" @click="checkTab(3)">
          <div :class="index==3?'select':'noSelect'">我审核的</div>
          <div v-if="$store.state.app.tastNum>0" class="count">{{ $store.state.app.tastNum>99?99:$store.state.app.tastNum }}</div>
        </div>
      </div>
      <div v-if="index==1" class="subTab flex">
        <div class="subTabItem" @click="checkSubIndex(0)">
          <div :class="subIndex==0?'select':'noSelect'">执行中</div>
          <div v-if="subIndex==0" class="XHX2" />
        </div>
        <div class="subTabItem" @click="checkSubIndex(1)">
          <div :class="subIndex==1?'select':'noSelect'">已执行</div>
          <div v-if="subIndex==1" class="XHX2" />
        </div>
      </div>
      <div v-if="index==2" class="subTab flex">
        <div class="subTabItem" @click="checkSubIndex(0)">
          <div :class="subIndex==0?'select':'noSelect'">进行中</div>
          <div v-if="subIndex==0" class="XHX2" />
        </div>
        <div class="subTabItem" @click="checkSubIndex(1)">
          <div :class="subIndex==1?'select':'noSelect'">已完成</div>
          <div v-if="subIndex==1" class="XHX2" />
        </div>
      </div>
      <div v-if="index==3" class="subTab flex">
        <div class="subTabItem" @click="checkSubIndex(0)">
          <div :class="subIndex==0?'select':'noSelect'">待审核</div>
          <div v-if="subIndex==0" class="XHX2" />
        </div>
        <div class="subTabItem" @click="checkSubIndex(1)">
          <div :class="subIndex==1?'select':'noSelect'">已审核</div>
          <div v-if="subIndex==1" class="XHX2" />
        </div>
      </div>

      <div class="tableWrap">
        <vue-scroll>
          <el-table :data="list.list" stripe style="width: 100%">
            <el-table-column prop="name" label="项目名称" min-width="128">
              <template slot-scope="scope">
                <div @click="openProject(scope.row.id)">{{ scope.row.name }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="projTypeName" label="项目环节">
              <template slot-scope="scope">
                {{ scope.row.projTypeName }} - {{ scope.row.currStepName }}
              </template>
            </el-table-column>
            <el-table-column prop="urgencyDegree" label="优先级">
              <template slot-scope="scope">
                <el-popover v-model="scope.row.showPopover" trigger="click" placement="bottom">
                  <div class="degreeArea">
                    <div class="degree3 pointer" @click="selectDegree(scope.row.id,3)">
                      High
                      <i v-if="scope.row.urgencyDegree===3" class="el-icon-check ml20" />
                    </div>
                    <div class="degree2 mt10 pointer" @click="selectDegree(scope.row.id,2)">
                      Middle
                      <i v-if="scope.row.urgencyDegree===2" class="el-icon-check ml20" />
                    </div>
                    <div class="degree1 mt10 pointer" @click="selectDegree(scope.row.id,1)">
                      Low
                      <i v-if="scope.row.urgencyDegree===1" class="el-icon-check ml20" />
                    </div>
                  </div>
                  <div
                    v-if="scope.row.urgencyDegree===3"
                    slot="reference"
                    v-waves
                    class="degree-wrapper3 pointer"
                  >High</div>
                  <div
                    v-if="scope.row.urgencyDegree===2"
                    slot="reference"
                    v-waves
                    class="degree-wrapper2 pointer"
                  >Middle</div>
                  <div
                    v-if="scope.row.urgencyDegree===1"
                    slot="reference"
                    v-waves
                    class="degree-wrapper1 pointer"
                  >Low</div>
                </el-popover>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="currStepName" label="当前环节" /> -->
            <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                <div v-if="scope.row.status===4" class="status-wrapper status-wrapper4">已完成</div>
                <div v-if="scope.row.status===3" class="status-wrapper status-wrapper3">驳回</div>
                <div v-if="scope.row.status===2" class="status-wrapper status-wrapper2">待审核</div>
                <div v-if="scope.row.status===1" class="status-wrapper status-wrapper1">进行中</div>
              </template>
            </el-table-column>
            <el-table-column v-if="index==3" prop="initiatorName" label="提审人" />
            <el-table-column prop="startDateStr" label="项目时间">

              <template slot-scope="scope">
                <div v-if="scope.row.startDateStr!==''&&scope.row.endDateStr!==''" class="text-center">
                  {{ scope.row.startDateStr }} - {{ scope.row.endDateStr }}
                </div>
                <div v-if="scope.row.startDateStr==''&&scope.row.endDateStr!==''" class="text-center">
                  <span style="opacity:0">2020.01.01 - </span> {{ scope.row.endDateStr }}
                </div>
                <div v-if="scope.row.startDateStr!==''&&scope.row.endDateStr==''" class="text-center">
                  {{ scope.row.startDateStr }} <span style="opacity:0">- 2020.01.01</span>
                </div>
                <div v-if="scope.row.startDateStr==''&&scope.row.endDateStr==''" class="text-center">
                  --
                </div>

              </template>

            </el-table-column>
            <!-- <el-table-column prop="endDateStr" label="结束时间" /> -->
          </el-table>
        </vue-scroll>
        <div class="mt30 pagination">
          <el-pagination
            :current-page.sync="param.pageNo"
            :page-size="param.pageSize"
            background
            layout="total, prev, pager, next"
            :total="list.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waves from '@/directives/waves'
import { getList, updateDegree } from '@/api/project'
export default {
  directives: {
    waves
  },
  data() {
    return {
      index: 0,
      param: {
        pageNo: 1,
        pageSize: 20
      },
      path: 'unarchived',
      list: '',
      subIndex: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    openProject(id) {
      const routeUrl = this.$router.resolve({ path: '/detail', query: { id: id }})
      window.open(routeUrl.href, '_blank')
    },
    checkSubIndex(index) {
      this.subIndex = index
      // this.checkTab(this.index)
      // this.index = index
      if (this.index === 0) {
        this.path = 'unarchived'
      } else if (this.index === 1) {
        if (this.subIndex === 0) {
          this.path = 'executing'
        } else {
          this.path = 'executed'
        }
      } else if (this.index === 2) {
        if (this.subIndex === 0) {
          this.path = 'launched/executing'
        } else {
          this.path = 'launched/completed'
        }
      } else if (this.index === 3) {
        if (this.subIndex === 0) {
          this.path = 'approving'
        } else {
          this.path = 'approved'
        }
      }
      this.getList()
    },
    handleSizeChange(val) {
      this.param.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.param.pageNo = val
      this.getList()
    },
    selectDegree(id, degree) {
      const param = {
        urgencyDegree: degree
      }

      updateDegree(param, id).then(res => {
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success'
        })
        this.getList()
      })
      for (let i = 0; i < this.list.list.length; i++) {
        if (this.list.list[i].id === id) {
          this.list.list[i].showPopover = false
        }
      }
    },
    getList() {
      getList(this.param, this.path).then(res => {
        for (let i = 0; i < res.list.length; i++) {
          res.list[i].showPopover = false
        }
        this.list = res
      })
    },
    checkTab(index) {
      this.subIndex = 0
      this.index = index

      if (index === 0) {
        this.path = 'unarchived'
      } else if (index === 1) {
        this.path = 'executing'
      } else if (index === 2) {
        this.path = 'launched/executing'
      } else if (index === 3) {
        this.path = 'approving'
      }
      this.getList()
    }
  }
}
</script>

