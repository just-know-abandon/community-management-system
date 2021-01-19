<template>
  <div class="chat-container">
    <!-- <ShareTitle>
      <span slot="left"></span>
      <span slot="mid">
        聊天室
      </span>
      <span slot="ze">
      </span>
    </ShareTitle> -->
    <!-- <i class="iconfont icon-shouye chat-top-i"></i> -->
    <div class="chat-top">
      <span class="chat-top-title">
        聊天室
        <span class="chat-top-online">(在线:10)</span>
      </span>
    </div>
    <div class="chat-main">
      内容
    </div>
    <div class="chat-bottom">
      <van-field
        class="chat-bottom-field"
        v-model="message"
        rows="1"
        type="textarea"
        placeholder="请输入留言"
      />
      <div class="chat-bottom-btn">
        <van-button type="primary">发送</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// import ShareTitle from '../../../Share/components/ShareTitle/index'
export default {
  name: 'Chat',
  data () {
    return {
      message: ''
    }
  }
  // components: {
  //   ShareTitle
  // }
}
</script>

<style lang="less" scoped>
.chat-container{
  width: 100%;
  // background-color: pink;
  height: 100%;
}
.chat-top{
  height: 50px; /*no*/
  width: 100%;
  // background-color: rgb(20, 184, 135);
  // line-height: 50px;
  // text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(150, 150, 150, 0.404); /*no*/
}
// .chat-top-i{
//   font-size: 24px;
// }
.chat-top-title{
  font-size: 18px; /*no*/
  color: rgb(240, 160, 11);
}
.chat-top-online{
  position: absolute;
  bottom: 4px; /*no*/
  right: 8px; /*no*/
  font-size: 14px; /*no*/
  color: black;
}
.chat-main{
  width: 100%;
  height: calc(100vh - 226px); /*no*/
  // background-color: skyblue;
}
.chat-bottom{
  height: 86px; /*no*/
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
  // background-color: rgb(106, 144, 156);
  display: flex;
}
.chat-bottom-field {
  padding: 10px 16px; /*no*/
}
.van-field__control{
  display: block;
  height: 24px !important; /*no*/
  padding: 0 !important;
  margin: 0 !important;
}
.chat-bottom-field /deep/ .van-field__value {
  background-color: #fff !important;
  border: 1px solid #eee; /*no*/
  overflow: hidden;
  padding: 2px; /*no*/
  font-size: 14px; /*no*/
  touch-action: none;
}
.chat-bottom-btn{
  width: 140px; /*no*/
  // border-left: 1px solid #eee; /*no*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-button{
  width: 80px; /*no*/
  height: 44px; /*no*/
  border-radius: 16px; /*no*/
  font-size: 16px; /*no*/
}
</style>
