<template>
  <div class="personal-container">
    <TitleTop>
      <span class="titleLeft" slot="left"></span>
      <span slot="mid">
        个人中心
      </span>
      <span class="titleRight" slot="ze" v-if="!token">
        <router-link class="login" to="/personalCenter/login">登录</router-link>
      </span>
      <span class="titleRight" slot="ze" v-if="token" @click="out">
        <router-link v-if="token" class="login" to="/index">退出</router-link>
      </span>
    </TitleTop>
    <div class="personal-top"></div>
    <Infos />
    <Option />
  </div>
</template>

<script>
import TitleTop from '../../components/TitleTop/index'
import Infos from './components/Infos/index'
import Option from './components/Option/index'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  components: {
    TitleTop,
    Infos,
    Option
  },
  methods: {
    out () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('account')
      localStorage.removeItem('nickname')
      localStorage.removeItem('realname')
      localStorage.removeItem('phone')
      localStorage.removeItem('done')
      this.$toast.success('退出登录')
    }
  }
}
</script>

<style lang="less" scoped>
.personal-top{
  width: 100%;
  height: 200px;
  background-color: pink;
  background: url('../../assets/images/5.jpg') no-repeat;
  background-size:100% 200px;
  opacity: 0.7;
  filter: blur(2px);
  // background-repeat: no-repeat;
}
.titleRight {
  display: block;
  width: 60px; /*no*/
  text-align: center;
  height: 50px; /*no*/
}
.login {
  color: rgb(240, 160, 11);
  font-size: 14px; /*no*/
  line-height: 50px; /*no*/
}
</style>
