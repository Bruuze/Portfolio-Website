<template>
  <div>
    <h1>Work Posts</h1>
    <ContentQuery :path="$route.path" v-slot="{ data }" :sort="{ date: -1 }" >
      <ul>
        <li v-for="post of data" :key="post.slug">
          <img :src="post.thumbnail" />
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
  </ContentQuery>
  </div>
</template>