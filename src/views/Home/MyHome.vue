<template>
  <div class="home-container">
    <van-nav-bar title="🐔 鸡音盒 🏀" fixed />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <div class="main">
      <router-link to="/home"><span class="list" @click="select(1)" :class="index==1? 'active':''">坤坤爱鸡叫</span></router-link>
      <router-link to="/home/tab2"><span class="list" @click="select(2)" :class="index==2? 'active':''">坤坤爱唱歌</span></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      index: 1
    }
  },
  methods: {
    select(i) {
      this.index = i
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  margin-top: 46px;
  color: transparent;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item:nth-child(1) {
  background: url('../../assets/1.png') no-repeat;
  background-size: 100% 100%;
}
.my-swipe .van-swipe-item:nth-child(2) {
  background: url('../../assets/2.png') no-repeat;
  background-size: 100% 100%;
}
.my-swipe .van-swipe-item:nth-child(3) {
  background: url('../../assets/3.png') no-repeat;
  background-size: 100% 100%;
}
.home-container .main {
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
}
.list {
  display: inline-block;
  text-align: center;
  line-height: 45px;
  width: 50%;
  height: 45px;
  color: #111;
  font-weight: bold;
}
.active {
  background-color: #111111;
  color: #fff;
}
</style>
