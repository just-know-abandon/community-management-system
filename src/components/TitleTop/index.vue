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
    <div class="title-top-right" v-if="$slots.rightgoods">
      <div class="title-top-right-btn" @click="clickgoods">
        <slot name="rightgoods"></slot>
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
          @click="showDateCalendar = true"
        />
        <van-calendar v-model="showDateCalendar" @confirm="onConfirmDate" />
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
            <van-uploader v-model="shareUploader" :after-read="afterRead" />
          </template>
        </van-field>
      </van-cell-group>
    </van-dialog>
    <van-dialog
    v-model="rightgoodsShow"
    title="二手商品发布"
    @confirm = "goodsConfirmDialog"
    @cancel = "goodsCancelDialog"
    show-cancel-button
    v-if="$slots.rightgoods">
      <van-cell-group>
        <van-field
          readonly
          clickable
          name="goodsType"
          :value="goodsType"
          label="商品类型"
          placeholder="点击选择商品类型"
          @click="showGoodsCalendar = true"
        />
        <van-popup v-model="showGoodsCalendar" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirmGoods"
            @cancel="showGoodsCalendar = false"
          />
        </van-popup>
        <van-field v-model="goodsTitleValue" label="商品标题" placeholder="请输入商品标题" />
        <van-field
          v-model="goodsDescValue"
          rows="2"
          autosize
          label="商品描述"
          type="textarea"
          maxlength="50"
          placeholder="请输入商品描述"
          show-word-limit
        />
        <van-field v-model="goodsQuantity" type="digit" label="数量" placeholder="请输入商品数量" />
        <van-field v-model="goodsPrice" type="number" label="价格" placeholder="请输入商品价格" />
        <van-field v-model="goodsContact" label="联系方式" placeholder="请输入微信号或手机号码" />
        <van-field name="uploader" label="商品图片">
          <template #input>
            <van-uploader v-model="goodsUploader" />
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
      rightgoodsShow: false,
      activityTitleValue: '',
      activityPlaceValue: '',
      activityDescValue: '',
      activityTimeValue: '',
      activityDateValue: '',
      shareTitleValue: '',
      shareDescValue: '',
      goodsTitleValue: '',
      goodsDescValue: '',
      goodsQuantity: '',
      goodsPrice: '',
      goodsContact: '',
      goodsType: '',
      showPicker: false,
      showDateCalendar: false,
      showGoodsCalendar: false,
      shareUploader: [],
      goodsUploader: [],
      columns: ['家具', '服饰', '餐厨', '电器', '电子产品', '体育用品', '特产', '其他']
    }
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.file)
      const a = file.file
      console.log(a)
      const formData = new FormData()
      console.log(formData)
      formData.set('file', file.file)
      formData.set('name', file.file.name)
      formData.set('timestamp', Date.now())
      console.log(formData)
      // for (var key of formData.entries()) {
      //   console.log(key[0] + ', ' + key[1])
      // }
      this.$axios.post('http://localhost:3000/upload', formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res.data)
          console.log(res.data.filename)
          // if (res.data.code === 0) {
          //   this.$toast('上传成功')
          // } else {
          //   this.$toast(res.msg)
          // }
        }).catch(err => {
          console.log(err)
          // this.$toast(err)
        })
    },
    back () {
      this.$router.go(-1)
    },
    clickActivity () {
      this.rightActivityShow = true
    },
    clickShare () {
      this.rightShareShow = true
    },
    clickgoods () {
      this.rightgoodsShow = true
    },
    onConfirmTime (time) {
      this.activityTimeValue = time
      this.showPicker = false
    },
    onConfirmDate (date) {
      this.activityDateValue = `${date.getMonth() + 1}/${date.getDate()}`
      this.showDateCalendar = false
    },
    onConfirmGoods (value) {
      this.goodsType = value
      this.showGoodsCalendar = false
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
    },
    goodsConfirmDialog () {
      console.log('上架确定')
      console.log(this.goodsType)
      console.log(this.goodsTitleValue)
      console.log(this.goodsDescValue)
      console.log(this.goodsQuantity)
      console.log(this.goodsPrice)
      console.log(this.goodsContact)
      console.log(this.goodsUploader)
      this.goodsType = ''
      this.goodsTitleValue = ''
      this.goodsDescValue = ''
      this.goodsQuantity = ''
      this.goodsPrice = ''
      this.goodsContact = ''
      this.goodsUploader = []
    },
    goodsCancelDialog () {
      console.log('上架取消')
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
  height: 50px; /*no*/
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
