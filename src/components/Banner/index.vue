<template>
  <div class="swiper-container">
    <swiper
    class="swipera"
    :options="swiperOptions">
      <swiper-slide class="swiper-no-swiping" v-for="(item, index) in images" :key="index" >
        <img class="swiper-slide-img" :src="item.src" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Autoplay])
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      images: [
        {
          id: 0,
          src: require('../../assets/images/1.jpg')
        },
        {
          id: 1,
          src: require('../../assets/images/2.jpg')
        },
        {
          id: 2,
          src: require('../../assets/images/3.jpg')
        },
        {
          id: 3,
          src: require('../../assets/images/5.jpg')
        },
        {
          id: 4,
          src: require('../../assets/images/6.jpg')
        },
        {
          id: 5,
          src: require('../../assets/images/7.jpg')
        }
      ],
      swiperOptions: {
        // 无缝滚动
        freeMode: true,
        loop: true,
        speed: 8000,
        autoplay: {
          delay: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/index.less';
// .swiper-container{
//   width: 100%;
//   height: 212px;
//   background-color: #eee;
// }
// .swipera{
//   width: 100vw;
//   // height: 100%;
//   background-color: #eee;
// }
// .swiper-slide{
//   width: 100%;
//   height: 200px;
//   padding: 6px;
// }
// .swiper-slide-img{
//   width: 100%;
//   height: 100%;
//   border-radius: 20px;
// }
// /* 无缝滚动 */
// .swiper-container /deep/ .swiper-container-free-mode > .swiper-wrapper {
//   -webkit-transition-timing-function: linear !important;
//   -moz-transition-timing-function: linear !important;
//   -ms-transition-timing-function: linear !important;
//   -o-transition-timing-function: linear !important;
//   transition-timing-function: linear !important;
// }
</style>
