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
        <van-field
          v-model="password"
          name="password"
          label="修改新密码"
          placeholder="请填写账号新密码"
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
            <van-uploader :max-count="1" v-model="picUploader" :after-read="afterUploadImg"/>
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
      id: localStorage.getItem('id') || '',
      userName: localStorage.getItem('realname') || '',
      nickName: localStorage.getItem('nickname') || '',
      accountNumber: localStorage.getItem('account') || '',
      // sex: '1',
      phoneNumber: localStorage.getItem('phone') || '',
      password: '',
      done: localStorage.getItem('done') || '0',
      picUploader: [],
      picUploaderImg: ''
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      console.log('上传头像')
      console.log(this.userName)
      console.log(this.nickName)
      console.log(this.accountNumber)
      console.log(this.phoneNumber)
      this.$axios.post('api/user/updateUserAccount', {
        id: this.id,
        account: this.accountNumber,
        password: this.password,
        realName: this.userName,
        nickName: this.nickName,
        phone: this.phoneNumber,
        pic: this.picUploaderImg || localStorage.getItem('picture'),
        done: this.done
      })
        .then(res => {
          console.log(res)
          localStorage.setItem('id', this.id)
          localStorage.setItem('account', this.accountNumber)
          localStorage.setItem('picture', this.picUploaderImg || localStorage.getItem('picture'))
          localStorage.setItem('nickname', this.nickName)
          localStorage.setItem('realname', this.userName)
          localStorage.setItem('phone', this.phoneNumber)
          this.password = ''
          this.$toast.success('修改信息成功')
          this.$router.push({
            name: 'PersonalCenter'
          })
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('修改信息失败')
        })
      // this.userName = ''
      // this.nickName = ''
      // this.accountNumber = ''
      // this.phoneNumber = ''
      // this.activityDateValue = ''
    },
    afterUploadImg (file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.file)
      const formData = new FormData()
      console.log(formData)
      formData.set('file', file.file)
      formData.set('name', file.file.name)
      formData.set('timestamp', Date.now())
      console.log(formData)
      // for (var key of formData.entries()) {
      //   console.log(key[0] + ', ' + key[1])
      // }
      this.$axios.post('upload', formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res.data)
          console.log(res.data.filename)
          this.picUploaderImg = res.data.filename
        }).catch(err => {
          console.log(err)
        })
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
