<template>
  <div class="share-title">
    <div class="share-title-left"></div>
    <div class="share-title-mid">
      {{title}}
    </div>
    <div class="share-title-right">
      <div class="share-title-right-btn">
        {{btn}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareTitle',
  data () {
    return {
      title: '分享墙',
      btn: '+'
    }
  }
}
</script>

<style lang="less" scoped>
.share-title{
  height: 50px;
  width: 100%;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
  font-size: 20px;
}
.share-title-left{
  width: 60px;
  height: 100%;
  // background-color: blue;
}
.share-title-right{
  width: 60px;
  height: 100%;
  // background-color: pink;
  position: relative;
}
.share-title-mid{
  height: 50px;
  line-height: 50px;
  color: rgb(240, 160, 11);
}
.share-title-right-btn{
  border: 1px solid rgb(240, 160, 11);
  width: 16px;
  height: 16px;
  border-radius: 12px;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
  color: rgb(240, 160, 11);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
}
</style>
