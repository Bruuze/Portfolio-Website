<template>
  <div>
    <h1>Work Posts</h1>
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
export default {

  /*head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: 'og:description',name: 'og:description', content: "Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!"},
          {hid: 'keywords', name: 'keywords', content: 'stream, design, twitch, graphics, youtube, panels, package, scenes, screens, offline, offline image, banner, content, creation, influncer, facebook, streaming, quality, designer, code, website, motion, animation, animated, aidan, murphy, VBI, Nerd, or, die, Nerdordie, visuals, by, impulse, youtuber, irish, ireland, english'},

          {hid: 'twitter:title', name: 'twitter:title', content: 'Aidan Murphy - Work - Designs for Streamers'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'Aidan Murphy - Work - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          {hid: 'twitter:image:alt' , name: 'twitter:image:alt', content: 'Aidan Murphy Portflio: Designs for Streamers & Content Creators'},
          {hid: 'twitter:site', name: 'twitter:site', content: this.twitterUsername},
          {hid: 'twitter:creator', name: 'twitter:creator', content: this.twitterUsername},

          // Facebook OpenGraph
          {hid: 'og:title', name: 'og:title', content: "Aidan Murphy - Work - Designs for Streamers"},
          {hid: 'og:site_name', property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {hid: 'og:type', property: 'og:type', content: 'website'},
          {hid: 'og:image', property: 'og:image', content: this.pageImg},
          {hid: 'og:description', property: 'og:description', content: 'Aidan Murphy - Web, Motion & Graphic Design all in one place, made for Streamers!'},
          {hid: 'og:url', property: "og:url", content: this.rootPath + this.route }
        ]
      }
    },

  data() {
      return {
        mixer: null,
        title: 'Aidan Murphy - Work - Designs for Streamers',
        description: 'All-in-one Online Video and Broadcast Design Specialist - Web, Motion & Graphic Design all in one place - Twitch, Youtube & Facebook - Made for Streamers & Content Creators!',
        pageImg: '/blog.png',
        rootPath: 'https://aidan-murphy.ie',
        route: this.$nuxt.$route.path,
        twitterUsername: '@AidanMurphy___'
      }
    }*/

}
</script>
