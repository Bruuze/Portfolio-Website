<template>
  <div>
    <h1>Blog Posts</h1>
  <ContentQuery :path="$route.path"  :where="{ _type: 'json' }"  v-slot="{ data }" :sort="{ date: -1 }" >
      <ul>
        <li v-for="post of data" :key="post.slug">
          <img :src="post.thumbnail" class="imgRemoveMenu">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
  </ContentQuery>
  </div>
</template>

<script>

</script>