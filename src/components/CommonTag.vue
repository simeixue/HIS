<template>
  <div class="tabs">
    <el-tag
        v-for="tag in tags"
        :key="tag.name" size="small"
        :closable="tag.name!='home'"
        :effect="$router.name==tag.name?'dark':'plain'"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "CommonTag",
  computed:{
    ...mapState({
      tags:(state)=>state.tab.tabsList,
    }),
  }
}
</script>

<style scoped>
.tabs{
  padding: 20px;
}
.tabs el-tag{
  margin-right: 15px;
  cursor: pointer;
}
</style>