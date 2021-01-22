<template>
  <div class="market-management-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        二手市场管理
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="market-management-main">
      <div class="market-management-title">
        商品发布列表
      </div>
      <div class="market-management-list">
        <ul class="market-management-ul">
          <li class="market-management-li">
            <van-swipe-cell :before-close="beforeClose">
              <div class="market-management-swipe">
                <div class="market-management-swipe-l">
                  <div class="market-management-swipe-l-imgbox">
                    <img class="market-management-swipe-l-img" src="../../../../../../assets/images/scenery/01.jpg" alt="">
                  </div>
                </div>
                <div class="market-management-swipe-r">
                  <span class="market-management-swipe-title">商品标题：小米10pro</span>
                  <div class="market-management-swipe-desc">描述：好用的小米10手机，自用98新，外表无磕碰，带原装充电器，价格可以小刀。</div>
                  <div class="market-management-swipe-date">类型：电子产品</div>
                  <div class="market-management-swipe-date">数量：1</div>
                  <div class="market-management-swipe-date">价格：￥19.00</div>
                  <div class="market-management-swipe-date">联系方式：110115313121</div>
                </div>
              </div>
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
              </template>
            </van-swipe-cell>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTop from '../../../../../../components/TitleTop/index'
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    TitleTop
  },
  methods: {
    beforeClose ({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            // instance.close()
            console.log('确定删除')
          }).catch(() => {
            console.log('取消删除')
          })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.delete-button {
  height: 100%;
}
.market-management-main{
  padding: 20px 14px;
  width: calc(100vw - 28px);
}
.market-management-title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: rgb(240, 160, 11);
}
.market-management-title::after{
  content: '';
  display: block;
  width: 120px;
  height: 2px;
  background-color: rgb(240, 160, 11);
}
.market-management-list {
  width: 101%;
}
.market-management-li{
  width: 100%;
  margin-top: 10px;
}
.market-management-swipe{
  display: block;
  overflow: hidden;
  min-height: 120px;
  // width: calc(100vw - 55px);
  // margin-left: 1px;
  // height: 100px;
  word-break : break-all;
  white-space: normal;
  // font-size: 14px;
  margin: 4px 2px 4px 2px ;
  padding: 2px 8px;
  // border: rgba(240, 160, 11, 0.404) 1px solid;
  box-shadow: 0 0 10px 0 rgba(240, 160, 11, 0.404); /*no*/
  color: rgb(150, 150, 150);
  display: flex;
}
.market-management-swipe-title{
  // width: 100%;
  height: 20px;
  line-height: 20px;
  // background-color: #eee;
  font-size: 14px;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.market-management-swipe-desc{
  // background-color: pink;
  // width: 100%;
  line-height: 16px;
  // height: 50px;
  font-size: 12px;
  margin-top: 2px;
}
.market-management-swipe-date{
  // background-color: #eee;
  // width: 100%;
  // height: 50px;
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
  // text-align: end;
}
.market-management-swipe-l {
  // width: 200px;
  // height: 100%;
}
.market-management-swipe-l-imgbox {
  margin-top: 12px;
  width: 100px;
  height: 100px;
  background-color: pink;
}
.market-management-swipe-l-img {
  width: 100px;
  height: 100px;
}
.market-management-swipe-r{
  padding-left: 10px;
}
</style>
