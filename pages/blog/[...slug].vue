<script setup>
const { page } = useContent()
const pageBody = useNuxtApp().$mdit.render(page.value.body)
</script>
<template>

  <section class="home-section responsive-padding home-section--light light">
      <div class="containerPost">
        <TopNavBlog/>
        <div oncontextmenu="return false;" v-html="pageBody"></div>
        <LatestBlogs />
        <SocialForm />
      </div>
  </section>
</template>