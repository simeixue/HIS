<template>
  <div id="id">
    <h1>医生排班管理</h1>
    <div class="classroom">
      <div class="pb">
        查询排班情况：
        <el-select filterable placeholder="请选择">
          <el-option
            v-for="(l, index) in 7"
            :key="index"
            :label="`星期${l + 1}`"
            :value="l"
          >
            星期{{ l }}
          </el-option>
        </el-select>
        <el-button class="button" @click="query()">查询</el-button>
      </div>
      <div class="pb">
        选择工作星期：
        <el-select filterable placeholder="请选择">
          <el-option
            v-for="(l, index) in 7"
            :key="index"
            :label="`星期${l + 1}`"
            :value="l"
          >
            星期{{ l }}
          </el-option>
        </el-select>
      </div>
      <div class="pb">
        选择工作时间：
        <el-select filterable placeholder="请选择">
          <el-option
            v-for="(l, index) in 3"
            :key="index"
            :label="`第${l + 1}班`"
            :value="l"
          >
            第{{ l }}班
          </el-option>
        </el-select>
        <el-button class="button" @click="query()">确认</el-button>
      </div>
    </div>

    <div>
      <div class="classroom">医生排班表：</div>
    </div>
    <div class="table">
      <table border="10px solid black" width="800px" height="200px">
        <tr>
          <th width="10%"></th>
          <th width="13%">星期一</th>
          <th width="13%">星期二</th>
          <th width="13%">星期三</th>
          <th width="13%">星期四</th>
          <th width="13%">星期五</th>
          <th width="13%">星期六</th>
          <th width="13%">星期天</th>
        </tr>
        <tr>
          <th>8:00-16:00</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>16:00-24:00</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>24:00-8:00</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
#id {
  margin: 20px 30px;
  display: block;
}
.classroom {
  margin: 10px 0;
}
.button {
  margin: 0 10px;
}
.table {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.pb {
  padding: 6px 0;
}
</style>
