
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 25px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 60px;
     @media(min-width:1800px) {
        &{
          height: 75px;
          line-height: 75px;
        }
      }
  }
  .tableWrap {
    width: 100%;
    height: calc(100% - 75px);
    overflow: auto;
    padding: 15px 0 25px 0;
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
    padding: 0 16px;
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
    padding: 0 16px;
    line-height: 28px;
  }
}
.degree-wrapper3 {
  width: 47px;
  height: 24px;
  background: rgba(244, 91, 91, 1);
  border-radius: 4px;
  font-size: 14px;
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
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 24px;
}
.status-wrapper {
  width: 64px;
  height: 24px;
  border-radius: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
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
  border: 1px solid #53B4B3;
  color: #53B4B3;
}
.status-wrapper1 {
  border: 1px solid rgba(255, 148, 47, 1);
  color: rgba(255, 148, 47, 1);
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
  }
  .noSelect {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .XHX2 {
    width: 30px;
    height: 2px;
    background: #53B4B3;
    border-radius: 1px;
    margin-top: 9px;
    margin-left: 9px;
  }
}
</style>
<template>
  <div>
    <div class="container">
      <div class="header flex">已归档项目·{{ list.total }}</div>

      <div class="tableWrap">
        <vue-scroll>
          <el-table :data="list.list" stripe style="width: 100%">
            <el-table-column prop="name" label="项目名称" min-width="88">
              <template slot-scope="scope">
                <div @click="openProject(scope.row.id)">{{ scope.row.name }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="projTypeName" label="项目类型" />
            <el-table-column prop="urgencyDegree" label="优先级">
              <template slot-scope="scope">
                <div v-if="scope.row.urgencyDegree===3" class="degree-wrapper3 pointer">High</div>
                <div v-if="scope.row.urgencyDegree===2" class="degree-wrapper2 pointer">Middle</div>
                <div v-if="scope.row.urgencyDegree===1" class="degree-wrapper1 pointer">Low</div>
              </template>
            </el-table-column>

            <!-- <el-table-column prop="initiatorName" label="发起人" /> -->
            <el-table-column prop="archiveTimeStr" label="归档时间" />
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
import { getArchivedList } from '@/api/project'
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
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: id
      //   }
      // })
      const routeUrl = this.$router.resolve({ path: '/detail', query: { id: id }})
      window.open(routeUrl.href, '_blank')
    },
    handleSizeChange(val) {
      this.param.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.param.pageNo = val
      this.getList()
    },
    getList() {
      getArchivedList(this.param).then(res => {
        for (let i = 0; i < res.list.length; i++) {
          res.list[i].showPopover = false
        }
        this.list = res
      })
    }
  }
}
</script>

