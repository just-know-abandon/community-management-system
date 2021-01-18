<template>
  <div class="share-container">
    <TitleTop>
      <span slot="left"></span>
      <span slot="mid">
        {{title}}
      </span>
      <span slot="rightShare">
        {{btn}}
      </span>
    </TitleTop>
    <ShareMain />
  </div>
</template>

<script>
// import ShareTitle from './components/ShareTitle/index'
import TitleTop from '../../components/TitleTop/index'
import ShareMain from './components/ShareMain/index'
export default {
  name: 'Share',
  components: {
    TitleTop,
    ShareMain
  },
  data () {
    return {
      title: '分享墙',
      btn: '+',
      left: '<'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
