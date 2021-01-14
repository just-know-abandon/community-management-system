<template>
  <div class="news-container">
    <div ref="rbox" class="box">
      <!-- {{mock}} -->
      <!-- {{itemChild.content}} {{ itemChild.id }} -->
      <!-- <div ref="ritem" class="item"> -->
      <ul class="ula" ref="rul">
        <li :class="item.type" ref="rli" v-for="(item, index) in mock" :key="index">
          {{item.content}} ---- {{item.type}}
        </li>
      </ul>
        <!-- {{mock}} -->
        <!-- {{mock}} -->
        <!-- {{mock.content}} -->
      <!-- </div> -->
      <!-- <div ref="ritem" class="item" style="height: 40px;background: red;"></div>
      <div class="item" style="height: 50px;background: blue;"></div>
      <div class="item" style="height: 100px;background: green;"></div>
      <div class="item" style="height: 60px;background: gray;"></div>
      <div class="item" style="height: 50px;background: orange;"></div>
      <div class="item" style="height: 20px;background: yellow;"></div>
      <div class="item" style="height: 40px;background: red;"></div>
      <div class="item" style="height: 50px;background: blue;"></div>
      <div class="item" style="height: 100px;background: green;"></div>
      <div class="item" style="height: 120px;background: gray;"></div>
      <div class="item" style="height: 58px;background: orange;"></div>
      <div class="item" style="height: 36px;background: yellow;"></div>
      <div class="item" style="height: 36px;background: yellow;"></div>
      <div class="item" style="height: 58px;background: orange;"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
    }
  },
  props: {
    mock: {
      type: Array
    }
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        // 这里写要操作的函数
        this.a()
      })()
    }
    this.a()
    console.log(this.$refs.rul.offsetWidth)
    console.log(this.$refs.rli[0].offsetWidth)
    console.log(this.$refs.rli[0].className)
  },
  // updated () {
  //   this.a()
  // },
  methods: {
    a () {
      // 300 //瀑布流外层盒子的宽度
      const BOX_WIDTH = this.$refs.rul.offsetWidth
      console.log(BOX_WIDTH)
      // 140 //瀑布流内层盒子的宽度
      const ITEM_WIDTH = this.$refs.rli[0].offsetWidth
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
      const item = document.querySelectorAll(`${'.' + this.$refs.rli[0].className}`)
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
  }
}
</script>

<style scoped>
/* .itema{
  width: 164px;
  height: 80px;
  background-color: ping;
} */
.news-container{
  width: 100%;
  /* background-color: pink; */
}
.box {
  position: relative;
  width: calc(100vw - 28px); /*no*/
  /* min-height: 100px; */
  margin: 0 auto;
  /* background: #eeeeee; */
  height: 1000px;
}
/* .item {
  position: absolute;
  width: 164px;
  left: 0;
  top: 0;
} */
.ula{
  /* padding: 0; */
  width: 100%;
  margin: 0;
  min-width: 100px;
}
.a,.b,.c,.d,.e,.f,.g,.h{
  /* height: 100px; */
  position: absolute;
  left: 0; /*no*/
  top: 0; /*no*/
  background-color: pink;
  display: block;
  width: 164px;
  /* margin-top: 10px; */
}
</style>
