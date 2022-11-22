<script setup>
const { page } = useContent()
const pageBody = useNuxtApp().$mdit.render(page.value.body)
</script>
<template>

  <section class="home-section responsive-padding home-section--light light">
      <div class="containerPost">
        <TopNavBlog/>
        <div v-html="pageBody"></div>
        <LatestBlogs />
        <Form />
      </div>
  </section>
</template>