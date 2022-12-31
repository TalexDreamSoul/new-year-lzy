<template>
  <div class="MainView-Container">
    <div class="title">Happy New Year</div>

    <div class="MainView-Timer">
      <div>
        {{ time.hours.tweened.toFixed(0) }} 时
      </div>
        <div>
            {{ time.minutes.tweened.toFixed(0) }} 分
        </div>
        <div>
            {{ time.seconds.tweened.toFixed(0) }} 秒
        </div>
    </div>

    <p class="slogan">万物更新，旧疾当愈，长安常安</p>

    <span>To 罗紫月小姐!</span>
  </div>
</template>

<script>
export default {
  name: "MainView"
}
</script>

<script setup>
import gsap from 'gsap'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

const time = reactive({
    hours: genGsapNumber(),
    minutes: genGsapNumber(),
    seconds: genGsapNumber()
})

const router = useRouter()

function genGsapNumber(number = 0, duration = .5) {
  const obj = reactive({
    number,
    tweened: 0
  })
  watch(() => obj.number, () => {
    gsap.to(
        obj,
        {
          duration,
          tweened: Number(obj.number) || 0
        }
    )
  })
  return obj
}

const timer = setInterval(() => {

  // 新年倒计时
  const newYear = new Date('2023-01-01 00:00:00')
  const now = new Date()
  const diff = newYear.getTime() - now.getTime()
  const totalSeconds = diff / 1000

  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

    time.hours.number = hours
    time.minutes.number = minutes
    time.seconds.number = seconds

  if( totalSeconds <= 0 )
    // console.log('1')
    // else
      router.push('/fireworks')

}, 1000)
</script>

<style lang="scss" scoped>
.MainView-Container {
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;

  background-color: #212121;
}

.title {
  margin: -1em 0 1em 0;
  color: #eee;

  font-size: 40px;
  font-weight: 600;
}

.slogan {

  margin-top: 2em;

  color: #ddd;

    font-size: 16px;

}

span {
  position: absolute;

  color: #fff;

  opacity: .25;
  bottom: 5%;
}

.MainView-Timer {

  display: flex;
  justify-content: space-around;
  padding: 5px;

  div {
    border: 1px solid #ccc;
    margin: 5px;
    padding: 0 5px;

    color: #eee;

    height: 36px;
    width: 64px;
    line-height: 36px;
    text-align: center;

    opacity: .8;
    font-size: 25px;

  }

  width: 240px;

  border: 1px solid #ccc;
}
</style>