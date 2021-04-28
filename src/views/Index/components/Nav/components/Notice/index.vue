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
            <li class="notice-main-list-li" v-for="item in newsNotice" :key="item.id">
              <span class="notice-main-list-li-title">{{item.notice_title}}</span>
              <div class="notice-main-list-li-desc">{{item.notice_content}}</div>
              <div class="notice-main-list-li-date">{{item.notice_date}}</div>
            </li>
          </ul>
        </div>
      </div>
      <van-pagination
      class="pagination"
      v-model="currentPage"
      @change="pagechange"
      :total-items="this.newsNoticeTotle"
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
      currentPage: 1,
      newsNotice: [],
      newsNoticeTotle: ''
    }
  },
  components: {
    TitleTop
  },
  created () {
    this.getList()
    this.getListTotle()
  },
  methods: {
    search () {
      this.$axios.post('api/admin/searchNotice', {
        limitF: (this.currentPage - 1) * 5,
        limitS: 5,
        title: this.value
      })
        .then(res => {
          console.log(res.data.data)
          this.newsNotice = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchTotal (val) {
      this.$axios.post('api/admin/searchNotice', {
        title: this.value
      })
        .then(res => {
          console.log(res.data.data)
          this.newsNoticeTotle = res.data.data.length
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSearch (val) {
      this.currentPage = 1
      this.value = val
      console.log(this.value)
      if (this.value === '') {
        this.getList()
        this.getListTotle()
        console.log(this.newsNoticeTotle)
      } else {
        this.search()
        this.searchTotal(this.value)
        console.log(this.newsNoticeTotle)
      }
    },
    getList () {
      this.$axios.post('api/admin/searchNotice', {
        limitF: (this.currentPage - 1) * 5,
        limitS: 5
      })
        .then(res => {
          console.log(res.data.data)
          this.newsNotice = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getListTotle () {
      this.$axios.post('api/admin/searchNotice')
        .then(res => {
          this.newsNoticeTotle = res.data.data.length
          console.log(res.data.data.length)
        })
        .catch(err => {
          console.log(err)
        })
    },
    pagechange () {
      console.log(this.currentPage)
      if (this.value !== '') {
        this.search()
      } else {
        this.getList()
      }
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
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
  text-align: end;
}
.pagination{
  margin: 10px 0;
  padding: 0 14px;
}
</style>
