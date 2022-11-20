<script setup lang="ts">
const { page, next, prev } = useContent()
</script>
<template>

  <section class="home-section responsive-padding home-section--light light">
      <div class="containerPost">
            <ul>
              <LatestBlogs/>
            </ul>
            <NuxtLink v-if="prev && prev._path.includes('/blog')" :to="prev._path">{{ prev.title }}</NuxtLink>
            <NuxtLink v-if="next && next._path.includes('/blog')" :to="next._path">{{ next.title }}</NuxtLink>
      </div>
  </section>
</template>

<script lang="ts">
</script>