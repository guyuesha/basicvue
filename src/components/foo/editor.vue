<template>
  <div id="editor-container">
    <input type="file" id="file" @change="showPreview('file', 'portrait')" />
    <img src="" id="portrait" style="width: 200px; height: 200px; display: block;" />

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
      addhtml() {
        this.editor.txt.append(
          `<br><p>
    <img class="imgPic" 
    src="https://img04.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg01.sogoucdn.com%2Fapp%2Fa%2F100520024%2F1d08a467e63bd1c16e428a5da1c11b4b&appid=122"></img>
    </p><br>`
        );
      },
      showPreview(fileId, imgId) {
        var file = document.getElementById(fileId);
        var ua = navigator.userAgent.toLowerCase();
        var url = '';
        if (/msie/.test(ua)) {
          url = file.value;
        } else {
          url = window.URL.createObjectURL(file.files[0]);
        }
        document.getElementById(imgId).src = url;
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

</style>
