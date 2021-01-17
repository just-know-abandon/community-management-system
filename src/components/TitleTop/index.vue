<template>
  <div class="title-top">
    <div class="title-top-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="title-top-mid" v-if="$slots.mid">
      <slot name="mid"></slot>
    </div>
    <div class="title-top-right" v-if="$slots.right">
      <div class="title-top-right-btn">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="title-top-right" v-if="$slots.ze">
      <slot name="ze"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleTop',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.title-top{
  height: 50px; /*no*/
  width: 100%;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
  font-size: 20px; /*no*/
}
.title-top-left{
  width: 60px; /*no*/
  height: 100%;
  // background-color: blue;
}
.title-top-right{
  width: 60px; /*no*/
  height: 100%;
  // background-color: pink;
  position: relative;
}
.title-top-mid{
  height: 50px; /*no*/
  line-height: 50px; /*no*/
  color: rgb(240, 160, 11);
}
.title-top-right-btn{
  border: 1px solid rgb(240, 160, 11);
  width: 16px; /*no*/
  height: 16px; /*no*/
  border-radius: 12px; /*no*/
  font-size: 20px; /*no*/
  line-height: 16px; /*no*/
  text-align: center;
  color: rgb(240, 160, 11);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px; /*no*/
}
</style>
