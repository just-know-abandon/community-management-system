<template>
  <div class="report-repair-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        损坏报修
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="report-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="repair"
          name="repair"
          label="损坏物品"
          placeholder="填写损坏物品名称"
          :rules="[{ required: true }]"
        />
        <van-field
          readonly
          clickable
          name="extent"
          :value="extent"
          label="损坏程度"
          placeholder="点击选择损坏程度"
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
          v-model="repairDesc"
          rows="2"
          autosize
          name="place"
          label="损坏地点"
          type="textarea"
          maxlength="50"
          placeholder="请描述损坏地点"
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
  name: 'ReportRepair',
  data () {
    return {
      repair: '',
      extent: '',
      repairDesc: '',
      columns: ['轻微', '中等', '严重', '紧急'],
      showPicker: false
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      this.$axios.post('api/user/addUserRepair', {
        name: values.repair,
        extent: values.extent,
        place: values.place,
        done: '0',
        userId: localStorage.getItem('id')
      })
        .then(res => {
          console.log(res)
          this.$toast.success('报修成功')
          this.repair = ''
          this.extent = ''
          this.repairDesc = ''
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('报修失败')
        })
    },
    onConfirm (value) {
      this.extent = value
      this.showPicker = false
    },
    onConfirmBildingNumber (value) {
      this.bildingNumber = value
      this.showPicker = false
    }
  }
}
</script>

<style lang="less" scoped>
.report-main{
  width: 100%;
}
</style>
