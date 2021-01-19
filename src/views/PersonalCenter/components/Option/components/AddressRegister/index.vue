<template>
  <div class="change-personal-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        住址信息
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
          v-model="communityName"
          name="communityName"
          disabled
          label="小区名"
          placeholder="请填写小区名"
          :rules="[{ required: true }]"
        />
        <van-field
          readonly
          clickable
          name="bildingNumber"
          :value="bildingNumber"
          label="楼栋号"
          placeholder="点击选择楼栋号"
          @click="showBildingNumberPicker = true"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showBildingNumberPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columnsBildingNumber"
            @confirm="onConfirmBildingNumber"
            @cancel="showBildingNumberPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="layerNumber"
          :value="layerNumber"
          label="楼层"
          placeholder="点击选择楼层"
          @click="showLayerNumberPicker = true"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showLayerNumberPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columnsLayerNumber"
            @confirm="onConfirmLayerNumber"
            @cancel="showLayerNumberPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="houseNumber"
          :value="houseNumber"
          label="门牌号"
          placeholder="点击选择门牌号"
          @click="showHouseNumberPicker = true"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showHouseNumberPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columnsHouseNumber"
            @confirm="onConfirmHouseNumber"
            @cancel="showHouseNumberPicker = false"
          />
        </van-popup>
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
      userName: '',
      communityName: '好运来小区',
      bildingNumber: '',
      layerNumber: '',
      houseNumber: '',
      showBildingNumberPicker: false,
      showLayerNumberPicker: false,
      showHouseNumberPicker: false,
      columnsBildingNumber: ['一号楼', '二号楼', '三号楼', '四号楼', '五号楼'],
      columnsLayerNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      columnsHouseNumber: ['1', '2', '3', '4', '5']
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onConfirmBildingNumber (value) {
      this.bildingNumber = value
      this.showBildingNumberPicker = false
    },
    onConfirmLayerNumber (value) {
      this.layerNumber = value
      this.showLayerNumberPicker = false
    },
    onConfirmHouseNumber (value) {
      this.houseNumber = value
      this.showHouseNumberPicker = false
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
