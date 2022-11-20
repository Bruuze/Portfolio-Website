<template>
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
        <li class="nav__li nav__li--desktop-only">
          <nuxt-link to="/test1/" class="nav__link-text" title="Test1"> Test1 </nuxt-link>
        </li>
        <li class="nav__li nav__li--desktop-only">
          <nuxt-link to="/test2/" class="nav__link-text" title="Test2"> Test2 </nuxt-link>
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