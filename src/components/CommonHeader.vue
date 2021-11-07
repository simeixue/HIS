<template>
  <header>
    <el-icon><icon-menu /></el-icon>
    <div class="l-content">
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" class="user">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>

</template>

<script>
import {Document, Location, Menu as IconMenu, Setting} from "@element-plus/icons";

export default {
  name: "CommonHeader",

  data(){
    return{
      userImg:require("../assets/user-logo.jpg")
    }
  },
  components: {
    IconMenu,
  },
}
</script>

<style scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content{
  display: flex;
  align-items: center;
}
.user{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>