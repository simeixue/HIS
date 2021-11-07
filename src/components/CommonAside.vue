<template>
<!--  <h1>HIS</h1>-->
  <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#172544"
      text-color="white"
  >
    <el-sub-menu
        :index="item.label"
        v-for="item in hasChildren"
        :key="item.path"
    >
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
            :index="subItem.path"
            v-for="(subItem,subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(item)"
        >
          {{subItem.label}}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
    >
      <el-icon><icon-menu /></el-icon>
      <template #title>{{item.label}}</template>
    </el-menu-item>

  </el-menu>


</template>

<script>
// export default {
//   name: "CommonAside"
// }
import { defineComponent, ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'

export default defineComponent({
  components: {
    Location,
    IconMenu,
  },
  setup() {
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      menu:[
        {
          path:"/cost",
          name:"cost",
          label:"挂号收费站",
          icon:"s-home",
          url:"Cost/Cost",
        },
        {
          path:"/clinic",
          name:"clinic",
          label:"门诊医生工作站",
          icon:"s-home",
          url:"Clinic/Clinic",
        },
        {
          path:"/pharmacy",
          name:"pharmacy",
          label:"药房",
          icon:"s-home",
          url:"Pharmacy/Pharmacy",
        },
        {
          path:"/finance",
          name:"finance",
          label:"综合财务部",
          icon:"s-home",
          url:"finance/finance",
        },
        {
          label:"系统信息管理",
          icon:"",
          children:[
            {
              path:"/page1",
              name:"page1",
              label:"用户管理",
              icon:"s-home",
              url:"manage/Users",
            },
            {
              path:"/page2",
              name:"page2",
              label:"科室管理",
              icon:"s-home",
              url:"manage/PageTwo",
            },
            {
              path:"/page3",
              name:"page3",
              label:"挂号级别管理",
              icon:"s-home",
              url:"manage/PageThree",
            },
            {
              path:"/page4",
              name:"page4",
              label:"结算类别管理",
              icon:"s-home",
              url:"manage/PageOne",
            },
            {
              path:"/page5",
              name:"page5",
              label:"收费项目管理",
              icon:"s-home",
              url:"manage/PageOne",
            },
            {
              path:"/page6",
              name:"page6",
              label:"医生排班管理",
              icon:"s-home",
              url:"manage/PageOne",
            },
          ]
        }
      ],
    }
  },
  computed:{
    noChildren(){
      return this.menu.filter((item)=>!item.children)
    },
    hasChildren(){
      return this.menu.filter((item)=>item.children)
    }
  },
  methods:{
    clickMenu(item){
      this.$router.push({name:item.name});
    },
  }
})
</script>

<style scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>