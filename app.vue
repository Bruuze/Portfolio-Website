<template>
  <NuxtLoadingIndicator color="#FF7CD7" :duration="20000"/>
  <div>
    <loading />
    <nav class="nav responsive-padding">
      <div class="nav__wrapper">
        <ul class="nav__ul sematic-only">
          <li class="nav__li nav__logo">
            <nuxt-link to="/"> <Logo /> </nuxt-link>
          </li>
          <li class="nav__li nav__li--desktop-only">
            <nuxt-link to="/portfolio/" class="nav__link-text" title="Portfolio"> Portfolio </nuxt-link>
          </li>
          <li class="nav__li nav__li--desktop-only">
            <nuxt-link to="/blog/" class="nav__link-text" title="Blog"> Blog </nuxt-link>
          </li>
        </ul>
        <ul class="nav__ul sematic-only">
          <li class="nav__li nav__li--mobile-only">
            <div class="bodymovinanim" unselectable="on"></div>
          </li>
        </ul>
      </div>

      <div class="nav__menu">

        <div class="nav__menu__top">

          <ul class="sematic-only">

            <li>
            <nuxt-link to="/portfolio/"> Portfolio </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/blog/"> Blog </nuxt-link>
          </li>

          </ul>

        </div>

      </div>
    </nav>

    <NuxtPage />

  </div>
</template>
  
<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.36s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .st0{fill:#FFFFFF;}
.router-link-active .st0{fill:#F75EC8;}
.st1{fill:#FFFFFF;}

.page-enter-active, .bounce-enter-active {
    animation: bounce-in .5s;
    backface-visibility: hidden;
    transform: translateZ(0);
}

.page-leave-active, .bounce-leave-active {
    animation: bounce-out .5s;
    backface-visibility: hidden;
    transform: translateZ(0);
}

@keyframes bounce-in {
    0% { opacity: 0; 
          transform: translateY(200px);}
    100% { opacity: 1; 
          transform: translateY(0px);}
}

@keyframes bounce-out {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
</style>
  
<script>

if (process.client) {
  let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "/burger.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('click', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
      directionMenu = -directionMenu;
    });
}

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      script: [{ src: 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js' }],
    };
  },
};
</script>