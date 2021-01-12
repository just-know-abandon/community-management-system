<!-- 首页 -->
<template>
  <div class="home">
    <router-view />
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
  }
}
</script>

<style lang="less" scoped>
</style>
