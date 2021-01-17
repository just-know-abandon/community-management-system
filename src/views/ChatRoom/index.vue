<template>
  <div class="chatRoom-container">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>聊天室内请文明用语，切勿发送涉及违规行为信息</van-swipe-item>
        <van-swipe-item>富强、民主、文明、和谐、自由、平等</van-swipe-item>
        <van-swipe-item>公正、法治、爱国、敬业、诚信、友善</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <div class="main">
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from './components/Chat/index'
export default {
  name: 'ChatRoom',
  components: {
    Chat
  }
}
</script>

<style>
.van-notice-bar{
  height: 40px; /*no*/
  line-height: 40px; /*no*/
}
.van-swipe-item{
  font-size: 14px; /*no*/
}
.van-notice-bar__left-icon{
  font-size: 16px; /*no*/
  min-width: 24px; /*no*/
}
.notice-swipe {
  height: 40px; /*no*/
  line-height: 40px; /*no*/
}
.main{
  height: calc(100vh - 90px); /*no*/
}
</style>
