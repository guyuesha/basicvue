<template>
  <div>
          <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>foo</el-breadcrumb-item>
</el-breadcrumb>
{{name}}---{{age}}
  </div>
</template>
<script>
import {getList} from '../service.js';
export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    init() {
      let params = {
        postvalue1: '123',
        value2:'34'
      };
      getList(params).then((res) => {
          console.log('list init get ',res);
          this.name=res.data.data[0].name
          this.age=res.data.data[0].age
      }).catch((res) => {
        console.log('list init error ', res);
      });
    }
  },
  mounted() {
    this.init();
  }
}
</script>

