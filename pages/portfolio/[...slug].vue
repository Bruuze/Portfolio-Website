<script setup lang="ts">
const { page, next, prev } = useContent()
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
        <div>
          <ContentRenderer :key="page._slug" :value="page" />
          <p>{{page.description}}</p>
          <div v-html="pageBody"></div>
          <!--<ContentQuery :path="$route.path" v-slot="{ data }">
              <div v-for="post of data" :key="post.slug">
                <img class="headerImage" :src="post.thumbnail">

              </div>
          </ContentQuery>-->
          <NuxtLink v-if="prev && prev._path.includes('/portfolio')" :to="prev._path">{{ prev.title }}</NuxtLink>
          <NuxtLink v-if="next && next._path.includes('/portfolio')" :to="next._path">{{ next.title }}</NuxtLink>
        </div>
      </div>
  </section>
</template>

<script lang="ts">

export default {


  /*data() {
      return {
        //title: ' - Aidan Murphy - Designs for Streamers',
        title: post.title + ' - Aidan Murphy - Designs for Streamers',
        pageImg: '"' + post.social + '"',
        rootPath: 'https://aidan-murphy.ie',
        route: this.$nuxt.$route.path,
      }
    },
    head() {
      return {
        title:  this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content:  this.title},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {name: 'description', content: post.description},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content:  this.title},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + post.social},
          // Facebook OpenGraph
          {property: 'og:title', content:  this.title},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.rootPath + post.social},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }*/

};
</script>