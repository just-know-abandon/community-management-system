<template>
  <div class="release-container">
    <div class="release">
      <img class="release-img" src="../../../../assets/images/1.jpg" alt="">
      <span class="release-img-title">欢迎进入二手市场</span>
    </div>
    <van-dialog v-model="show" title="请遵守以下规则">
      <div class="rules">
        <ul>
          <li>1. 本平台仅提供闲置物品发布不作任何担保</li>
          <li>2. 如需管理人员见证交易，可联系工作人员</li>
          <li>3. 切勿发布虚假物品，虚假详情</li>
          <li>4. 如乱发布可能被封号</li>
        </ul>
      </div>
    </van-dialog>
    <van-tabs class="tabs" v-model="activeName" sticky swipeable>
      <van-tab class="tab" v-for="(item, index) in mock" :key="index" :name="item.name" :title="item.title">
        <!-- <div> -->
          <!-- {{item}} -->
        <Goods :mock="item.children"></Goods>
        <!-- </div> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Goods from '../Goods/index'
export default {
  name: 'Release',
  components: {
    Goods
  },
  data () {
    return {
      show: false,
      activeName: '1',
      mock: [
        {
          id: 1,
          name: '1',
          title: '家具',
          children: [
            {
              id: 101,
              type: 'a',
              content: '家具1'
            },
            {
              id: 102,
              type: 'a',
              content: '家具2家具2家具2家具2家具2家具2'
            },
            {
              id: 103,
              type: 'a',
              content: '家具3家具3家具3家具3'
            },
            {
              id: 104,
              type: 'a',
              content: '家具4家具4家具4家具4家具4家具4家具4家具4'
            },
            {
              id: 105,
              type: 'a',
              content: '家具5家具5家具5家具5家具5家具5家具5家具5家具5家具5家具5家具5'
            }
          ]
        },
        {
          id: 2,
          name: '2',
          title: '衣服',
          children: [
            {
              id: 201,
              type: 'b',
              content: '衣服1'
            },
            {
              id: 202,
              type: 'b',
              content: '衣服2'
            }
          ]
        },
        {
          id: 3,
          name: '3',
          title: '餐具',
          children: [
            {
              id: 301,
              type: 'c',
              content: '餐具1餐具1餐具1餐具1餐具1餐具1'
            },
            {
              id: 302,
              type: 'c',
              content: '餐具2餐具2餐具2餐具2餐具2餐具2餐具2餐具2'
            },
            {
              id: 303,
              type: 'c',
              content: '餐具3餐具3餐具3餐具3餐具3餐具3餐具3餐具3餐具3餐具3餐具3'
            }
          ]
        },
        {
          id: 4,
          name: '4',
          title: '食材',
          children: [
            {
              id: 401,
              type: 'd',
              content: '食材1食材1食材1食材1食材1食材1食材1食材1食材1食材1食材1'
            },
            {
              id: 402,
              type: 'd',
              content: '食材2食材2食材2食材2食材2'
            },
            {
              id: 403,
              type: 'd',
              content: '食材3食材3食材3食材3食材3食材3食材3食材3食材3'
            },
            {
              id: 404,
              type: 'd',
              content: '食材4食材4食材4食材4食材4食材4食材4食材4食材4食材4食材4食材4食材4'
            },
            {
              id: 405,
              type: 'd',
              content: '食材5食材5食材5'
            },
            {
              id: 406,
              type: 'd',
              content: '食材6食材6食材6'
            },
            {
              id: 407,
              type: 'd',
              content: '食材7食材7食材7食材7食材7食材7'
            }
          ]
        },
        {
          id: 5,
          name: '5',
          title: '电子产品',
          children: [
            {
              id: 501,
              type: 'e',
              content: '电子产品1'
            },
            {
              id: 502,
              type: 'e',
              content: '电子产品2'
            }
          ]
        },
        {
          id: 6,
          name: '6',
          title: '玩具',
          children: [
            {
              id: 601,
              type: 'f',
              content: '玩具1'
            },
            {
              id: 602,
              type: 'f',
              content: '玩具2'
            }
          ]
        },
        {
          id: 7,
          name: '7',
          title: '厨具',
          children: [
            {
              id: 701,
              type: 'g',
              content: '厨具1'
            },
            {
              id: 702,
              type: 'g',
              content: '厨具2'
            }
          ]
        },
        {
          id: 8,
          name: '8',
          title: '衣服',
          children: [
            {
              id: 801,
              type: 'h',
              content: '衣服1'
            },
            {
              id: 802,
              type: 'h',
              content: '衣服2'
            }
          ]
        }
      ]
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.show = true
  }
}
</script>

<style>
.van-tabs__nav--line{
  margin-left: -14px !important;
}
.tabs{
  margin-top: 10px;
}
.rules{
  font-size: 14px;
  padding: 24px;
}
.release{
  position: relative;
  height: 100px;
}
.release-container{
  width: calc(100vw - 28px);
  height: 100px;
  padding: 6px 14px;
}
.release-img{
  width: 100%;
  height: 100px;
  border-radius: 20px;
  opacity: 0.5;
}
.release-img-title{
  position: absolute;
  color: rgb(240, 160, 11);
  width: 200px;
  height: 50px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -50px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  font-style: oblique;
}
</style>
