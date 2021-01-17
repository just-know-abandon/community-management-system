<template>
  <div class="tabBar">
    <router-link to="/index" class="tabBar-item">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/market" class="tabBar-item">
      <i class="iconfont icon-shouye"></i>
      <span>二手市场</span>
    </router-link>
    <router-link to="/chatRoom" class="tabBar-item">
      <i class="iconfont icon-shouye"></i>
      <span>聊天室</span>
    </router-link>
    <router-link to="/share" class="tabBar-item">
      <i class="iconfont icon-shouye"></i>
      <span>分享墙</span>
    </router-link>
    <router-link to="/personalCenter" class="tabBar-item">
      <i class="iconfont icon-shouye"></i>
      <span>个人</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TarBar',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/index.less';
</style>
