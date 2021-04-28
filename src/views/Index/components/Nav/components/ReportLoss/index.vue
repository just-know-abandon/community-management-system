<template>
  <div class="report-loss-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        失物报备
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="report-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="loss"
          name="loss"
          label="遗失物品"
          placeholder="填写遗失物品名称"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="lossDesc"
          rows="2"
          autosize
          name="lossDesc"
          label="物品描述"
          type="textarea"
          maxlength="50"
          placeholder="请描述遗失物品描述"
          show-word-limit
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="lossPlace"
          rows="2"
          autosize
          name="lossPlace"
          label="遗失地点"
          type="textarea"
          maxlength="50"
          placeholder="请回忆可能的遗失地点"
          show-word-limit
          :rules="[{ required: true }]"
        />
        <van-field
          readonly
          clickable
          name="lossTime"
          :value="lossTime"
          label="遗失时间"
          placeholder="点击选择大概遗失时间"
          @click="showLossTimePicker = true"
        />
        <van-popup v-model="showLossTimePicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="lossTimeonConfirm"
            @cancel="showLossTimePicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="lossDate"
          :value="lossDate"
          label="遗失日期"
          placeholder="请选择遗失日期"
          @click="showLossDatePicker = true"
          :rules="[{ required: true }]"
        />
        <van-calendar :min-date="minDate" :max-date="maxDate" v-model="showLossDatePicker" @confirm="lossDateonConfirm" />
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
  name: 'ReportLoss',
  data () {
    return {
      loss: '',
      lossDesc: '',
      lossPlace: '',
      lossTime: '',
      lossDate: '',
      showLossTimePicker: false,
      showLossDatePicker: false,
      showCalendar: false,
      minDate: new Date(2021, 0, 1),
      maxDate: new Date()
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$axios.post('api/user/addUserLost', {
        name: values.loss,
        desc: values.lossDesc,
        place: values.lossPlace,
        date: values.lossDate + '-' + values.lossTime,
        done: '0',
        userId: localStorage.getItem('id')
      })
        .then(res => {
          console.log(res)
          this.$toast.success('报失成功')
          this.loss = ''
          this.lossDesc = ''
          this.lossPlace = ''
          this.lossTime = ''
          this.lossDate = ''
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('报失失败')
        })
    },
    lossTimeonConfirm (time) {
      this.lossTime = time
      this.showLossTimePicker = false
    },
    lossDateonConfirm (date) {
      this.lossDate = `${date.getMonth() + 1}/${date.getDate()}`
      this.showLossDatePicker = false
    }
  }
}
</script>

<style lang="less" scoped>
.report-main{
  width: 100%;
}
.van-popup--bottom{
  bottom: 50px !important;
}
</style>
