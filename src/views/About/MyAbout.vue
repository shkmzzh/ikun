<template>
  <div class="about-container">
    <br>
    <div class="picture"></div>
    <p class="app">鸡音盒<span>@1.0.0</span></p>
    <div class="main">
      <div class="author" @click="showAuthor()"><span>&nbsp;&nbsp; 联系作者</span>
      </div>
      <div class="share" @click="Share()"><span>&nbsp;&nbsp;分享给好友</span></div>
    </div>
    <div class="fonter">
      <p>音乐播放速度和您的网速有关</p>
      <h5>声明:作者是真爱粉,仅提供技术支持</h5>
    </div>

    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'MyAbout',
  data() {
    return {
      show: false,
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' }
        ]
      ]
    }
  },
  methods: {
    showAuthor() {
      this.show = true
      Dialog.alert({
        title: 'QQ:2161626200',
        message: '披金成王，伴坤远航。狮子座为王，蔡徐坤为皇。'
      }).then(() => {
        // on close
      })
    },
    Share() {
      this.showShare = true
    }
  }
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  min-height: 890px;
  max-height: 900px;
  background-color: #353846;
  .picture {
    width: 170px;
    height: 170px;
    background: url(../../assets/cxk.jpg) no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: 0 auto;
  }
  .app {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    span {
      font-size: 16px;
      color: deepskyblue;
    }
  }
  .main {
    margin-top: 75px;
  }
  .author {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #fff;
    color: #fff;
    line-height: 66px;
  }
  .share {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #fff;
    color: #fff;
    line-height: 66px;
  }
  .fonter {
    position: fixed;
    bottom: 50px;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    height: 100px;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    p{
      font-size: 12px;
      margin: 0 auto;
      padding: 20px;
    }
    h5{
      margin: 0 auto;
    }
  }
}
</style>
