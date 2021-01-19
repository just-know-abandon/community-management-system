<template>
  <div class="infos-container">
    <div class="infos-pic">
      <img class="infos-pic-image" src="../../../../assets/logo.png" alt="">
    </div>
    <div class="info-content">
      <div class="info-content-mid">
        <ul>
          <li class="info-content-mid-li">用户账号：{{accountNumber}}</li>
          <li class="info-content-mid-li">用户昵称：{{nickName}}</li>
          <li class="info-content-mid-li">归属小区：{{community}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Infos',
  data () {
    return {
      accountNumber: 'zhangsan123',
      nickName: '啊哈哈',
      community: '好运来小区'
    }
  }
}
</script>

<style lang="less" scoped>
.infos-container{
  // height: 220px; /*no*/
  height: 80px;
  width: 100%;
  // background-color: rgb(247, 241, 230);
  position: relative;
  margin-top: -80px;
}
.infos-pic{
  height: 70px;
  width: 70px;
  // background-color: blue;
  position: absolute;
  top: -4px;
  left: 20px;
  border-radius: 70px;
  overflow: hidden;
  border: 4px solid rgb(240, 182, 74);  /*no*/
  // opacity: 1 !important;
  background-color: #fff;
}
.infos-pic-image{
  height: 70px;
  width: 70px;
}
.info-content{
  padding-left: 114px;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
}
.info-content-mid{
  font-size: 14px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
}
.info-content-mid-li{
  color: #fff;
  font-size: 14px;
  height: 22px;
}
</style>
