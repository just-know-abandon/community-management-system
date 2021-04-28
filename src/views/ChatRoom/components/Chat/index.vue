<template>
  <div class="chat-container">
    <!-- <ShareTitle>
      <span slot="left"></span>
      <span slot="mid">
        聊天室
      </span>
      <span slot="ze">
      </span>
    </ShareTitle> -->
    <!-- <i class="iconfont icon-shouye chat-top-i"></i> -->
    <div class="chat-top">
      <span class="chat-top-title">
        聊天室
        <!-- <span class="chat-top-online">(在线:10)</span> -->
      </span>
    </div>
    <div class="chat-main">
      <ul class="chat-ul">
      </ul>
    </div>
    <div class="chat-bottom">
      <van-field
        class="chat-bottom-field"
        v-model="message"
        rows="1"
        type="textarea"
        placeholder="请输入留言"
      />
      <div class="chat-bottom-btn">
        <van-button type="primary" @click="send">发送</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// import ShareTitle from '../../../Share/components/ShareTitle/index'
export default {
  name: 'Chat',
  data () {
    return {
      message: '',
      newMseeage: '',
      chatName: '神秘人',
      newInfo: ''
    }
  },
  methods: {
    send () {
      console.log(1)
      console.log(this.message)
      this.$socket.emit('chat', this.message)
      this.$socket.emit('info', localStorage.getItem('nickname'))
    }
  },
  watch: {
    newMseeage (newM, oldM) {
      console.log(newM)
      // console.log(oldM)
      setTimeout(() => {
        const li = document.createElement('li')
        li.style = `color: #000;
                    font-size: 16px;
                    border: 1px #000 solid;
                    border-radius: 6px;
                    padding: 10px;
                    line-height: 20px;
                    margin: 10px auto;
                    width: 90%;
                    overflow: hidden;
                    word-break: break-all;`
        li.innerHTML = this.newInfo + `: ${newM}`
        document.querySelector('.chat-ul').appendChild(li)
        li.scrollIntoView()
        this.message = ''
      }, 100)
    },
    'this.$router' () {
      this.$socket.onclose()
    }
  },
  created () {
    // this.$socket.open()
  },
  mounted () {
    // this.$socket.connect()
    this.sockets.subscribe('chatMessage', data => {
      console.log(data)
      this.newMseeage = data
    })
    this.sockets.subscribe('infoMessage', data => {
      console.log(data + '123123')
      this.newInfo = data
    })
    this.sockets.subscribe('num', data => {
      console.log(data + 'num')
    })
  },
  sockets: {
    disconnect () {
      console.log('Socket 断开')
    },
    connect_failed () {
      console.log('连接失败')
    },
    connect () {
      console.log('连接成功')
      // console.log(123)
      this.$socket.emit('username', localStorage.getItem('nickname'))
      // this.sockets.subscribe('message', data => {
      //   console.log(data)
      // })
      this.sockets.subscribe('coming', data => {
        console.log(data)
      })
    },
    chatMessage (data) {
      console.log(data)
    },
    infoMessage (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.chat-container{
  width: 100%;
  // background-color: pink;
  height: 100%;
}
.chat-top{
  height: 50px; /*no*/
  width: 100%;
  // background-color: rgb(20, 184, 135);
  // line-height: 50px;
  // text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(150, 150, 150, 0.404); /*no*/
}
// .chat-top-i{
//   font-size: 24px;
// }
.chat-top-title{
  font-size: 18px; /*no*/
  color: rgb(240, 160, 11);
}
.chat-top-online{
  position: absolute;
  bottom: 4px; /*no*/
  right: 8px; /*no*/
  font-size: 14px; /*no*/
  color: black;
}
.chat-main{
  width: 100%;
  height: calc(100vh - 226px); /*no*/
  // background-color: skyblue;
}
.chat-bottom{
  height: 86px; /*no*/
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(150, 150, 150, 0.404); /*no*/
  // background-color: rgb(106, 144, 156);
  display: flex;
}
.chat-bottom-field {
  padding: 10px 16px; /*no*/
}
.van-field__control{
  display: block;
  height: 24px !important; /*no*/
  padding: 0 !important;
  margin: 0 !important;
}
.chat-bottom-field /deep/ .van-field__value {
  background-color: #fff !important;
  border: 1px solid #eee; /*no*/
  overflow: hidden;
  padding: 2px; /*no*/
  font-size: 14px; /*no*/
  touch-action: none;
}
.chat-bottom-btn{
  width: 140px; /*no*/
  // border-left: 1px solid #eee; /*no*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-button{
  width: 80px; /*no*/
  height: 44px; /*no*/
  border-radius: 16px; /*no*/
  font-size: 16px; /*no*/
}
.chat-ul{
  // background-color: pink;
  height: 100%;
  overflow: auto;
  width: 100%;
}
// .chat-li{
//   color: #000;
//   font-size: 16px;
//   border: 1px #000 solid;
//   border-radius: 6px;
//   padding: 10px;
//   line-height: 20px;
//   margin: 10px auto;
//   width: 320px;
//   overflow: hidden;
//   word-break: break-all;
// }
</style>
