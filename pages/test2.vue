<template>
  
</template>

<script>
export default{
  data() {
      return {
        mixer: null,
        title: 'Aidan Murphy - Designs for Streamers & Content Creators',
        description: 'All-in-one Online Video and Broadcast Design Specialist - Web, Motion & Graphic Design all in one place - Twitch, Youtube & Facebook - Made for Streamers & Content Creators!',
        pageImg: '/urlStaticImg/test.png',
        rootPath: 'https://aidan-murphy.ie',
        route: this.$nuxt.$route.path,
        twitterUsername: '@AidanMurphy___'
      }
    },

  head() {
      return {
        title: this.title,
        meta: [

          {hid: 'description', name:'description', content: this.description},
          {hid: 'keywords', name: 'keywords', content: 'stream, design, twitch, graphics, youtube, panels, package, scenes, screens, offline, offline image, banner, content, creation, influncer, facebook, streaming, quality, designer, code, website, motion, animation, animated, aidan, murphy, VBI, Nerd, or, die, Nerdordie, visuals, by, impulse, youtuber, irish, ireland, english'},

          {hid: 'twitter:title', name: 'twitter:title', content: this.title},
          {hid: 'twitter:description', name: 'twitter:description', content: this.description},
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
          {hid: 'twitter:image', name: 'twitter:image', content: this.rootPath + this.pageImg},
          {hid: 'twitter:image:alt' , name: 'twitter:image:alt', content: 'Aidan Murphy Portflio: Designs for Streamers & Content Creators'},
          {hid: 'twitter:site', name: 'twitter:site', content: this.twitterUsername},
          {hid: 'twitter:creator', name: 'twitter:creator', content: this.twitterUsername},


          // Facebook OpenGraph
          {hid: 'og:title', name: 'og:title', content: this.title},
          {hid: 'og:site_name', property: 'og:site_name', content: 'Aidan Murphy - Portfolio'},
          {hid: 'og:type', property: 'og:type', content: 'website'},
          {hid: 'og:image', property: 'og:image', content: this.rootPath + this.pageImg},
          {hid: 'og:description', property: 'og:description', content: this.description},
          {hid: 'og:url', property: "og:url", content: this.rootPath + this.route }
        ]
      }
    }
}
</script>