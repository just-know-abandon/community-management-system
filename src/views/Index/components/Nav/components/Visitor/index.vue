<template>
  <div class="visitor-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        访客通报
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="visitor-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="name"
          label="姓名"
          placeholder="访客姓名"
          :rules="[{ required: true, message: '请填写访客姓名' }]"
        />
        <van-field name="sex" label="性别">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio class="radio" name="1">男</van-radio>
              <van-radio class="radio" name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="stayTime" label="逗留时间">
          <template #input>
            <van-radio-group v-model="stayTime" direction="horizontal">
              <van-radio class="radio" name="1">不过夜</van-radio>
              <van-radio class="radio" name="2">过夜</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- <van-field
          v-model="number"
          name="number"
          label="人数"
          placeholder="访客人数"
          :rules="[{ required: true, message: '请填写访客人数' }]"
        /> -->
        <van-field
          v-model="phone"
          name="phone"
          label="电话"
          placeholder="访客电话"
          :rules="[{ required: true, message: '请填写访客电话' }]"
        />
        <van-field
          readonly
          clickable
          name="stayDate"
          :value="stayDate"
          label="日期"
          placeholder="请选择到访日期"
          @click="showCalendar = true"
          :rules="[{ required: true }]"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
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
  name: 'Visitor',
  data () {
    return {
      username: '',
      // number: '',
      sex: '1',
      stayTime: '1',
      phone: '',
      stayDate: '',
      showCalendar: false
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$axios.post('api/user/addUserVisitor', {
        name: values.name,
        sex: values.sex,
        phone: values.phone,
        stayTime: values.stayTime,
        date: values.stayDate,
        done: '0',
        userId: localStorage.getItem('id')
      })
        .then(res => {
          console.log(res)
          this.$toast.success('添加访客成功')
          this.username = ''
          this.sex = ''
          this.stayTime = ''
          this.phone = ''
          this.stayDate = ''
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('添加访客失败')
        })
    },
    onConfirm (date) {
      this.stayDate = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    }
  }
}
</script>

<style lang="less" scoped>
.visitor-main{
  width: 100%;
}
.radio{
  margin-bottom: 10px;
}
.van-popup--bottom{
  bottom: 50px !important;
}
</style>
