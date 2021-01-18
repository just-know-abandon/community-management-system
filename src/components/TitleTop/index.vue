<template>
  <div class="title-top">
    <div class="title-top-left" v-if="$slots.lefti" @click="back">
      <i class="iconfont icon-shouye title-top-left-i"></i>
      <slot name="lefti"></slot>
    </div>
    <div class="title-top-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="title-top-mid" v-if="$slots.mid">
      <slot name="mid"></slot>
    </div>
    <div class="title-top-right" v-if="$slots.rightActivity">
      <div class="title-top-right-btn" @click="clickActivity">
        <slot name="rightActivity"></slot>
      </div>
    </div>
    <div class="title-top-right" v-if="$slots.rightShare">
      <div class="title-top-right-btn" @click="clickShare">
        <slot name="rightShare"></slot>
      </div>
    </div>
    <div class="title-top-right" v-if="$slots.ze">
      <slot name="ze"></slot>
    </div>
    <van-dialog
    v-model="rightActivityShow"
    title="标题"
    @confirm = "activityConfirmDialog"
    @cancel = "activityCancelDialog"
    show-cancel-button
    v-if="$slots.rightActivity">
      <van-cell-group>
        <van-field v-model="activityTitleValue" label="活动" placeholder="请输入用户名" />
        <van-field v-model="activityPlaceValue" label="地点" placeholder="请输入用户名" />
        <van-field
          v-model="activityDescValue"
          rows="2"
          autosize
          label="活动内容"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="activityTimeValue"
          label="活动时间"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onConfirmTime"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="calendar"
          :value="activityDateValue"
          label="活动日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirmDate" />
      </van-cell-group>
    </van-dialog>
    <van-dialog
    v-model="rightShareShow"
    title="分享"
    @confirm = "shareConfirmDialog"
    @cancel = "shareCancelDialog"
    show-cancel-button
    v-if="$slots.rightShare">
      <van-cell-group>
        <van-field v-model="shareTitleValue" label="分享标题" placeholder="请输入分享标题" />
        <van-field
          v-model="shareDescValue"
          rows="2"
          autosize
          label="分享内容"
          type="textarea"
          maxlength="50"
          placeholder="请输入分享内容"
          show-word-limit
        />
        <van-field name="uploader" label="分享图片">
          <template #input>
            <van-uploader v-model="shareUploader" />
          </template>
        </van-field>
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'TitleTop',
  data () {
    return {
      rightActivityShow: false,
      rightShareShow: false,
      activityTitleValue: '',
      activityPlaceValue: '',
      activityDescValue: '',
      activityTimeValue: '',
      activityDateValue: '',
      shareTitleValue: '',
      shareDescValue: '',
      showPicker: false,
      showCalendar: false,
      shareUploader: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    clickActivity () {
      this.rightActivityShow = true
    },
    clickShare () {
      this.rightShareShow = true
    },
    onConfirmTime (time) {
      this.activityTimeValue = time
      this.showPicker = false
    },
    onConfirmDate (date) {
      this.activityDateValue = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    },
    activityConfirmDialog () {
      console.log('添加活动确定')
      console.log(this.activityTitleValue)
      console.log(this.activityPlaceValue)
      console.log(this.activityDescValue)
      console.log(this.activityTimeValue)
      console.log(this.activityDateValue)
      this.activityTitleValue = ''
      this.activityPlaceValue = ''
      this.activityDescValue = ''
      this.activityTimeValue = ''
      this.activityDateValue = ''
    },
    activityCancelDialog () {
      console.log('添加活动取消')
    },
    shareConfirmDialog () {
      console.log('分享确定')
      console.log(this.shareTitleValue)
      console.log(this.shareDescValue)
      console.log(this.shareUploader)
      this.shareTitleValue = ''
      this.shareDescValue = ''
      this.shareUploader = []
    },
    shareCancelDialog () {
      console.log('分享取消')
    }
  }
}
</script>

<style lang="less" scoped>
.title-top{
  height: 50px; /*no*/
  width: 100%;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
  // font-size: 20px; /*no*/
}
.title-top-left{
  width: 60px; /*no*/
  height: 100%;
  // background-color: blue;
  line-height: 50px;  /*no*/
  text-align: center;
}
.title-top-left-i{
  color: rgb(240, 160, 11);
  font-size: 20px;  /*no*/
}
.title-top-right{
  width: 60px; /*no*/
  height: 100%;
  // background-color: pink;
  position: relative;
}
.title-top-mid{
  height: 50px; /*no*/
  line-height: 50px; /*no*/
  color: rgb(240, 160, 11);
  font-size: 18px;  /*no*/
}
.title-top-right-btn{
  border: 1px solid rgb(240, 160, 11);
  width: 16px; /*no*/
  height: 16px; /*no*/
  border-radius: 12px; /*no*/
  font-size: 20px; /*no*/
  line-height: 16px; /*no*/
  text-align: center;
  color: rgb(240, 160, 11);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px; /*no*/
}
</style>
