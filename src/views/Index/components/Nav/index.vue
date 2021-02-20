<template>
  <div class="nav-container">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in navItems" :key="index">
          <router-link class="nav-link" :to="item.linkUrl">
            <i class="nav-i" :class="item.picUrl"></i>
            <span class="nav-span">{{item.text}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navItems: [
        {
          linkUrl: '/index/notice',
          picUrl: 'iconfont icon-shouye',
          text: '通知公告'
        },
        {
          linkUrl: '/index/communityActivity',
          picUrl: 'iconfont icon-shouye',
          text: '小区活动'
        },
        {
          linkUrl: '/index/organizingActivity',
          picUrl: 'iconfont icon-shouye',
          text: '组织活动'
        },
        {
          linkUrl: '/index/services',
          picUrl: 'iconfont icon-shouye',
          text: '物业服务'
        },
        {
          linkUrl: '/index/communityScenery',
          picUrl: 'iconfont icon-shouye',
          text: '小区风光'
        },
        {
          linkUrl: '/index/visitor',
          picUrl: 'iconfont icon-shouye',
          text: '访客通报'
        },
        {
          linkUrl: '/index/reportRepair',
          picUrl: 'iconfont icon-shouye',
          text: '损坏报修'
        },
        {
          linkUrl: '/index/reportLoss',
          picUrl: 'iconfont icon-shouye',
          text: '失物报备'
        },
        {
          linkUrl: '/index/complaint',
          picUrl: 'iconfont icon-shouye',
          text: '投诉建议'
        },
        {
          linkUrl: '/index/contact',
          picUrl: 'iconfont icon-shouye',
          text: '联系我们'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nav-container{
  width: 100%;
  height: 141px; /*no*/
}
.nav{
  width: 100%;
  padding-top: 15px; /*no*/
  // background-color: #eee;
  .nav-list{
    display: flex;
    flex-wrap: wrap;
  }
  .nav-item{
    width: 20%;
    padding-bottom: 15px; /*no*/
  }
  .nav-link{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .nav-i{
    color: #f0a00b;
    font-size: 28px; /*no*/
  }
  .nav-pic{
    width: 60%;
    margin-bottom: 8px; /*no*/
  }
  .nav-span{
    font-size: 12px; /*no*/
    color: black;
  }
}
</style>
