<template>
  <div class="personal-container">
    <TitleTop>
      <span slot="left"></span>
      <span slot="mid">
        个人中心
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="personal-top"></div>
    <Infos />
    <Option />
  </div>
</template>

<script>
import TitleTop from '../../components/TitleTop/index'
import Infos from './components/Infos/index'
import Option from './components/Option/index'
export default {
  name: 'PersonalCenter',
  data () {
    return {
    }
  },
  components: {
    TitleTop,
    Infos,
    Option
  }
}
</script>

<style lang="less" scoped>
.personal-top{
  width: 100%;
  height: 200px;
  background-color: pink;
  background: url('../../assets/images/5.jpg') no-repeat;
  background-size:100% 200px;
  opacity: 0.7;
  filter: blur(2px);
  // background-repeat: no-repeat;
}
</style>
