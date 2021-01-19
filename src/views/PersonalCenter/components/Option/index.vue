<template>
  <div class="option-container">
    <div class="option-main">
      <div class="options" v-for="(item, index) in OptionsList" :key="index">
        <router-link :to="item.to" class="options-link">
          <i :class="item.i"></i>
          <span>{{item.title}}</span>
        </router-link>
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
  name: 'Option',
  data () {
    return {
      OptionsList: [
        {
          to: '/personalCenter/changePersonal',
          i: 'iconfont icon-shouye',
          title: '个人信息'
        },
        {
          to: '/personalCenter/addressRegister',
          i: 'iconfont icon-shouye',
          title: '住址信息'
        },
        {
          to: '/personalCenter/activityManagement',
          i: 'iconfont icon-shouye',
          title: '组织活动管理'
        },
        {
          to: '/personalCenter/marketManagement',
          i: 'iconfont icon-shouye',
          title: '二手市场管理'
        },
        {
          to: '/personalCenter/shareManagement',
          i: 'iconfont icon-shouye',
          title: '分享墙管理'
        },
        {
          to: '/personalCenter/changePassword',
          i: 'iconfont icon-shouye',
          title: '修改密码'
        }
      ]
    }
  }
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
  padding: 10px 20px 10px;
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
  // color: rgb(150, 150, 150);
}
.options-link{
  color: rgb(150, 150, 150);
  display: block;
  width: 100%;
  height: 100%;
}
.options-link > i {
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
