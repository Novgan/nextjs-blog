import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red'
});

export const clientAPI = {
    getPosts() {
        return instance.get('/posts')
    },
    getSinglePost(id: number) {
        return instance.get(`/posts/${id}?_embed=comments  `)
    },
    addPost(title: string, body: string) {
        return instance.post('/posts', {title, body})
    }
}
