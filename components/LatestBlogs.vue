<script setup lang="ts">
const blogUrl = "/blog"
</script>

<template>
    <ContentQuery :path="blogUrl" :where="{ _type: 'json' }" v-slot="{ data }" :sort="{locale: true, numeric: true, caseFirst: 'upper'}">
        {{data}}
        <!-- <li>
            {{Object.values(data)[0].title}}
        </li>
        <li>
            {{Object.values(data)[1].title}}
        </li> -->
    </ContentQuery>
</template>