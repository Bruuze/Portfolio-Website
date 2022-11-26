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
        <div v-for="(preview,i) in page.interactivePreview">
          <h3>{{preview.name}}</h3>
          <p>{{preview.video}}</p>
          <i>{{preview.tag}}</i>
          <button @click="showVideo(i)">Show {{preview.name}}</button>
          <LazyVideoJS :url="'https://marvelous-hotteok-361980.netlify.app/' + preview.video" v-if="show == i"/>
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
      show: 0
    }
  },
  methods: {
    showVideo(id){
      this.show = id
    }
  }
}
</script>