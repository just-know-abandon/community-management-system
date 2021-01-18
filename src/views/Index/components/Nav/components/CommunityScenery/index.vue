<template>
  <div class="scenery-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        小区风光
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="scenery">
      <div class="scenery-wai">
        <div class="scenery-title">
          <b>
            <i>Community</i> Building 小区建筑
          </b>
        </div>
        <div class="scenery-list">
          <ul>
            <li class="scenery-list-li">
              <div class="scenery-list-li-img">
                <img class="scenery-list-li-imga" src="../../../../../../assets/images/scenery/01.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="scenery-title">
          <b>
            <i>Community</i> Looking down 俯揽
          </b>
        </div>
        <div class="scenery-list">
          <ul>
            <li class="scenery-list-li">
              <div class="scenery-list-li-img">
                <img class="scenery-list-li-imga" src="../../../../../../assets/images/scenery/02.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="scenery-title">
          <b>
            <i>Community</i> Night Scene 夜景
          </b>
        </div>
        <div class="scenery-list">
          <ul>
            <li class="scenery-list-li">
              <div class="scenery-list-li-img">
                <img class="scenery-list-li-imga" src="../../../../../../assets/images/scenery/05.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="scenery-title">
          <b>
            <i>Community</i> Evening Party 晚会
          </b>
        </div>
        <div class="scenery-list">
          <ul>
            <li class="scenery-list-li">
              <div class="scenery-list-li-img">
                <img class="scenery-list-li-imga" src="../../../../../../assets/images/scenery/03.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="scenery-title">
          <b>
            <i>Community</i> Sports 运动会
          </b>
        </div>
        <div class="scenery-list">
          <ul>
            <li class="scenery-list-li">
              <div class="scenery-list-li-img">
                <img class="scenery-list-li-imga" src="../../../../../../assets/images/scenery/04.jpg" alt="">
              </div>
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
  name: 'CommunityScenery',
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
.scenery-container{
  width: 100%;
}
.scenery{
  width: 100%;
}
.scenery-wai{
  width: calc(100vw - 28px);
  padding: 0 14px;
  // background-color: pink;
  // height: 1000px;
}
.scenery-title{
  height: 40px;
  padding: 10px 0 0 0;
}
.scenery-title > b{
  font-size: 20px;
  color: #006d9b;
  font-weight: bold;
  text-transform: uppercase;
}
.scenery-title > b > i {
  color: #ff9b00;
  font-weight: normal;
  // padding-right: 5px;
  font-style: normal;
}
// .scenery-title > p {
//   padding-top: 5px;
//   font-size: 18px;
// }
.scenery-list-li{
  // background-color: #eee;
  width: 100%;
  min-height: 100px;
  // padding-bottom: 25px;
  // margin-bottom: 10px;
  padding-bottom: 10px;
}
// .li-eee{
//   background-color: rgb(244, 245, 247);
// }
// .li-fff{
//   background-color: #fff;
// }
.scenery-list-li-img{
  width: calc(100vw - 28px);
  height: 230px;
}
.scenery-list-li-imga{
  width: 100%;
  height: 230px;
}
// .scenery-list-li-title{
//   padding: 20px 10px 0;
//   font-size: 18px;
//   font-weight: bold;
//   color: #383838;
// }
// .scenery-list-li-english{
//   font-size: 18px;
//   padding: 0 10px 20px;
//   color: #006d9b;
//   font-weight: bold;
//   text-transform: uppercase;
// }
// .scenery-list-li-txt{
//   padding: 0 10px 15px;
//   font-size: 16px;
//   color: #383838;
// }
// .scenery-list-li-content{
//   padding: 0 10px;
//   font-size: 14px;
//   line-height: 24px;
//   color: #898888;
// }
// .scenery-list-li-content > b{
//   font-weight: bold;
// }
</style>
