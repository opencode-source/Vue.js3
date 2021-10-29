<template>
  <div v-for="post in posts" :key="post.id" class="post-list">
      <SinglePost :post="post"/>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup(){
        onMounted(() => {console.log('Component Mounted')})
        onUnmounted(() => {console.log('Component Unmounted')})
        onUpdated(() => {console.log('Component Updated')})
    }
}
</script>

<style>

</style>