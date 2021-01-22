<template>
  <div class="share-container">
    <div ref="rbox" class="share-main">
      <ul class="share-main-ul" ref="shareul">
        <li class="share-main-li" ref="shareli" v-for="(item, index) in mock" :key="index">
          <div class="share-main-li-content">
            <div class="share-box-main-imgbox">
              <img class="share-box-main-img" src="../../../../assets/images/scenery/01.jpg" alt="">
            </div>
            <div class="share-box-main-content">
              <span class="share-main-li-content-title">{{item.title}}</span>
              <p class="share-main-li-content-desc">{{item.desc}}</p>
              <!-- <p class="share-main-li-content-date">{{item.date}}</p> -->
              <div class="share-main-li-content-user">
                <span class="share-main-li-content-user-desc">
                  <img class="share-main-li-content-user-desc-img" src="../../../../assets/images/scenery/01.jpg" alt="">
                  <span class="share-main-li-content-user-desc-name">敏哥</span>
                </span>
                <span class="share-main-li-content-user-like">
                  <i class="iconfont icon-shouye"></i>
                  <span>1</span>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      offwidtha: '',
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
      const BOX_WIDTH = this.$refs.shareul.offsetWidth
      console.log(BOX_WIDTH)
      // 140 //瀑布流内层盒子的宽度
      const ITEM_WIDTH = this.$refs.shareli[0].offsetWidth
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
      // const item = this.$refs.shareli[0].className
      const item = document.querySelectorAll(`${'.' + this.$refs.shareli[0].className}`)
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
    }
  },
  created () {
  },
  watch: {
    offwidtha (newvalue, oldvalue) {
      console.log(newvalue, oldvalue)
      this.a()
    }
  },
  mounted () {
    this.a()
    window.onresize = () => {
      return (() => {
        // 这里写要操作的函数
        this.offwidtha = this.$refs.shareul.offsetWidth
        // this.a()
      })()
    }
    // console.log(this.$refs.rbox.offsetWidth)
    // console.log(this.$refs.ritem.offsetWidth)
  }
}
</script>

<style scoped>
.share-container{
  width: 100%;
  /* padding-bottom: 10px; */
  /* background-color: pink; */
}
.share-main {
  position: relative;
  width: calc(100vw - 28px); /*no*/
  /* min-height: 100px; */
  margin: 0 auto;
  padding-bottom: 20px;
  /* background: #eeeeee; */
}
.share-main-ul{
  /* padding: 0; */
  width: 100%;
  margin: 0;
  min-width: 100px;
  font-size: 20px;
}
.share-main-li {
  position: absolute;
  left: 0; /*no*/
  top: 0; /*no*/
  /* background-color: #eee; */
  display: block;
  width: 164px;
  box-shadow: 0 0 4px 0 rgba(240, 160, 11, 0.404);
}
.share-main-li-content{
  width: 100%;
  height: 100%;
  box-sizing: border-box;

}
.share-main-li-content-title{
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  /* color: rgb(240, 160, 11); */
  display: inline-block;
  /* margin-bottom: 4px; */
  /* border-bottom: 1px solid rgb(240, 160, 11); */
}
/* .share-main-li-content-title::after{
  content: '';
  display: block;
  width: 80px;
  height: 2px;
  background-color: rgb(240, 160, 11);
} */
.share-main-li-content-desc{
  width: 100%;
  line-height: 16px;
  font-size: 14px;
  margin-top: 2px;
  color: rgb(117, 106, 106);
}
.share-main-li-content-date{
  width: 100%;
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
  color: rgb(117, 106, 106);
  text-align: end;
}
.share-box-main-content{
  padding: 0 4px 6px 4px;
}
.share-box-main-imgbox{
  width: 164px;
  height: 140px;
  margin: 0 auto;
  background-color: #eee;
}
.share-box-main-img{
  width: 164px;
  height: 140px;
}
.share-main-li-content-user{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin-top: 8px;
}
.share-main-li-content-user-desc{
  display: block;
  position: relative;
  width: 100px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.share-main-li-content-user-desc-name{
  display: inline-block;
  line-height: 20px;
  height: 20px;
  position: absolute;
  top: 2px;
  left: 24px;
}
.share-main-li-content-user-desc-img{
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
.share-main-li-content-user-like{
  font-size: 12px;
}
</style>
