import {clientAPI} from '../../pages/api/api'
import {initialStateType, postsType, singlePostType} from '../../interfaces/reducerType'


const GET_POST: string = 'GET_POST';
const ADD_POST: string = 'ADD_POST';
const DELETE_POSTS: string = 'DELETE_POSTS';
const SELECT_POST: string = 'SELECT_POST';
const CHANGE_POST_ID: string = 'CHANGE_POST_ID';

let initialState: initialStateType = {
    posts: [
        {title: null, body: null, id: null},
    ],
    singlePost: {title: null, body: null},
    postId: null,
};


const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_POST:
            let newPost: postsType = {
                id: action.id,
                title: action.title,
                body: action.body,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case ADD_POST:
            return {...state,}
        case CHANGE_POST_ID:
            return {...state, postId: action.id}
        case SELECT_POST:
            let dataOfSinglePost: singlePostType = {title: action.title, body: action.body};
            return {...state, singlePost: dataOfSinglePost}
        case DELETE_POSTS:
            let newArrOfPosts: Array<postsType> = [];
            return {...state, posts: newArrOfPosts}

        default:
            return state;
    }
};

export const addPostsAC = (id: number | null, title: string | null, body: string | null) => ({
    type: GET_POST,
    id,
    title,
    body
});

export const selectPostAC = (title: string | null, body: string | null) => ({
    type: SELECT_POST,
    title,
    body
})

export const changePostId = (id: number | null) => ({
    type: CHANGE_POST_ID,
    id
})


export const deletePostAC = () => ({
    type: DELETE_POSTS
});

export const addSinglePostAC = (title: string | null, body: string | null) => ({
    type: ADD_POST,
    title,
    body
});

export const selectPost = (id: number) => async (dispatch: any) => {
    let response = await clientAPI.getSinglePost(id);
    if (response.status === 200) {
        let title = response.data.title
        let body = response.data.body
        dispatch(selectPostAC(title, body))
    } else {
        throw Error
    }
};


export const addSinglePostRequest = (title: any, body: any) => async (dispatch: any) => {
    let response = await clientAPI.addPost(title, body);
    if (response.status === 201) {
            let title = response.data.title
            let body = response.data.body
            dispatch(addSinglePostAC(title, body))
    } else {
        throw Error
    }
};


export const getPostsThunk = () => async (dispatch: any) => {
    let response = await clientAPI.getPosts();
    if (response.status === 200) {
        initialState.posts = new Array<postsType>()
        response.data.map((u: postsType) => {
            let id = u.id
            let title = u.title
            let body = u.body
            dispatch(addPostsAC(id, title, body))
        })
    } else {
        throw Error
    }
};

export default mainReducer;
