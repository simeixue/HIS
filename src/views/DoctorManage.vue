<template>
  <div class="container">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      style="width: 100%">
      <el-table-column label="姓名" prop="date" />
      <el-table-column label="性别" prop="name" />
      <el-table-column label="年龄" prop="name" />
      <el-table-column label="职称" prop="name" />
      <el-table-column label="工作时间" prop="name" />
      <el-table-column label="所属科室" prop="name" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            class="button"
            >简介</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            class="button"
            >排班</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "John",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
    };
  },
};
</script>
<style scoped>
.container {
  padding: 30px 60px;
}
.button {
  margin: 3px;
}
</style>
