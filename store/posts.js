// State
export const state = () => ({
    _posts: []
})

// Actions
export const actions = {
    async loadPosts({ commit }) {
        // Obtener los posts
        let { data } = await this.$axios.get('https://jsonplaceholder.typicode.com/posts');

        console.log(data);

        // Realizar un commit
        commit('setPosts', data);
    }
}

// Getters
export const getters = {
    getPosts(state) {
        return state._posts
    }
}

// Mutaciones
export const mutations = {
    setPosts(state, posts) {
        state._posts = posts
    }
}