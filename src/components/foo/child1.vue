<template>
  <div>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/foo' }">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
</el-breadcrumb>
     child1 
     i am 
     <span v-for="item in list">
     list  {{item.name}} ---- {{item.age}} <br>
       </span>
      </div>    
</template>
<script>
import {getDetail} from '../service.js'
export default {
  data() {
     return {
       list: []
     }
  },
  methods: {
    init() {
      let params = {
      query1: 1,
      query2: 2
      };
    getDetail(params).then((res) => {
      console.log('detail init get ',res);
      this.list = res.data.data;
    }).catch((res) => {
      console.log('detrail erro get ',res);
    });
    }
  },
  mounted() {
    this.init()
  }
}
</script>
