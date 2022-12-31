<template>
  <div class="FireWorks">
    <div class="FireWorks-Canvas" ref="container">

    </div>
    <div class="FireWorks-Text">
      <div class="FireWorks-Text-Title">
        <div class="FireWorks-Text-Title-Text">
          <span>新年快乐</span>
        </div>
      </div>
      <div class="FireWorks-Text-Subtitle">
        <div class="FireWorks-Text-Subtitle-Text">
          <span>万事如意</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FireWorks"
}
</script>

<script setup>
import { Fireworks } from 'fireworks-js'
import { onMounted, ref } from 'vue'

const container = ref()

onMounted(() => {

  const fireworks = new Fireworks(container.value, {
    maxRockets: 3,
    rocketSpawnInterval: 150,
    numParticles: 100,
    explosionMinHeight: 0.2,
    explosionMaxHeight: 0.9,
    explosionChance: 0.08
  })

  fireworks.start()

})

</script>

<style lang="scss" scoped>
.FireWorks {
position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .FireWorks-Canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .FireWorks-Text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .FireWorks-Text-Title {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .FireWorks-Text-Title-Text {
        position: relative;
        font-size: 10rem;
        font-weight: 700;
        color: #ccc;
        span {
          position: relative;
          display: inline-block;
          transform: translate3d(0, 0, 0);
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #cccccc01;
            transform: translate3d(0, 0, 0);
            transition: transform 0.5s ease;
          }
          &:hover {
            &:before {
              transform: translate3d(0, -100%, 0);
            }
          }
        }
      }
    }
    .FireWorks-Text-Subtitle {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .FireWorks-Text-Subtitle-Text {
        position: relative;
        font-size: 10rem;
        font-weight: 700;
        color: #fff;
        span {
          position: relative;
          display: inline-block;
          transform: translate3d(0, 0, 0);
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #cccccc01;
            transform: translate3d(0, 0, 0);
            transition: transform 0.5s ease;
          }
          &:hover {
            &:before {
              transform: translate3d(0, -100%, 0);
            }
          }
        }
      }
    }
  }

  text-align: center;

  background-color: #212121;
}
</style>