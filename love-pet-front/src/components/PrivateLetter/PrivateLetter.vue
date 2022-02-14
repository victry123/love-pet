<template>
  <div class="PrivatelLetter">
    <lemon-imui ref="IMUI" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{id:1,displayName:'June',avatar:''}
    }
  },
  mounted(){
    const { IMUI } = this.$refs;
    //初始化表情包。
    // IMUI.initEmoji(...);
    //从后端请求联系人数据，包装成下面的样子
    const contacts = [{
      id: 2,
      displayName: '丽安娜',
      avatar:'',
      index: 'L',
      unread: 0,
      //最近一条消息的内容，如果值为空，不会出现在“聊天”列表里面。
      //lastContentRender 函数会将 file 消息转换为 '[文件]', image 消息转换为 '[图片]'，对 text 会将文字里的表情标识替换为img标签,
      lastContent: IMUI.lastContentRender({type:'text',content:'你在干嘛呢？'})
      //最近一条消息的发送时间
      // lastSendTime: 1566047865417,
    }];
    IMUI.initContacts(contacts);
  },
  methods: {
    handlePullMessages(contact, next) {
    //从后端请求消息数据，包装成下面的样子
      const messages = [{
        id: '唯一消息ID',
        status: 'succeed',
        type: 'text',
        sendTime: 1566047865417,
        content: '你什么才能对接完？',
        toContactId: contact.id,
        fromUser:this.user
      }]
      //将第二个参数设为true，表示已到末尾，聊天窗口顶部会显示“暂无更多消息”，不然会一直转圈。
      next(messages,true);
    },
    
  },
};
</script>

<style>
.PrivatelLetter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>