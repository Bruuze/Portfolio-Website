<script setup>
const { page } = useContent()
</script>

<template>
    <div>
        <p><NuxtLink to="/">Home</NuxtLink> > <NuxtLink to="/portfolio">Blog</NuxtLink> > <NuxtLink :to="page._path">{{page.title}}</NuxtLink></p>
    </div>
</template>