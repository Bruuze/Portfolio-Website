<template>
  <div>
    <video ref="videoPlayer" class="video-js vjs-custom-waiting" src="https://marvelous-hotteok-361980.netlify.app/uploads/EndingNow.mp4"></video>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {autoplay:true, width: 550, loop:true};
      },
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
    this.player.on("progress",function(){
      console.log('hello')
    }).on("play",function(){
      // Ensure that bufferPause is reset
      console.log('hello Again')
      $(".video-js").removeClass( "vjs-custom-waiting" )
});
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>
