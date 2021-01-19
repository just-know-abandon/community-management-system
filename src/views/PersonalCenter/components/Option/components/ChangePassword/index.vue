<template>
  <div class="change-password-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        修改密码
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="change-password-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="accountNumber"
          name="accountNumber"
          label="账号"
          placeholder="请填写登录账号"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="oldPassword"
          name="oldPassword"
          label="旧密码"
          placeholder="请填写用户旧密码"
          type="password"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="newPassword"
          name="newPassword"
          label="新密码"
          placeholder="请填写联系电话"
          type="password"
          :rules="[{ required: true }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import TitleTop from '../../../../../../components/TitleTop/index'
export default {
  name: 'change-password',
  data () {
    return {
      accountNumber: '',
      oldPassword: '',
      newPassword: ''
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      if (this.oldPassword === this.newPassword) {
        this.$toast.fail('新旧密码一致')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.change-password-main{
  width: 100%;
}
.radio{
  margin-bottom: 10px;
}
.van-popup--bottom{
  bottom: 50px !important;
}
</style>
