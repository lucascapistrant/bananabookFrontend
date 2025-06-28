<script setup>
import Button from './Button.vue';
import {ref, onMounted} from 'vue';
import defaultProfile from '../assets/images/profilepic.png'
import { format, formatDistanceToNow} from 'date-fns';

const posts = ref([]);

onMounted(() => {
    fetchPosts();
})

const fetchPosts = async () => {
    try {
        const res = await fetch('https://banana-book-backend.vercel.app/api/posts/fetch/top', {
            method: 'GET',
            credentials: 'include'
        })
        const data = await res.json();
        formatPostData(JSON.parse(JSON.stringify(data)).posts);
        console.log(posts.value);
    }
    catch(err) {
        console.log('Failed to fetch posts', err);
    }
}

const formatPostData = (postData) => {
    for(const post of postData) {
        posts.value.push({
            id: post._id,
            title: post.title,
            content: post.content,
            date: formatDate(post.createdAt),
            images: post.images,
            likeData: post.likes,
            likeCount: post.likes.length,
            userInfo: post.userDetails == undefined ? {} : post.userDetails,
            userId: post.userId
        })
    }
}

const formatDate = (rawDate) => {
    const now = new Date();
    const postDate = new Date(rawDate);
    const differenceInDays = (now - postDate) / (1000 * 60 * 60 * 24);

    if (differenceInDays < 3) {
        return formatDistanceToNow(postDate, { addSuffix: true });
    } else {
        return format(postDate, 'MMMM do, yyyy');
    }
}

const likePost = async (postId) => {
    try {
        const res = await fetch(`https://banana-book-backend.vercel.app/api/posts/${postId}/like`, {
            method: 'POST',
            credentials: 'include'
        })


    } catch(err) {
        console.log('Failed to like post', err);
    }
}

</script>

<template>
    <h1>Posts</h1>
    <Button @click="fetchPosts">get posts</Button>
    <div class="postContainer">
        <div class="post" v-for="post in posts" :key="post.id">
            <div class="post-header">
                <div class="post-userDetails">
                    <img
                        class="post-profilePic"
                        :src="post.userInfo.profilePicture || defaultProfile" alt="Profile Picture"
                    />
                    <p class="post-username">{{ post.userInfo.username }}</p>
                </div>
                <p class="post-date" >{{ post.date }}</p>
            </div>
            <h2 class="post-title">{{  post.title }}</h2>
            <p class="post-body">{{ post.content }}</p>
            <img
                class="post-img"
                v-for="(img, index) in post.images"
                :key="index"
                :src="img"
                alt="Post image"
            />
            <div class="post-likes" @click="likePost(post.id)">
                <span style="font-size: 1.5rem; padding-right: 10px;">{{ post.likeCount }}</span>
                <button>Like</button>
            </div>
        </div>
    </div>
</template>


<style>
.post {
    border: 2px solid black;
    width: 95%;
    margin: 0 auto;
    padding: 5px;
}

.post-header {
    position: relative;
}

.post-userDetails {
    display: flex;
    align-items: center;
}

.post-username {
    padding-left: 10px;
    margin: 0;
}

.post-profilePic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid black;
    background: #fff;
}

.post-date {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.2rem;
    margin: 0;
}


.post-title {
    font-size: 2rem;
    font-family: var(--font-body);
    color: var(--color-body-text);
}

.post-body {
    font-size: 1.5rem;
    opacity: .9;
}

.post-img {
    width: 150px;
}

</style>