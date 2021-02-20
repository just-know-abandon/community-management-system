<template>
  <div class="news-container">
    <div ref="rbox" class="news-main">
      <ul class="news-main-ul" ref="newsul" id="news">
        <li class="qqq" ref="newsli" v-for="item in newsNotice" :key="item.id">
          <div class="news-main-li-content">
            <span class="news-main-li-content-title">{{item.notice_title}}</span>
            <p class="news-main-li-content-desc">{{item.notice_desc}}</p>
            <p class="news-main-li-content-date">{{item.notice_date}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      offwidtha: '',
      newsNotice: [],
      mock: [
        {
          id: 0,
          title: '今晚吃饭',
          desc: '今晚记得来吃饭啊，北门见',
          content: '今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭今晚吃饭',
          date: '2020-1-18'
        },
        {
          id: 1,
          title: '今晚宵夜',
          desc: '今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见',
          content: '今晚宵夜今晚宵夜今晚宵夜',
          date: '2020-1-18'
        },
        {
          id: 2,
          title: '今晚宵夜',
          desc: '今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见',
          content: '今晚宵夜今晚宵夜今晚宵夜',
          date: '2020-1-18'
        },
        {
          id: 3,
          title: '今晚宵夜',
          desc: '今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见今晚记得来宵夜啊，北门见',
          content: '今晚宵夜今晚宵夜今晚宵夜',
          date: '2020-1-18'
        },
        {
          id: 3,
          title: '今晚宵夜',
          desc: '今晚记得来宵夜啊',
          content: '今晚宵夜今晚宵夜今晚宵夜',
          date: '2020-1-18'
        }
      ]
    }
  },
  methods: {
    a () {
      // 300 //瀑布流外层盒子的宽度
      const BOX_WIDTH = this.$refs.newsul.offsetWidth
      console.log(BOX_WIDTH)
      // console.log(this.$refs)
      // console.log(this.$refs.newsli)
      // console.log(this.$refs.newsli[0])
      console.log(666666)
      // 140 //瀑布流内层盒子的宽度
      const ITEM_WIDTH = this.$refs.newsli[0].offsetWidth
      console.log(ITEM_WIDTH)
      // 2   //根据宽度计算可渲染的列数
      const COLUMN = Math.floor(BOX_WIDTH / ITEM_WIDTH)
      // 20 // 根据宽度计算每一列的间距
      const MARGIN = (BOX_WIDTH - ITEM_WIDTH * COLUMN) / (COLUMN - 1)
      // 10 //固定设置每一个小盒子上下间距是10
      const MARGINTOP = 10
      // heightArr=[0, 0]  //定义一个长度等同与列数的数组用来存储每一列的高度，初始值均为0
      const heightArr = new Array(COLUMN).fill(0)
      // 遍历每一个小盒子，确定小盒子的位置
      // const item = this.$refs.newsli[0].className
      // const item = document.getElementById('news').getElementsByTagName('li')
      const item = document.querySelectorAll('.qqq')
      console.log(item)
      // item.length=12
      for (let i = 0; i < item.length; i++) {
        // 0
        const index = heightArr.indexOf(Math.min.apply(null, heightArr))
        // console.log(heightArr)
        // console.log(index)
        item[i].style.left = (ITEM_WIDTH + MARGIN) * index + 'px'
        item[i].style.top = heightArr[index] + MARGINTOP + 'px'
        heightArr[index] += item[i].offsetHeight + MARGINTOP
        // console.log(index)
        // console.log(heightArr)
      }
      console.log(item.length)
      console.log(item)
      // 将数组中最大的值，即最高的那一列的高度赋给外层盒子
      this.$refs.rbox.style.height = Math.max.apply(null, heightArr) + 'px'
    },
    getList (limitF, limitS) {
      this.$axios.post('http://localhost:3000/api/admin/searchNotice', {
        limitF,
        limitS
      })
        .then(res => {
          console.log(res.data.data)
          this.newsNotice = res.data.data
          console.log(this.newsNotice)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    console.log(123123123123)
    this.getList(0, 6)
  },
  watch: {
    offwidtha (newvalue, oldvalue) {
      console.log(newvalue, oldvalue)
      this.a()
    }
  },
  updated () {
    this.a()
    console.log(1)
    // this.a()
    console.log(2)
    // console.log(this.$refs.rbox.offsetWidth)
    // console.log(this.$refs.ritem.offsetWidth)
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        // 这里写要操作的函数
        this.offwidtha = this.$refs.newsul.offsetWidth
        // this.a()
      })()
    }
  }
}
</script>

<style scoped>
.news-container{
  width: 100%;
  /* padding-bottom: 10px; */
  /* background-color: pink; */
}
.news-main {
  position: relative;
  width: calc(100vw - 28px); /*no*/
  /* min-height: 100px; */
  margin: 0 auto;
  padding-bottom: 20px;
  /* background: #eeeeee; */
}
.news-main-ul{
  /* padding: 0; */
  width: 100%;
  margin: 0;
  min-width: 100px;
  font-size: 20px;
}
/* .a, .b, .c, .d, .e  */
/* news-main-li */
.qqq {
  position: absolute;
  left: 0; /*no*/
  top: 0; /*no*/
  /* background-color: #eee; */
  display: block;
  width: 164px;
  box-shadow: 0 0 4px 0 rgba(240, 160, 11, 0.404);
}
.news-main-li-content{
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: border-box;

}
.news-main-li-content-title{
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  /* color: rgb(240, 160, 11); */
  /* color: rgb(117, 106, 106); */
  display: inline-block;
  /* margin-bottom: 4px; */
  /* border-bottom: 1px solid rgb(117, 106, 106); */
}
/* .news-main-li-content-title::after{
  content: '';
  display: block;
  width: 80px;
  height: 2px;
  background-color: rgb(240, 160, 11);
} */
.news-main-li-content-desc{
  width: 100%;
  line-height: 16px;
  font-size: 14px;
  margin-top: 2px;
  color: rgb(117, 106, 106);
}
.news-main-li-content-date{
  width: 100%;
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
  color: rgb(117, 106, 106);
  text-align: end;
}
</style>
