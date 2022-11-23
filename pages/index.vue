<template>
  <main class="page__home">

    <section class="hhero__container dark responsive-padding">
      <div class="hhero section__content">
          <h1 class="hhero__title mb-3"> Hi, I'm Aidan :)</h1>
          <div class="hhero__text mb-5">
            <p>I'm a Motion, Graphic and Web designer from <b class="ire">Ire</b><b class="la">la</b><b class="nd">nd</b> who focuses on <b>Stream Design</b>. Check out my work and see why you should book with me!</p>
          </div>

          <div class="hhero__text mb-5">
            <nuxt-link to="/" class="button primary">Portfolio</nuxt-link>
            <nuxt-link to="/" class="button secondary">Commission Info</nuxt-link>
          </div>
          
      </div>
    </section>

    <section class="home-section responsive-padding home-section--light light">
        <div class="container">
          <div class="home__row flex--row-reverse">
            <div class="home__col home__col-2 flex flex--align-v-center">
              <div class="embed__container"><iframe src="https://www.youtube-nocookie.com/embed/5ikqcWz7j-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="embed"></iframe></div>
            </div>
            <div class="home__col home__col-2 flex flex--align-v-center">

            </div>
          </div>
        </div>
    </section>

  </main>
</template>


<!--<h1>Index Page</h1>
    <div class="blogs">
      <nuxt-link :to="`/blog/`">
            <h2>Blog Page</h2>
      </nuxt-link>
      <h2>{{route}}</h2>
    </div>-->



<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
//import mixitup from 'mixitup';

/*export default {
  
  mounted () {
      this.$nextTick(() => {
      const containerEl = document.querySelector('.container');
      this.mixer = new this.mixitup(containerEl, {
      // Options
        animation: {
        //Some options ...
        clampHeight: false // Use this if use flexbox or css grid to get a smooth filter or sort transition
        }
      });
      })
    },


  /* --- Constant Data --- */

  /*head() {
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
    },

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
    }

}*/
</script>
