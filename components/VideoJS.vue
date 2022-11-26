<template>
    <video-player
    id="CustomVideoPlayer"
    class="video-player vjs-theme-forest"
    crossorigin="anonymous"
    playsinline
    controls
    :src = "url"
    :height="320"
    :volume="0.4"
    :children="[
      // custom Video.js children component
      // https://videojs.com/guides/options/#children
      'mediaLoader',
      'posterImage',
      'bigPlayButton',
      'loadingSpinner',
      'controlBar',
      'textTrackDisplay'
    ]"
    :control-bar="{
      // custom Video.js control bar component
      // https://videojs.com/guides/options/#componentname
      volumePanel: false
    }"
    />
  </template>

  <script lang="ts">
    import { defineComponent, shallowRef } from 'vue'
    import { VideoJsPlayer } from 'video.js'
    import { VideoPlayer } from '@videojs-player/vue'
    import 'video.js/dist/video-js.css'
    import '@videojs/themes/dist/city/index.css'
    export default defineComponent({
      name: 'vue-basic-player-example',
      title: 'Basic player (Vue)',
      url: import.meta.url,
      components: {
        VideoPlayer
      },
      setup() {
        const player = shallowRef<VideoJsPlayer>()
        const handleMounted = (payload: any) => {
          player.value = payload.player
          //console.log('Basic player mounted', payload)
        }
        const handleEvent = (log: any) => {
          //console.log('Basic player event', log)
        }
        return { player, handleMounted, handleEvent }
      },
      props: ['url']
    })
  </script>