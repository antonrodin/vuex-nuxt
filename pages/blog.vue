<template>
    <div>
        <h1>Blog, total: {{ total }}</h1>
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {

    // created() {
    //     this.$store.dispatch('posts/loadPosts')
    // },

    methods: {
        ...mapActions({
            loadPosts: "posts/loadPosts"
        })
    },

    computed: {
        ...mapGetters({
            posts: 'posts/getPosts',
            total: 'posts/getTotal'
        })
    }
}
</script>