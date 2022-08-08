<template>
  <div class="tab1-container">
    <ul>
      <li @click="playOne($event)">鸡仔很忙</li>
      <li @click="playTwo($event)">哪里都是鸡</li>
      <li @click="playThree($event)">仙剑鸡侠传</li>
      <li @click="playFour($event)">哈密</li>
      <li @click="playFive($event)">STAY</li>
      <li @click="playSix($event)">心动鸡</li>
    </ul>
    <div class="stop" @click="stopAudio($event)">Stop</div>
  </div>
</template>

<script>
import one from '@/audio/jzhm.mp3'
import two from '@/audio/nldsj.mp3'
import three from '@/audio/xjqxz.mp3'
import four from '@/audio/hm.mp3'
import five from '@/audio/dyj.mp3'
import six from '@/audio/xdj.mp3'
let audio1 = null
let audio2 = null
let audio3 = null
let audio4 = null
let audio5 = null
let audio6 = null
export default {
  name: 'MyTab1',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    playOne(e) {
      audio1 = new Audio()
      audio1.src = one
      audio1.play()
      console.log(e.target)
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    playTwo(e) {
      audio2 = new Audio()
      audio2.src = two
      audio2.play()
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    playThree(e) {
      audio3 = new Audio()
      audio3.src = three
      audio3.play()
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    playFour(e) {
      audio4 = new Audio()
      audio4.src = four
      audio4.play()
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    playFive(e) {
      audio5 = new Audio()
      audio5.src = five
      audio5.play()
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    playSix(e) {
      audio6 = new Audio()
      audio6.src = six
      audio6.play()
      e.target.classList.add('playing')
      setTimeout(function() {
        e.target.classList.remove('playing')
      }, 200)
    },
    stopAudio(e) {
      e.target.classList.add('stoping')
      setTimeout(function() {
        e.target.classList.remove('stoping')
      }, 200)
      audio1.pause()
      audio2.pause()
      audio3.pause()
      audio4.pause()
      audio5.pause()
      audio6.pause()
    }
  }
}
</script>

<style lang="less" scoped>
.tab1-container {
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  min-height: 650px;
  max-height: 900px;
  margin: 0 auto;
  background-color: #3e3e3e;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
.tab1-container ul li {
  background: #111111;
  box-shadow: 0 4px 15px 0 #96979975;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 65px;
  margin-top: 14px;
  height: 65px;
  text-align: center;
  border: 0;
  background-size: 300% 100%;
  border-radius: 50px;
}
.tab1-container .playing {
  transform: scale(1.1);
  color: #255784;
  background: #23E625;
  box-shadow: 0 0 10px #23E625, 0 0 40px #23E625, 0 0 80px #23E625;
}
.stop {
  background: #111111;
  box-shadow: 0 4px 15px 0 #96979975;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 50px;
  min-width: 360px;
  max-width: 400px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
.tab1-container .stoping {
  color: #c41575;
  background: #fe21b8;
  box-shadow: 0 0 10px #fe21b8, 0 0 40px #fe21b8, 0 0 80px #fe21b8;
}
</style>
