<template>
  <header>
    <div class="l-content">
      <el-icon><icon-menu /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{current.path}}</el-breadcrumb-item>
      </el-breadcrumb>
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
import {mapState} from 'vuex'
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
  computed:{
    ...mapState({
      current:state => state.tab.currentMenu
    }),
  }
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