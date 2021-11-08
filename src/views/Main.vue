<template>
  <el-container style="height: 100%">
    <el-aside width="auto" height="100vh"> <common-aside></common-aside> </el-aside>
    <el-container>
      <el-header> <common-header></common-header> </el-header>
      <common-tag></common-tag>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>

</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonTag from "@/components/CommonTag";

export default {
  name: "Main",
  components:{CommonAside,CommonHeader,CommonTag}
}
</script>

<style scoped>
.el-header{
  background-color: #172544;
  color: white;
}
.el-main{
  padding-top: 0;
}
</style>