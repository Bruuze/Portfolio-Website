<template>
  <div>
      <h1><a target="_blank" href="https://www.kunkalabs.com/mixitup/">MixItUp-3 sorting</a> & <a target="_blank" href="http://fancyapps.com/fancybox/3/">FancyBox-3 Lightbox</a></h1>

  <nav class="controls ">
    <button type="button " class="control " data-filter="all">All</button>
    <button type="button " class="control " data-filter=".logo ">Logo</button>
    <button type="button " class="control " data-filter=".blue ">Blue</button>
    <button type="button " class="control " data-filter=".tink ">Pink</button>
    <button type="button " class="control " data-filter="none ">None</button>
  </nav>

  <br>


    <!--<li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>-->



  <ul class="container ">

    <li v-for="post of posts" :key="post.slug" class="mix" :class="post.type">
      <a v-if="post.video == ''" :title="post.title" :href="post.imgLarge" itemprop="contentUrl " data-size="1200x600 ">
        <img :src="post.imgSmall" itemprop="thumbnail " alt="Image description " />
      </a>

      <a v-else :title="post.title" :href="post.video" itemprop="contentUrl " data-size="1200x600 ">
        <img :src="post.imgSmall" itemprop="thumbnail " alt="Image description " />
      </a>
    </li>
      
    <!--<li class="mix green ">
      <a title="click to zoom-in " href="http://placehold.it/1200x600/3fb03f/ffffff?text=Green - Zoom-image-1 " itemprop="contentUrl " data-size="1200x600 ">
        <img src="http://placehold.it/300x150/3fb03f/ffffff?text=GREEN - Thumbnail-image-1 " itemprop="thumbnail " alt="Image description " />
      </a>
    </li>
    <li class="mix blue ">
      <a title="click to zoom-in " href="http://placehold.it/1200x600/006cd0/ffffff?text=BLUE - Zoom-image-1 " itemprop="contentUrl " data-size="1200x600 ">
        <img src="http://placehold.it/300x150/006cd0/ffffff?text=BLUE - Thumbnail-image-1 " itemprop="thumbnail " alt="Image description " />
      </a>
    </li>
    <li class="mix blue ">
      <a title="click to zoom-in " href="http://placehold.it/1200x600/006cd0/ffffff?text=BLUE - Zoom-image-2 " itemprop="contentUrl " data-size="1200x600 ">
        <img src="http://placehold.it/300x150/006cd0/ffffff?text=BLUE - Thumbnail-image-2 " itemprop="thumbnail " alt="Image description " />
      </a>
    </li>
    <li class="mix tink ">

      <a title="click to zoom-in " href="http://placehold.it/1200x600/c57a87/ffffff?text=PINK - Zoom-image-1 " itemprop="contentUrl " data-size="1920x1080 ">
        <img src="http://placehold.it/300x150/c57a87/ffffff?text=PINK - Thumbnail-image-1 " itemprop="thumbnail " alt="Image description " />
      </a>

    </li>
    <li class="mix green ">

      <a title="click to zoom-in " href="http://placehold.it/1200x600/3fb03f/ffffff?text=Green - Zoom-image-2 " itemprop="contentUrl " data-size="1200x600 ">
        <img src="http://placehold.it/300x150/3fb03f/ffffff?text=GREEN - Thumbnail-image-2 " itemprop="thumbnail " alt="Image description " />
      </a>
    </li>-->

  </ul>

  </div>
</template>

<style scoped>
body{  
  max-width: 1180px;
  margin: 0px auto;
  padding: 5px;
}
.mixitup-control-active{
  color: white;
  background: black;
}

.mix{
  margin: 5px; 
}

ul.container {
  list-style-type: none;
  margin: 0px;
}

li{
  display:inline-block;
}
</style>

<script>
export default {
transition: 'bounce',

async asyncData({ $content }) {
    const posts = await $content("onscreen").fetch();

    return {
      posts,
    };
  },
 
  data() {
      return {
        mixer: null
      }
    },
    mounted () {
      this.$nextTick(() => {
      var containerEl = document.querySelector("ul.container");
        // 2. Passing the configuration object inline
        //https://www.kunkalabs.com/mixitup/docs/configuration-object/
        var mixer = mixitup(containerEl, {
            animation: {
                effectsIn: 'fade translateZ(1000px)',
                effectsOut: 'fade translateZ(-1000px)',
                nudge: false,
                easing: "cubic-bezier(0.84, 0.00, 0.16, 1.00)",
                duration: 700,
            }
        });

        // fancybox insilaze & options //
        $("[data-fancybox]").fancybox({
        /* "TRICK" selector - group only visible items */
        selector : '.mix:visible a',
        toolbar: false,
        loop: true,
        hash: true,
        transitionEffect: "slide",
        protect: true,
        /* zoom VS next////////////////////
        clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
        clickContent: function(current, event) {
            return current.type === "image" ? "next" : false;
        }
        });
      })
    },
 
}
</script>