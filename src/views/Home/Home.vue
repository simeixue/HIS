<template>
  <el-row class="home" :getter="20">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<spa>2021-7-19</spa></p>
          <p>上次登录地点：<spa>黑龙江省-哈尔滨</spa></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="please select your gender">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      userImg:require("../../assets/user-logo.jpg"),
      form: {
        name: '',
        age:'',
        gender: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },

}
</script>

<style scoped>
.user{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.user img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
}
.name{
  font-size: 32px;
  margin-bottom: 10px;
 }
.access{
  color: #999999;
}
.login-info p{
  line-height: 28px;
  font-size: 14px;
  color: #999999;
}
.login-info span{
  color: #666666;
  margin-right: 60px;
}

</style>