<template>
  <div class="di main-wrap">
    <!-- v-loading="audio.waiting" -->
    <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audio来访问该dom元素 -->
    <audio
      ref="audio"
      :src="url"
      class="dn"
      @play="onPlay"
      @error="onError"
      @waiting="onWaiting"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"/>
    <div style="width: 200px" class="control">
      <el-button
        :icon="audio.playing | transPlayPause"
        style=" height: 28px; line-height: 16px; font-size: 18px;"
        type="text"
        @click="startPlayOrPause"/>
      <el-button
        v-show="!controlList.noMuted"
        type="text"
        style="margin-left: 0; height: 28px; line-height: 16px"
        @click="startMutedOrNot">{{ audio.muted | transMutedOrNot }}</el-button>
      <el-slider
        v-show="!controlList.noProcess"
        ref="audioslider"
        v-model="sliderTime"
        :format-tooltip="formatProcessToolTip"
        style="display: inline-block;"
        class="slider"
        @change="changeCurrentTime"
        @mouseup="handleMouseUp"
        @mousedown="handleMouseDown"/>
      <div>{{ audio.currentTime | formatSecond }}/{{ audio.maxTime | formatSecond }}</div>
    </div>
  </div>
</template>

<script>
function realFormatSecond(second) {
  var secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)
    var mimute = Math.floor(second / 60)
    second = second - mimute * 60
    return mimute + ':' + second
  } else {
    return '00:00'
  }
}
export default {
  name: 'VueAudio',
  filters: {
    formatSecond(second = 0) {
      return realFormatSecond(second)
    },
    transPlayPause(value) {
      return value ? 'el-icon-video-pause' : 'el-icon-video-play'
    },
    transMutedOrNot(value) {
      return value ? '放音' : '静音'
    }
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      url: this.src || '',
      audio: {
        currentTime: 0,
        maxTime: 0,
        playing: false,
        isPlaying: false,
        muted: false,
        speed: 1,
        waiting: true,
        preload: false
      },
      sliderTime: 0,
      volume: 100,
      speeds: this.theSpeeds,
      controlList: {
        // 不显示静音
        noMuted: true,
        // 不显示音量条
        noVolume: false,
        // 不显示进度条
        noProcess: false,
        // 只能播放一个
        onlyOnePlaying: false
      }
    }
  },
  mounted() {
    this.$refs.audioslider.$refs.button1.$el.addEventListener('mousedown', this.handleMouseDown)
    this.$refs.audioslider.$refs.button1.$el.addEventListener('mouseup', this.handleMouseUp)
  },
  destroyed() {
    if (this.$refs.audioslider) {
      this.$refs.audioslider.$refs.button1.removeEventListener('mousedown', this.handleMouseDown)
      this.$refs.audioslider.$refs.button1.removeEventListener('mouseup', this.handleMouseUp)
    }
  },
  methods: {
    // 进度条toolTip
    formatProcessToolTip(index = 0) {
      index = parseInt(this.audio.maxTime / 100 * index)
      return realFormatSecond(index)
    },
    startMutedOrNot() {
      this.$refs.audio.muted = !this.$refs.audio.muted
      this.audio.muted = this.$refs.audio.muted
    },
    // 播放跳转
    changeCurrentTime(index) {
      this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
    },
    startPlayOrPause() {
      return this.audio.playing ? this.pausePlay() : this.startPlay()
    },
    // 开始播放
    startPlay() {
      this.$refs.audio.play()
    },
    // 暂停
    pausePlay() {
      this.$refs.audio.pause()
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false
    },
    // 当发生错误, 就出现loading状态
    onError() {
      this.audio.waiting = true
    },
    // 当音频开始等待
    onWaiting(res) {
      console.log(res)
    },
    // 当音频开始播放
    onPlay(res) {
      this.audio.playing = true
      this.audio.loading = false
      // 列表中音频资源很多的情况可以能影响性能
      let target = res.target
      let audios = document.getElementsByTagName('audio');
      [...audios].forEach((item) => {
        if (item !== target) {
          item.pause()
        }
      })
    },

    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      this.audio.currentTime = res.target.currentTime
      this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
    },

    // 当加载语音流元数据完成后，会触发该事件的回调函数，长度之类的数据
    onLoadedmetadata(res) {
      this.audio.waiting = false
      this.audio.maxTime = parseInt(res.target.duration)
    },
    handleMouseUp(val) {
      if (this.audio.isPlaying) this.startPlay()
    },
    handleMouseDown(val) {
      this.audio.isPlaying = false
      if (this.audio.playing) this.audio.isPlaying = true
      this.pausePlay()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-wrap {
    width: 100%;
    padding: 0;
    margin-left: 6px;
    line-height: 38px;
  }
  .slider {
    display: inline-block;
    width: 100px;
    /* position: relative; */
    /* top: 14px; */
    margin-left: 10px;
    margin-right: 10px;
  }
  .download {
    color: #409EFF;
    margin-left: 15px;
  }
  .dn{
    display: none;
  }
  .control {
    display: flex;
    flex-direction: row;
  }
</style>
