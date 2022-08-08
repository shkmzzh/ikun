<template>
  <div>
    <!-- 占位符 -->
    <router-view></router-view>
    <van-tabbar route>
  <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/about" icon="user-o">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
