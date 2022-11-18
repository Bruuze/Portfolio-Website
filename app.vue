<template>
    <NuxtLoadingIndicator color="#FF7CD7" :duration="20000"/>
    <NuxtLayout>
    </NuxtLayout>
</template>
  
<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .st0{fill:#FFFFFF;}
.router-link-active .st0{fill:#F75EC8;}
.st1{fill:#FFFFFF;}
</style>
  
<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>