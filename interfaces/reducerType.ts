export type postsType = {
    title: string | null
    body: string | null
    id: number | null
}

export type singlePostType = {
    title: string | null
    body: string | null
    postId?: number | null
}
export type initialStateType = {
    posts: Array<postsType>
    singlePost: singlePostType
    postId: null | number
}
