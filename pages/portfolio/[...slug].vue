<script setup>

const { page } = useContent()
const pageBody = useNuxtApp().$mdit.render(page.value.body)

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
        <div v-for="preview in page.interactivePreview">
          <h3>{{preview.name}}</h3>
          <p>{{preview.videoURL}}</p>
          <i>{{preview.tag}}</i>
        </div>
        <button @click="showVideo()">Show Video</button>
        <LazyVideoJS url="http://localhost:3000/video/BeRightBack.mp4" v-if="show"/>
        <LatestWork />
        <SocialForm />
      </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      show: false
    }
  },
  methods: {
    showVideo(){
      this.show = true
    }
  }
}
</script>