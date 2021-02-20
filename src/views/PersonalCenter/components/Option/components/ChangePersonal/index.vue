<template>
  <div class="change-personal-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        账号信息
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="change-personal-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userName"
          name="userName"
          label="用户姓名"
          placeholder="请填写用户姓名"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="nickName"
          name="nickName"
          label="用户昵称"
          placeholder="请填写用户昵称"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="accountNumber"
          name="accountNumber"
          label="账号"
          placeholder="请填写登录账号"
          :rules="[{ required: true }]"
        />
        <!-- <van-field name="sex" label="性别">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio class="radio" name="1">男</van-radio>
              <van-radio class="radio" name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field> -->
        <van-field
          v-model="phoneNumber"
          name="phoneNumber"
          label="电话"
          type="digit"
          placeholder="请填写联系电话"
          :rules="[{ required: true, }]"
        />
        <van-field name="uploader" label="头像上传">
          <template #input>
            <van-uploader :max-count="1" v-model="uploader" />
          </template>
        </van-field>
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
  name: 'change-personal',
  data () {
    return {
      userName: localStorage.getItem('realname') || '',
      nickName: localStorage.getItem('nickname') || '',
      accountNumber: localStorage.getItem('account') || '',
      // sex: '1',
      phoneNumber: localStorage.getItem('phone') || '',
      uploader: []
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.change-personal-main{
  width: 100%;
}
.radio{
  margin-bottom: 10px;
}
.van-popup--bottom{
  bottom: 50px !important;
}
</style>
