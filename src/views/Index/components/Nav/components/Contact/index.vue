<template>
  <div class="contact-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        联系我们
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="contact">
      <div class="contact-wai">
        <div class="contact-title">
          好运来服务控股有限公司
          <em>Good fortune Services Holdings Limited</em>
        </div>
        <div class="contact-content">
          <ul class="contact-content-ul">
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 物业主管：</b><span>131213231</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 投诉建议：</b><span>131213231</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 维修部电话：</b><span>131213231</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 保安室门卫电话：</b><span>131213231</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 公司地址：</b><span>广东省佛山市三水区云东海街道大学路07号好运来服务控股有限公司</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 全国服务监督热线：</b><span>400-666-6666转1</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 邮编：</b><span>528100</span>
            </li>
            <li class="contact-content-li">
              <i class="iconfont icon-shouye icon-i"></i>
              <b> 网址：</b><span>http://47.112.167.26/index</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTop from '../../../../../../components/TitleTop/index'
export default {
  name: 'Contact',
  data () {
    return {
    }
  },
  components: {
    TitleTop
  }
}
</script>

<style lang="less" scoped>
.contact-container{
  width: 100%;
}
.contact-wai{
  width: calc(100vw - 28px);
  padding: 30px 14px 0;
  // background-color: pink;
  // height: 1000px;
}
.contact-title{
  font-size: 20px;
  color: #006d9b;
}
.contact-title > em{
  display: block;
  text-transform: uppercase;
  line-height: 25px;
  padding: 7px 0 10px;
  font-size: 12px;
  color: #9d9d9d;
}
.contact-content-ul{
  width: 100%;
}
.contact-content-li{
  // height: 26px;
  line-height: 26px;
  padding: 10px 0 0 10px;
  font-size: 14px;
  color: #666;
  // background-color: pink;
}
.icon-i{
  font-size: 20px;
}
</style>
