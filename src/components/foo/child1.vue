<template>
  <div>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/foo' }">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
</el-breadcrumb>
     child1 
     i am 
     <span v-for="item in list" :key="item.name">
     list  {{item.name}} ---- {{item.age}} <br>
       </span>
      </div>    
</template>
<script>
import {getDetail, getList, getAll} from '../service.js'
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
   return getDetail(params).then((res) => {
      console.log('detail init get ',res);
      this.list = res.data.data;
    }).catch((res) => {
      console.log('detrail erro get ',res);
    });
    }
  },
  mounted() {
      let params = {
      query1: 1,
      query2: 2
      };
    Promise.all([getDetail(params),getList()]).then((res)=>{
      console.log('get res', res);
    }).catch((res)=>{
      console.log('get erro ', res)
    })
    // getAll().then((res, two)=>{
    //    console.log( 'init', res, two);
    //  }).catch((res)=>{
    //    console.log('get erro ', res)
    //  });
    // this.init()
    // this.init().then((res)=>{
    //   console.log( 'init',this.list);
    // });

    
  }
}
</script>
