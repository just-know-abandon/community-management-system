<!-- 首页 -->
<template>
  <div class="home">
    <vue-scroll :ops="ops">
      <router-view />
    </vue-scroll>
    <div class="tabBar">
      <TabBar />
    </div>
  </div>
</template>

<script>
import TabBar from '../../components/TabBar'
export default {
  name: 'Home',
  components: {
    TabBar
  },
  data () {
    return {
      ops: {
        vuescroll: {
          checkShiftKey: true,
          locking: false
        },
        bar: {
          opacity: 0.5,
          minSize: 0.1,
          background: '#000'
        },
        rail: {
          gutterOfEnds: '6px'
          // gutterOfSide: '2px'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: calc(100vh - 50px); /*no*/
}
</style>
