<template>
  <div class="option-container">
    <div class="option-main">
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>修改个人资料</span>
      </div>
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>登记常住人员</span>
      </div>
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>二手市场发布</span>
      </div>
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>二手市场管理</span>
      </div>
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>分享墙管理</span>
        </div>
      <div class="options">
        <i class="iconfont icon-shouye"></i>
        <span>修改密码</span>
        </div>
    </div>
    <div class="out">
      <div class="out-btn">
        退出
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option'
}
</script>

<style lang="less" scoped>
.option-container{
  width: 100%;
  // background-color: pink;
  // height: 1000px;
}
.option-main{
  // margin-top: 10px;
  // background-color: #eee;
  padding: 0 20px 10px;
  // box-shadow: 0 0 4px 0 rgba(150, 150, 150, 0.404); /*no*/
  border-top: 1px solid #eee;
  // border-bottom: 1px solid #eee;
}
.options{
  border: 2px solid #eee;
  // border-left: 2px solid #eee;
  // border-right: 2px solid #eee;
  font-size: 16px;
  margin-top: 10px;
  padding: 6px 10px;
  box-shadow: 0 0 4px 0 rgba(150, 150, 150, 0.404); /*no*/
  color: rgb(150, 150, 150);
}
.options > i {
  font-size: 20px;
  padding-right: 8px;
  color: rgb(240, 160, 11);
}
.out{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.out-btn{
  border: 2px solid rgb(240, 160, 11);
  background-color: rgb(240, 160, 11);
  color: #fff;
  border-radius: 20px;
  width: 60%;
  height: 30px;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
}
</style>
