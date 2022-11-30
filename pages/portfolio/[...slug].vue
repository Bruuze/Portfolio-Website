<script setup>

const { page } = useContent()
const pageBody = useNuxtApp().$mdit.render(page.value.body)
const interactivePreview = page.value.interactivePreview
useHead({
  title: page.value.title,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>

<template>
  <section class="home-section responsive-padding home-section--light light">
      <div class="containerPost">
        <TopNavWork/>
        <div oncontextmenu="return false;" v-html="pageBody"></div>
        <button @click="showLinks('graphics')">Graphics</button> <button @click="showLinks('alerts')">Alerts</button>
        <ul>
          <li v-for="(preview,i) in interactivePreview" :class="['Button_'+preview.tag, {dontShow: preview.tag != 'graphics' }]">
            <button @click="showVideo(i)">{{preview.name}}</button>
          </li>
        </ul>
        <div v-for="(preview,i) in interactivePreview">
          <LazyVideoJS :url="'http://localhost:3000/' + preview.video" v-if="show == i && activated"/>
        </div>
        <LatestWork />
        <SocialForm />
      </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      show: 0,
      activated: false,
    }
  },
  methods: {
    showVideo(id){
      this.show = id
      this.activated = true
    },
    showLinks(id){
      if(id == "graphics"){
        $(".Button_alerts").addClass( "dontShow" )
        $(".Button_graphics").removeClass( "dontShow" )
        //$(".vjs-loading-spinner").addClass( ".vjs-custom-waiting" )
      } else{
        $(".Button_graphics").addClass( "dontShow" )
        $(".Button_alerts").removeClass( "dontShow" )
        //$(".vjs-loading-spinner").addClass( ".vjs-custom-waiting" )
      }
    }
  }
}
</script>

<style>
.dontShow{
  display: none !important;
}

.vjs-custom-waiting .vjs-loading-spinner
{
    display: block;
    visibility: visible;
}
.video-js.vjs-custom-waiting .vjs-loading-spinner:before,
.video-js.vjs-custom-waiting .vjs-loading-spinner:after
{
    /* I just copied the same animation as in the default css file */
    -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;
    animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;
}
</style>