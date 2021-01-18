<template>
  <div class="notice-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        通知公告
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
    </van-search>
    <div class="notice-main">
      <div class="notice-main-center">
        <div class="notice-main-title">公告列表</div>
        <div class="notice-main-list">
          <ul class="notice-main-list-ul">
            <li class="notice-main-list-li">
              <span class="notice-main-list-li-title">今晚吃饭</span>
              <div class="notice-main-list-li-desc">今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭</div>
              <div class="notice-main-list-li-date">日期：2020-1-18</div>
            </li>
          </ul>
        </div>
      </div>
      <van-pagination
      class="pagination"
      v-model="currentPage"
      :total-items="30"
      :items-per-page="5" />
    </div>
  </div>
</template>

<script>
import TitleTop from '../../../../../../components/TitleTop/index'
export default {
  name: 'Notice',
  data () {
    return {
      value: '',
      currentPage: 1
    }
  },
  components: {
    TitleTop
  },
  methods: {
    onSearch (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.notice-main{
  width: 100%;
  margin-top: 4px;
}
.notice-main-center{
  padding: 0 14px;
  // background-color: #eee;
}
.notice-main-title{
  height: 30px;
  width: 100%;
  // background-color: red;
  font-size: 18px;
  color: rgb(240, 160, 11);
}
.notice-main-title::after{
  content: '';
  display: block;
  width: 80px;
  height: 2px;
  background-color: rgb(240, 160, 11);
}
.notice-main-list{
  width: 100%;
}
.notice-main-list-ul{
  width: 100%;
}
.notice-main-list-li{
  display: block;
  overflow: hidden;
  width: calc(100vw - 48px);
  // height: 100px;
  word-break : break-all;
  white-space: normal;
  // font-size: 14px;
  margin-top: 10px;
  padding: 6px 10px;
  box-shadow: 0 0 4px 0 rgba(240, 160, 11, 0.404); /*no*/
  color: rgb(150, 150, 150);
}
.notice-main-list-li-title{
  // width: 100%;
  height: 20px;
  line-height: 20px;
  // background-color: #eee;
  font-size: 14px;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.notice-main-list-li-desc{
  // background-color: pink;
  width: 100%;
  line-height: 16px;
  // height: 50px;
  font-size: 12px;
  margin-top: 2px;
}
.notice-main-list-li-date{
  // background-color: #eee;
  width: 100%;
  // height: 50px;
  line-height: 16spx;
  font-size: 12px;
  margin-top: 2px;
  text-align: end;
}
.pagination{
  margin-top: 10px;
  padding: 0 14px;
}
</style>
