<template>
  <div class="complaint-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        投诉建议
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="suggestions-main">
      <van-form @submit="onSubmit">
        <van-field
          readonly
          clickable
          name="complaintDirection"
          :value="complaintDirection"
          label="投诉方向"
          placeholder="点击选择投诉方向"
          @click="showPicker = true"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          v-model="complaintDesc"
          rows="2"
          autosize
          name="complaintDesc"
          label="投诉描述"
          type="textarea"
          maxlength="50"
          placeholder="请描述投诉内容"
          show-word-limit
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
  name: 'ComplaintsSuggestions',
  data () {
    return {
      complaintDirection: '',
      columns: ['管理', '服务', '安保', '环境', '卫生'],
      showPicker: false,
      complaintDesc: ''
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onConfirm (value) {
      this.complaintDirection = value
      this.showPicker = false
    }
  }
}
</script>

<style lang="less" scoped>
.complaint-main{
  width: 100%;
}
.van-popup--bottom{
  bottom: 50px !important;
}
</style>
