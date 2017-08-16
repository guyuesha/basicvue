<template>
  <div id="editor-container">
    <label for="file" class="filelabel">
    <input type="file" id="file" @change="showPreview('file', 'portrait')" />
    </label>
    <div class="filePreview">
      <!--可查看Input accept 的属性 -->
      <img src="" id="portrait" style="width: 200px; height: 200px; display: block;" accept="image/*"/>
      <span class="tag">主图<button @click="deletePic('file')">删除</button></span>
    </div>
    <button @click="showInput('file')">查看</button>
    <div class="editview" id="div1">
    </div>
    <!-- <iframe> <div id="div1">
      </div></iframe> -->
    <el-button type="primary" @click="uploadhtml">查询
    </el-button>
    <el-button type="text" @click="addhtml">添加内容
    </el-button>
    <div id="div2">
    </div>
    <!-- <iframe src="https://www.baidu.com/"></iframe> -->
  </div>
</template>
<script>
  import E from 'wangeditor';
  import {
    temp,
    getHtml
  } from './html.js';
  export default {
    data() {
      return {
        editor: ''
      }
    },
    methods: {
      uploadhtml() {
        let getFn = getHtml(this.editor.txt.html());
        console.log('fn ', getFn, getFn())
        var blob = new Blob([getFn()], {
          type: "text/plain;charset=utf-8"
        });
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "a.html";
        a.textContent = "Download";
        document.body.appendChild(a);
      },
      deletePic(fileid) {
        document.getElementById(fileid).value = ""
      },
      showInput(fileid) {
        console.log(document.getElementById(fileid).value);
      },
      addhtml() {
        this.editor.txt.append(
          `<br><p>
    <img class="imgPic" 
    src="https://img04.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520024%2F1d08a467e63bd1c16e428a5da1c11b4b&appid=122"></img>
    </p><br>`
        );
      },
      createObjectURL(blob){
        if(window.URL){
          return window.URL.createObjectURL(blob);
        } else if(window.webkitURL){
          return window.webkitURL.createObjectURL(blob);
        } else {
          return null
        }
      },
      showPreview(fileId, imgId) {
        var file = document.getElementById(fileId);
        var ua = navigator.userAgent.toLowerCase();
        var url = '';
         url = this.createObjectURL(file.files[0]);//files[0].type
        // if (/msie/.test(ua)) {
        //   url = file.value;
        // } else {
        //   url = window.URL.createObjectURL(file.files[0]);
        // }
        document.getElementById(imgId).src = url;
      },
      revokeObjectURL(url){
         if(window.URL){
          return window.URL.revokeObjectURL(blob);
        } else if(window.webkitURL){
          return window.webkitURL.revokeObjectURL(blob);
        } 
      }
    },
    mounted() {
      this.editor = new E('#div1');
      this.editor.create();
    }
  }

</script>

<style>
  #div1 {
    font-size: 12px;
  }

  .filelabel {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
  }

  #file {
    display: none;
  }

  .filePreview {
    display: inline-block;
    width: 200px;
    height: 200px;
    position: relative;
  }

  .tag {
    position: absolute;
    bottom: 0;
    z-index: 10;
  }

</style>
