<script setup>
    const route = useRoute()
    var postIndex = 0
    var thisPostIndex = 0
    const { data: posts } = await useAsyncData('posts-list', () => queryContent('/blog').sort({ date: -1 }).find())
    for (const post of posts._rawValue) { 
        if(post._path == route.path){
            thisPostIndex = postIndex
        }
        postIndex++
    }
    const previousPost = posts._rawValue[thisPostIndex - 1]
    const nextPost = posts._rawValue[thisPostIndex + 1]
</script>

<template>
    <div>
        <NuxtLink v-if="thisPostIndex != 0" :to="previousPost._path">
        {{ previousPost.title }}
        </NuxtLink><br/>
        <NuxtLink v-if="thisPostIndex != postIndex - 1" :to="nextPost._path">
            {{ nextPost.title }}
        </NuxtLink>
    </div>
</template>