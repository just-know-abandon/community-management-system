<template>
  <div class="news-container">
    <div ref="rbox" class="box">
      <div ref="ritem" class="item" style="height: 40px;background: red;"></div>
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
      <div class="item" style="height: 58px;background: orange;"></div>
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
  methods: {
    a () {
      // 300 //瀑布流外层盒子的宽度
      const BOX_WIDTH = this.$refs.rbox.offsetWidth
      // 140 //瀑布流内层盒子的宽度
      const ITEM_WIDTH = this.$refs.ritem.offsetWidth
      // 2   //根据宽度计算可渲染的列数
      const COLUMN = Math.floor(BOX_WIDTH / ITEM_WIDTH)
      // 20 // 根据宽度计算每一列的间距
      const MARGIN = (BOX_WIDTH - ITEM_WIDTH * COLUMN) / (COLUMN - 1)
      // 10 //固定设置每一个小盒子上下间距是10
      const MARGINTOP = 10
      // heightArr=[0, 0]  //定义一个长度等同与列数的数组用来存储每一列的高度，初始值均为0
      const heightArr = new Array(COLUMN).fill(0)
      // 遍历每一个小盒子，确定小盒子的位置
      const item = document.querySelectorAll('.item')
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
      // 将数组中最大的值，即最高的那一列的高度赋给外层盒子
      this.$refs.rbox.style.height = Math.max.apply(null, heightArr) + 'px'
    }
  },
  created () {
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        // 这里写要操作的函数
        this.a()
      })()
    }
    this.a()
    // console.log(this.$refs.rbox.offsetWidth)
    // console.log(this.$refs.ritem.offsetWidth)
  }
}
</script>

<style scoped>
.news-container{
  width: 100%;
  padding-bottom: 10px;
  /* background-color: pink; */
}
.box {
  position: relative;
  width: calc(100vw - 28px); /*no*/
  min-height: 100px;
  margin: 0 auto;
  /* background: #eeeeee; */
}
.item {
  position: absolute;
  width: 164px;
  left: 0; /*no*/
  top: 0; /*no*/
}
</style>
