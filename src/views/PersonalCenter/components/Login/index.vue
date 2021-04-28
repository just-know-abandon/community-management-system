<template>
  <div>
    <TitleTop>
        <span slot="lefti"></span>
        <span slot="mid">登录</span>
        <span slot="ze">
          <span class="titleRight" slot="ze">
            <router-link class="register" to="/personalCenter/register">注册</router-link>
          </span>
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
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
      password: ''
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit () {
      console.log('登录')
      this.$axios.post('api/user/login', {
        account: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res.data)
          console.log(res.data.data[0])
          console.log(res.data.data[0].id)
          console.log(res.data.data[0].acc_user)
          console.log(res.data.data[0].acc_nickname)
          console.log(res.data.data[0].acc_realname)
          console.log(res.data.data[0].acc_phone)
          console.log(res.data.data[0].acc_done)
          const id = res.data.data[0].id
          const account = res.data.data[0].acc_user
          const picture = res.data.data[0].acc_pic
          const nickname = res.data.data[0].acc_nickname
          const realname = res.data.data[0].acc_realname
          const phone = res.data.data[0].acc_phone
          const done = res.data.data[0].acc_done
          if (res.data.errno === 0) {
            this.$toast.success('登录成功')
            const token = { account: res.data.data[0].acc_user }
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            localStorage.setItem('account', account)
            localStorage.setItem('picture', picture)
            localStorage.setItem('nickname', nickname)
            localStorage.setItem('realname', realname)
            localStorage.setItem('phone', phone)
            localStorage.setItem('done', done)
            this.$router.push({
              name: 'Home'
            })
          } else {
            this.$toast.fail('登录失败')
          }
        })
        .catch(() => {
          this.$toast.fail('登录失败')
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
