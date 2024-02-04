import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { fetchPosts } = postSlice.actions;
export default postSlice.reducer;
