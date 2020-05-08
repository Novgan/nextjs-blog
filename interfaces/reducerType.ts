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


export type propsType = {
    selectPost(id: number | null): void
    postId: number | null
    singlePost: singlePostType
    title: string | null
    body: string | null
}

export type initialStateType = {
    posts: Array<postsType>
    singlePost: singlePostType
    postId: null | number
}

export type mapStateToPropsType = {
    mainReducer: initialStateType
}


export type indexPropsType = {
    posts: Array<postsType>
    changePostId(id: number | null): void
}
