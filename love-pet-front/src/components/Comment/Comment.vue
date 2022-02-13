<template>
  <div class="contain" id="app">
    <CommentBox
      :userInfo="userInfo"
      :reply-info="replyInfo"
      @submit-box="submitBox"
      :showCancle="showCancle"
    ></CommentBox>

    <CommentList :comments="comments"></CommentList>
  </div>
</template>
<script>
import CommentList from "@/components/Comment/CommentList.vue";
import CommentBox from "@/components/Comment/CommentBox.vue";

// vuex中有mapState方法，相当于我们能够使用它的getset方法
import { mapMutations } from "vuex";

export default {
  name: "app",
  data() {
    return {
      showCancle: false,
      submitting: false,
      value: "",
      userInfo: {
        uid: "uid000001",
        userName: "张三",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      },
      replyInfo: {
        uid: "",
        blogUid: "uid000003",
        replyUserUid: "uid000004",
        replyUid: 0,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
      comments: [
        {
          uid: "uid000",
          userName: "陌溪",
          time:"2022-2-13",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: "我是一级评论",
          reply: [
            {
              uid: "uid001",
              userName: "陌溪",
              avatar:
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              content: "我是二级评论",
              reply: [
                {
                  uid: "uid002",
                  userName: "陌溪",
                  avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  content: "我是三级评论",
                  reply: [],
                },
              ],
            },
          ],
        },
        {
          uid: "uid004",
          userName: "陌溪",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: "我是一级评论",
          reply: [],
        },
      ],
    };
  },
  watch: {},
  computed: {},
  components: {
    CommentList,
    CommentBox,
  },
  mounted() {
    this.setCommentList(this.comments);
  },
  methods: {
    //拿到vuex中的写的两个方法
    ...mapMutations(["setCommentList", "increment"]),
    submitBox(e) {
      var comments = this.$store.state.app.commentList;
      e.uid = this.$store.state.app.id;
      comments.push(e);
      this.$store.commit("setCommentList", comments);
      this.$store.commit("increment");
    },
  },
};
</script>
<style>
.contain {
  width: 600px;
  margin: 0 auto;
}

p {
  color: #fff;
}
.ant-comment-content-author-name a{
   color: #fff;
}
.ant-comment .ant-comment-inner {
    display: flex;
    padding:  5px 0;
}

.ant-comment-content .ant-comment-actions > li > span {
  color: rgb(255 255 255 / 45%);
}
.contain{
    width: 900px;
    display: flex;
    flex-direction: column;
}

.ant-form-item-children textarea.ant-input {
    max-width: 100%;
    height: 40px;
    min-height: 32px;
    line-height: 1.5;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
}

.contain {
  margin: 0;
  margin-top: 10px;
}
</style>
