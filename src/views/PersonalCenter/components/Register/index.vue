<template>
  <div>
    <TitleTop>
        <span slot="lefti"></span>
        <span slot="mid">注册</span>
        <span slot="ze">
          <span class="titleRight" slot="ze"></span>
        </span>
      </TitleTop>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="realname"
        name="真名"
        label="真名"
        placeholder="真名"
        :rules="[{ required: true, message: '请填写真名' }]"
      />
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="phone"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import TitleTop from '../../../../components/TitleTop/index'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      realname: '',
      nickname: '',
      phone: ''
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit () {
      console.log('注册')
    }
  }
}
</script>

<style lang="less" scoped>
.titleRight {
  display: block;
  width: 60px; /*no*/
  text-align: center;
  height: 50px; /*no*/
}
.register {
  color: rgb(240, 160, 11);
  font-size: 14px; /*no*/
  line-height: 50px; /*no*/
}
</style>
