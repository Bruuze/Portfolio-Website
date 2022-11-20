<template>
  <div>
    <h1>Blog Posts</h1>
  <ContentQuery :path="$route.path" :where="{ _type: 'json' }" v-slot="{ data }">
      <ul>
        <li v-for="post of data" :key="post.slug">
          <img :src="post.thumbnail">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
  </ContentQuery>
  </div>
</template>

<script>
let ROOT_PATH = 'https://aidan-murphy.netlify.ie';
export default {
  transition: 'bounce',
  
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts
    };
  },

  /*data() {
      return {
        title: 'Aidan Murphy - Blog - Designs for Streamers',
        pageImg: '/blog.png',
        rootPath: 'https://aidan-murphy.ie',
        route: this.$nuxt.$route.path,
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:title',name: 'og:title', content: "Aidan Murphy - Blog - Designs for Streamers"},
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Blog - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {property: "og:url", content: this.rootPath + this.route },
          // image must be an absolute path
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Aidan Murphy - Blog - Designs for Streamers'},
          {property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content: this.pageImg},
          {property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'}
        ]
      }
    }*/

}
</script>
