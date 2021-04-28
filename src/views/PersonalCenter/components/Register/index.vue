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
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="realname"
        name="realname"
        label="真名"
        placeholder="真名"
        :rules="[{ required: true, message: '请填写真名' }]"
      />
      <van-field
        v-model="nickname"
        name="nickname"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="phone"
        type="tel"
        name="phone"
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
    onSubmit (values) {
      console.log(values)
      console.log('注册')
      this.$axios.post('api/user/addUserAccount', {
        account: values.username,
        password: values.password,
        realName: values.realname,
        nickName: values.nickname,
        phone: values.phone,
        pic: '0',
        done: '0'
      })
        .then(res => {
          console.log(res)
          this.$toast.success('注册成功')
          this.username = ''
          this.password = ''
          this.realName = ''
          this.nickname = ''
          this.phone = ''
          this.$router.push({
            name: 'PersonalCenter'
          })
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('注册失败')
        })
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
