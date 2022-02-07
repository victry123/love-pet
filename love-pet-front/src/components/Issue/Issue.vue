<template>
  <div style="width:90%;margin:50px auto">
    <el-form ref="form" :model="form">
     
      <el-form-item label="发布标题:">
        <el-col :span="6">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item class="works">
        <mavon-editor v-model="form.content" @change="handle"></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="submit">发布</el-button>
      </el-form-item>
    </el-form>
    <!-- <article v-html="myhtml"></article> -->
  </div>
</template>

<script>
// import { getAddRelease } from "@/request/api";
export default {
  name: "addRelease",
  data() {
    return {
      form: {
        title: "",
        people: "",
        content: ""
      },
      defaultData: "preview",
      
      timeValue: ""
    };
  },
  created() {},
  methods: {
    handle(value, render) {
      this.myhtml = render;
      console.log(value, render);
    },
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
