<template>
  <div class="activity-management-container">
    <TitleTop>
      <span slot="lefti"></span>
      <span slot="mid">
        组织活动管理
      </span>
      <span slot="ze"></span>
    </TitleTop>
    <div class="activity-management-main">
      <div class="activity-management-title">
        组织活动列表
      </div>
      <div class="activity-management-list">
        <ul class="activity-management-ul">
          <li class="activity-management-li">
            <van-swipe-cell :before-close="beforeClose" :name="item.id" v-for="(item, index) in dataList" :key="index">
              <!-- <div class="swipe-contnet">组织活动列表</div> -->
              <div class="activity-management-swipe">
                <span class="activity-management-swipe-title">{{item.activity_title}}</span>
                <div class="activity-management-swipe-desc">{{item.activity_content}}</div>
                <div class="activity-management-swipe-date">地点：{{item.activity_place}}</div>
                <div class="activity-management-swipe-date">时间：{{item.activity_date.split('-')[1]}}</div>
                <div class="activity-management-swipe-date">日期：{{item.activity_date.split('-')[0]}}</div>
              </div>
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
              </template>
            </van-swipe-cell>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTop from '../../../../../../components/TitleTop/index'
export default {
  data () {
    return {
      dataList: [],
      name: ''
    }
  },
  mounted () {
    this.getList()
  },
  components: {
    TitleTop
  },
  methods: {
    getList () {
      this.$axios.post('api/user/searchUserActivity', {
        userId: localStorage.getItem('id')
      })
        .then(res => {
          console.log(res)
          this.dataList = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    beforeClose ({ position, instance, name }) {
      console.log(position)
      console.log(instance)
      console.log(name)
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
            this.$axios.post('api/user/delUserActivity', {
              id: name
            })
              .then(res => {
                console.log(res)
                this.$toast.success('删除成功')
                this.getList()
              })
              .catch(err => {
                console.log(err)
                this.$toast.fail('删除失败')
              })
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
.delete-button {
  height: 100%;
}
.activity-management-main{
  padding: 20px 14px;
  width: calc(100vw - 28px);
}
.activity-management-title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: rgb(240, 160, 11);
}
.activity-management-title::after{
  content: '';
  display: block;
  width: 120px;
  height: 2px;
  background-color: rgb(240, 160, 11);
}
.activity-management-list {
  width: 101%;
}
.activity-management-li{
  width: 100%;
  margin-top: 10px;
}
.activity-management-swipe{
  display: block;
  overflow: hidden;
  // width: calc(100vw - 55px);
  // margin-left: 1px;
  // height: 100px;
  word-break : break-all;
  white-space: normal;
  // font-size: 14px;
  margin: 4px 2px 10px 2px ;
  padding: 2px 8px;
  // border: rgba(240, 160, 11, 0.404) 1px solid;
  box-shadow: 0 0 10px 0 rgba(240, 160, 11, 0.404); /*no*/
  color: rgb(150, 150, 150);
}
.activity-management-swipe-title{
  // width: 100%;
  height: 20px;
  line-height: 20px;
  // background-color: #eee;
  font-size: 14px;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.activity-management-swipe-desc{
  // background-color: pink;
  width: 100%;
  line-height: 16px;
  // height: 50px;
  font-size: 12px;
  margin-top: 2px;
}
.activity-management-swipe-date{
  // background-color: #eee;
  width: 100%;
  // height: 50px;
  line-height: 16px;
  font-size: 12px;
  margin-top: 2px;
  text-align: end;
}
</style>
