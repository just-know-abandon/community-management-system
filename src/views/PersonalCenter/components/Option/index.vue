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
      <div class="out-btn" v-if="token" @click="out">
        <div class="login">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option',
  data () {
    return {
      token: localStorage.getItem('token'),
      OptionsList: [
        {
          to: '/personalCenter/changePersonal',
          i: 'iconfont icon-gerenxinxi',
          title: '账号信息'
        },
        // {
        //   to: '/personalCenter/addressRegister',
        //   i: 'iconfont icon-shouye',
        //   title: '住址信息'
        // },
        {
          to: '/personalCenter/activityManagement',
          i: 'iconfont icon-guanli',
          title: '组织活动管理'
        },
        {
          to: '/personalCenter/marketManagement',
          i: 'iconfont icon-guanli',
          title: '二手市场管理'
        },
        {
          to: '/personalCenter/shareManagement',
          i: 'iconfont icon-guanli',
          title: '分享墙管理'
        }
        // {
        //   to: '/personalCenter/changePassword',
        //   i: 'iconfont icon-shouye',
        //   title: '修改密码'
        // }
      ]
    }
  },
  methods: {
    out () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('account')
      localStorage.removeItem('picture')
      localStorage.removeItem('nickname')
      localStorage.removeItem('realname')
      localStorage.removeItem('phone')
      localStorage.removeItem('done')
      this.$toast.success('退出登录')
      this.$router.push({
        name: 'Index'
      })
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
  .login {
    color: #eee;
  }
}
</style>
