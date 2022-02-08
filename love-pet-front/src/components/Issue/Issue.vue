<template>
  <div style="width:90%;margin:50px auto">
    <el-form ref="form" :model="form">
     
      <el-form-item label="发布标题:">
        <el-col :span="6">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item class="works">
        <!-- <mavon-editor v-model="form.content" @change="handle"></mavon-editor> -->
          <mavon-editor
        v-model="form.content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        
      />

      </el-form-item>

       <UploadVideo></UploadVideo>
      <el-form-item>
        <el-button type="primary" size="small" @click="submit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UploadVideo from "@/components/UploadVideo/UploadVideo.vue"

import axios from "axios";
export default {
  name: "addRelease",
  data() {
    return {
      form: {
        title: "",
        people: "",
        content: ""
      },
    };
  },
  components: {
    UploadVideo,
  },
  created() {},
  methods: {
       $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file);
      //将下面上传接口替换为你自己的服务器接口
      axios({
        url: "/common/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(url => {
        this.$refs.md.$img2Url(pos, url);
      });
    },

    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      console.log(this.content);
      console.log(this.html);
      this.$message.success("提交成功！");
    }
  }
};
</script>

<style >
.editor-btn {
    margin-top: 20px;
  }
.works p{
  color: #000;
}
</style>
