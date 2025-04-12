<script setup>
import Button from './Button.vue';
import {ref} from 'vue';

const posts = ref([]);

const fetchPosts = async () => {
    try {
        const res = await fetch('https://banana-book-backend.vercel.app/api/posts/fetch/top', {
            credentials: 'include'
        })
        const data = await res.json();
        posts.value = JSON.parse(JSON.stringify(data)).posts;
        console.log(posts.value);
    }
    catch(err) {
        console.log('Failed to fetch posts', err);
    }
}
</script>

<template>
    <h1>Posts</h1>
    <Button @click="fetchPosts">get posts</Button>
    <div class="postContainer">
        <div class="post" v-for="post in posts" :key="post._id">
            <h2>{{  post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>


<style>

</style>