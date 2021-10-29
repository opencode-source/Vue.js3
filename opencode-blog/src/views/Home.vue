<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete Last Post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { PostList },
  setup(){

    const showPosts = ref(true)
    const posts = ref([
      { title: 'Welcome to the Blog', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi! Id, pariatur laboriosam corporis maiores aut ipsa eos tempora recusandae quibusdam doloribus necessitatibus sequi at quia unde. Nulla, omnis nesciunt.', id: 1},
      { title: 'Best Vue Course Ever', body: 'lorem', id: 2}
    ])
    
    return {posts, showPosts}
  }
}
</script>
