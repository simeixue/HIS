<template>
  <el-container style="height: 100%">
    <el-aside width="auto" height="100vh"> <common-aside></common-aside> </el-aside>
    <el-container>
      <el-header> <common-header></common-header> </el-header>
      <el-main> <router-view /> </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>

</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";

export default {
  name: "Main",
  components:{CommonAside,CommonHeader}
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