<template>
  <div class="market-container">
    <van-notice-bar
        left-icon="volume-o"
        text="二手市场仅提供闲置物品发布，平台不作任何担保，小区内双方私下交易可以联系物业管理人员进行见证。"
      />
    <div>
      <div class="asd">
        <Release />
      </div>
      <!-- <Goods /> -->
    </div>
  </div>
</template>

<script>
// import Goods from './components/Goods/index'
import Release from './components/Release/index'
export default {
  name: 'Market',
  components: {
    // Goods,
    Release
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.asd{
  width: 100%;
  height: 500px;
  // background-color: pink;
}
</style>
