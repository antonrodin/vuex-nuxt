<template>
    <div>
        <h1>Blog</h1>
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('posts/loadPosts')
    },

    computed: {
        posts() {
            return this.$store.getters['posts/getPosts']
        }
    }
}
</script>