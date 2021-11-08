<template>
  <div>
    <el-table style="width: 100%; margin-top: 20px">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="结果1" width="100px"></el-table-column>
      <el-table-column label="结果2" width="100px"></el-table-column>
      <el-table-column label="时间" width="160px"></el-table-column>
      <el-table-column label="其他" width="300px">
        <template v-slot="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)"
            >操作</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button @click="dialogVisible = false">取消</el-button>
    </div>
  </div>
  <!--分页-->
  <div class="pagination-bar" style="padding: 10px; padding-bottom: 50px">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next"
      :total="res_test.total"
      :page-size="page_size"
    >
    </el-pagination>
  </div>
</template>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
