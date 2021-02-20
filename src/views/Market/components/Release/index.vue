<template>
  <div class="release-container">
    <!-- <div class="release">
      <img class="release-img" src="../../../../assets/images/1.jpg" alt="">
      <span class="release-img-title">欢迎进入二手市场</span>
    </div> -->
    <TitleTop>
      <span slot="left"></span>
      <span slot="mid">
        二手市场
      </span>
      <span slot="rightgoods">+</span>
    </TitleTop>
    <div class="release">
      <van-dialog v-model="show" title="请遵守以下规则">
        <div class="rules">
          <ul>
            <li>1. 本平台仅提供闲置物品发布不作任何担保</li>
            <li>2. 如需管理人员见证交易，可联系工作人员</li>
            <li>3. 发布商品请前往个人中心</li>
            <li>4. 切勿发布虚假物品，虚假详情</li>
            <li>5. 如乱发布可能被封号</li>
          </ul>
        </div>
      </van-dialog>
      <van-tabs class="tabs" v-model="activeName" swipeable>
        <van-tab class="tab" v-for="item in goodsListTitle" :key="item.id" :name="item.name" :title="item.title">
          <!-- <div> -->
          <Goods :goodsType="item.type"></Goods>
          <!-- </div> -->
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Goods from '../Goods/index'
import TitleTop from '../../../../components/TitleTop/index'
export default {
  name: 'Release',
  components: {
    Goods,
    TitleTop
  },
  data () {
    return {
      show: false,
      activeName: '1',
      // mock: [
      //   {
      //     id: 1,
      //     name: '1',
      //     title: '家具',
      //     children: [
      //       {
      //         id: 101,
      //         type: 'a',
      //         goodsTitleValue: '柜桶',
      //         goodsDescValue: '三层柜桶',
      //         goodsQuantity: '1',
      //         goodsPrice: '50',
      //         goodsContact: 'fsfs411',
      //         goodsUploader: require('../../../../assets/images/scenery/01.jpg')
      //       },
      //       {
      //         id: 102,
      //         type: 'a',
      //         goodsTitleValue: '床头柜',
      //         goodsDescValue: '家具2家具2家具2家具2家具2家具2家具2家具2家具2家具2家具2家具2',
      //         goodsQuantity: '1',
      //         goodsPrice: '999',
      //         goodsContact: '151151515',
      //         goodsUploader: require('../../../../assets/images/scenery/02.jpg')
      //       },
      //       {
      //         id: 103,
      //         type: 'a',
      //         goodsTitleValue: '床垫',
      //         goodsDescValue: '1.8床垫',
      //         goodsQuantity: '1',
      //         goodsPrice: '100',
      //         goodsContact: 'qqq123',
      //         goodsUploader: require('../../../../assets/images/scenery/03.jpg')
      //       },
      //       {
      //         id: 104,
      //         type: 'a',
      //         goodsTitleValue: '书桌',
      //         goodsDescValue: '书桌啊',
      //         goodsQuantity: '1',
      //         goodsPrice: '100',
      //         goodsContact: 'rgfd444',
      //         goodsUploader: require('../../../../assets/images/scenery/04.jpg')
      //       },
      //       {
      //         id: 104,
      //         type: 'a',
      //         goodsTitleValue: '桌子',
      //         goodsDescValue: '刚买的桌子',
      //         goodsQuantity: '1',
      //         goodsPrice: '85',
      //         goodsContact: '18144572354',
      //         goodsUploader: require('../../../../assets/images/scenery/05.jpg')
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     name: '2',
      //     title: '服饰',
      //     children: [
      //       {
      //         id: 201,
      //         type: 'b',
      //         goodsTitleValue: '柜桶',
      //         goodsDescValue: '三层柜桶',
      //         goodsQuantity: '1',
      //         goodsPrice: '50',
      //         goodsContact: 'fsfs411',
      //         goodsUploader: require('../../../../assets/images/scenery/01.jpg')
      //       },
      //       {
      //         id: 202,
      //         type: 'b',
      //         goodsTitleValue: '士大夫',
      //         goodsDescValue: '士大夫沙发上的研究根据规范过好几个发发法国海军股份合计',
      //         goodsQuantity: '144',
      //         goodsPrice: '5055',
      //         goodsContact: '23112',
      //         goodsUploader: require('../../../../assets/images/scenery/01.jpg')
      //       }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     name: '3',
      //     title: '餐厨',
      //     children: [
      //       {
      //         id: 301,
      //         type: 'c',
      //         content: '餐厨1餐厨1餐厨1餐厨1餐厨1餐厨1'
      //       },
      //       {
      //         id: 302,
      //         type: 'c',
      //         content: '餐厨2餐厨2餐厨2餐厨2餐厨2餐厨2餐厨2餐厨2'
      //       },
      //       {
      //         id: 303,
      //         type: 'c',
      //         content: '餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3餐厨3'
      //       }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     name: '4',
      //     title: '电器',
      //     children: [
      //       {
      //         id: 401,
      //         type: 'd',
      //         content: '电器1电器1电器1电器1电器1电器1电器1电器1电器1电器1电器1'
      //       },
      //       {
      //         id: 402,
      //         type: 'd',
      //         content: '电器2电器2电器2电器2电器2'
      //       },
      //       {
      //         id: 403,
      //         type: 'd',
      //         content: '电器3电器3电器3电器3电器3电器3电器3电器3电器3'
      //       },
      //       {
      //         id: 404,
      //         type: 'd',
      //         content: '电器4电器4电器4电器4电器4电器4电器4电器4电器4电器4电器4电器4电器4'
      //       },
      //       {
      //         id: 405,
      //         type: 'd',
      //         content: '电器5电器5电器5'
      //       },
      //       {
      //         id: 406,
      //         type: 'd',
      //         content: '电器6电器6电器6'
      //       },
      //       {
      //         id: 407,
      //         type: 'd',
      //         content: '电器7电器7电器7电器7电器7电器7'
      //       }
      //     ]
      //   },
      //   {
      //     id: 5,
      //     name: '5',
      //     title: '电子产品',
      //     children: [
      //       {
      //         id: 501,
      //         type: 'e',
      //         content: '电子产品1'
      //       },
      //       {
      //         id: 502,
      //         type: 'e',
      //         content: '电子产品2'
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     name: '6',
      //     title: '体育用品',
      //     children: [
      //       {
      //         id: 601,
      //         type: 'f',
      //         content: '体育用品1'
      //       },
      //       {
      //         id: 602,
      //         type: 'f',
      //         content: '体育用品2'
      //       }
      //     ]
      //   },
      //   {
      //     id: 7,
      //     name: '7',
      //     title: '特产',
      //     children: [
      //       {
      //         id: 701,
      //         type: 'g',
      //         content: '特产1'
      //       },
      //       {
      //         id: 702,
      //         type: 'g',
      //         content: '特产2'
      //       }
      //     ]
      //   },
      //   {
      //     id: 8,
      //     name: '8',
      //     title: '其他',
      //     children: [
      //       {
      //         id: 801,
      //         type: 'h',
      //         content: '其他1'
      //       },
      //       {
      //         id: 802,
      //         type: 'h',
      //         content: '其他2'
      //       }
      //     ]
      //   }
      // ]
      // goodsList: [],
      goodsListTitle: [
        {
          id: 1,
          name: '1',
          title: '家具',
          type: 'a'
        },
        {
          id: 2,
          name: '2',
          title: '服饰',
          type: 'b'
        },
        {
          id: 3,
          name: '3',
          title: '餐厨',
          type: 'c'
        },
        {
          id: 4,
          name: '4',
          title: '电器',
          type: 'd'
        },
        {
          id: 5,
          name: '5',
          title: '电子产品',
          type: 'e'
        },
        {
          id: 6,
          name: '6',
          title: '体育用品',
          type: 'f'
        },
        {
          id: 7,
          name: '7',
          title: '特产',
          type: 'g'
        },
        {
          id: 8,
          name: '8',
          title: '其他',
          type: 'h'
        }
      ]
    }
  },
  methods: {
    // getList (limitF, limitS) {
    //   this.$axios.post('http://localhost:3000/api/user/searchUserMarketGoods', {
    //     limitF,
    //     limitS
    //   })
    //     .then(res => {
    //       console.log(res.data.data)
    //       this.goodsList = res.data.data
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  created () {
    // this.getList()
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
  margin-top: 10px; /*no*/
}
.rules{
  font-size: 14px;
  padding: 24px; /*no*/
}
/* .release{
  position: relative;
  height: 100px;
} */
.release{
  width: calc(100vw - 28px); /*no*/
  padding: 6px 14px;/*no*/
}
.release-container{
  width: 100%;
}
/* .release-img{
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
} */
</style>
