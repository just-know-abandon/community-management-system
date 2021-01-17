<template>
  <div class="share-container">
    <ShareTitle />
    <ShareMain />
  </div>
</template>

<script>
import ShareTitle from './components/ShareTitle/index'
import ShareMain from './components/ShareMain/index'
export default {
  name: 'Share',
  components: {
    ShareTitle,
    ShareMain
  }
}
</script>

<style lang="less" scoped>
</style>
