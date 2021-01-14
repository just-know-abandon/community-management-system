<!-- 首页 -->
<template>
  <div class="Index">
    <div class="notice-bar">
      <van-notice-bar
        left-icon="volume-o"
        mode="closeable"
        :scrollable="false"
        text="小区物业管理全体工作人员祝 2021 新年快乐"
      />
    </div>
    <div class="con">
      <Banner />
      <Nav />
      <van-divider
        :style="{ color: 'rgb(240, 160, 11)', borderColor: 'rgb(240, 160, 11)', padding: '0 14px', margin: '10px 0' }"
      >
        最新公告
      </van-divider>
      <News />
    </div>
  </div>
</template>

<script>
import Banner from '../../components/Banner/index'
import Nav from './components/Nav/index'
import News from './components/News/index'
export default {
  name: 'Index',
  components: {
    Banner,
    Nav,
    News
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
</style>
