<template>

  <section class="home-section responsive-padding home-section--light light">
      <div class="containerPost">
        <div>
          <!--<h2>{{ post.title }}</h2>
          <img class="headerImage" :src="post.thumbnail">
          <div v-html="$md.render(post.body)"></div>-->
        </div>
      </div>
  </section>
</template>

<!--<script>
let post;
/*import Vue from 'vue';
Vue.use(require('vue-moment'));
import moment from 'moment';*/

export default {
    transition: 'bounce',

    /*data: () => ({
      moment: moment
   }),*/

   components: {},

   async asyncData({ $content, params, error }) {
    try {
      post = await $content("work", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Work Post not found" });
    }

    return {
      post
    };
   },

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
</script>-->