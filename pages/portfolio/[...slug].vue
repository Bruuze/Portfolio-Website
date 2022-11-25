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
          <p>{{preview.video}}</p>
          <i>{{preview.tag}}</i>
          <LazyVideoJS :url="'https://marvelous-hotteok-361980.netlify.app/' + preview.video" v-if="show"/>
        </div>
        <button @click="showVideo()">Show Video</button>
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