<template>
  <div class="goods-container">
    <div ref="goodsbox" class="goods-box">
      <ul class="goods-box-ul" ref="boxul">
        <li :class="item.goods_type" ref="boxli" v-for="item in goodsList" :key="item.id">
          <!-- {{item.content}} ---- {{item.type}} -->
          <div class="goods-box-main">
            <div class="goods-box-main-imgbox">
              <img class="goods-box-main-img" :src="'http://localhost:3000/public/uploads/' + item.goods_picture" alt="">
            </div>
            <div class="goods-box-main-content">
              <span class="goods-box-main-content-title">商品标题：{{item.goods_title}}</span>
                <div class="goods-box-main-content-desc">描述：{{item.goods_desc}}</div>
                <!-- <div class="goods-box-main-content-date">类型：{{goodsType}}</div> -->
                <div class="goods-box-main-content-date">数量：{{item.goods_number}}</div>
                <div class="goods-box-main-content-date">价格：￥{{item.goods_price}}</div>
                <div class="goods-box-main-content-date">联系方式：{{item.acc_phone}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      offwidtha: '',
      goodsList: []
    }
  },
  props: {
    // mock: {
    //   type: Array
    // },
    goodsType: {
      type: String
    }
  },
  watch: {
    offwidtha (newvalue, oldvalue) {
      console.log(newvalue, oldvalue)
      this.a()
    }
  },
  mounted () {
    // this.a()
    window.onresize = () => {
      return (() => {
        // 这里写要操作的函数
        this.offwidtha = this.$refs.boxul.offsetWidth
        // console.log(this.$refs.rul.offsetWidth)
        // console.log(this.$refs.rli[0].offsetWidth)
        // console.log(this.$refs.rli[0].className)
        // this.a()
      })()
    }
    // console.log(this.$refs.rul.offsetWidth)
    // console.log(this.$refs.rli[0].offsetWidth)
    // console.log(this.$refs.rli[0].className)
  },
  updated () {
    this.a()
  },
  methods: {
    a () {
      // 300 //瀑布流外层盒子的宽度
      const BOX_WIDTH = this.$refs.boxul.offsetWidth
      console.log(BOX_WIDTH)
      // 140 //瀑布流内层盒子的宽度
      const ITEM_WIDTH = this.$refs.boxli[0].offsetWidth
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
      // const item = this.$refs.rli[0].className
      const item = document.querySelectorAll(`${'.' + this.$refs.boxli[0].className}`)
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
      this.$refs.goodsbox.style.height = Math.max.apply(null, heightArr) + 'px'
    },
    getList (limitF, limitS) {
      this.$axios.post('http://localhost:3000/api/user/searchUserMarketGoods', {
        limitF,
        limitS,
        type: this.goodsType
      })
        .then(res => {
          console.log(res.data.data)
          this.goodsList = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>
/* .itema{
  width: 164px;
  height: 80px;
  background-color: ping;
} */
.goods-container{
  width: 100%;
  /* background-color: pink; */
}
.goods-box {
  position: relative;
  width: calc(100vw - 28px); /*no*/
  /* min-height: calc(100vh - 44px - 112px - 50px - 40px - 10px); */
  /* padding-bottom: 10px; */
  margin: 0 auto;
  /* background: rgb(248, 246, 246); */
  /* height: 1000px; */
}
/* .item {
  position: absolute;
  width: 164px;
  left: 0;
  top: 0;
} */
.goods-box-ul{
  /* padding: 0; */
  width: 100%;
  margin: 0;
  min-width: 100px;
  font-size: 20px;
}
.JJ,.FS,.CC,.DQ,.DZCP,.TYYP,.TC,.QT{
  /* height: 100px; */
  position: absolute;
  left: 0; /*no*/
  top: 0; /*no*/
  /* background-color: pink; */
  display: block;
  width: 164px;
  background: rgb(255, 254, 254);
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: 0 0 4px 0 rgba(240, 160, 11, 0.404); /*no*/
  overflow: hidden;
  /* margin-top: 10px; */
}
.goods-box-main{
  width: 100%;
}
.goods-box-main-imgbox{
  width: 164px;
  height: 140px;
  margin: 0 auto;
  background-color: #eee;
}
.goods-box-main-img{
  width: 164px;
  height: 140px;
}
.goods-box-main-content{
  padding: 0 4px 6px 4px;
}
.goods-box-main-content-title{
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  /* font-weight: bold; */
  /* border-bottom: 1px solid rgb(150, 150, 150); */
}
.goods-box-main-content-desc{
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
}
.goods-box-main-content-date{
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
}
</style>
