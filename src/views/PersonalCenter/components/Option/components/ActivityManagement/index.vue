<template>
  <div>
    <van-swipe-cell :before-close="beforeClose">
      <div class="asd">123</div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    beforeClose ({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            // instance.close()
            console.log('确定删除')
          }).catch(() => {
            console.log('取消删除')
          })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.asd{
  height: 200px;
  width: 100%;
  background-color: pink;
}
.delete-button {
  height: 100%;
}
</style>
