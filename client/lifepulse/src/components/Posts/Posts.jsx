import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post';

const useStyles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: '8px', // Adjust the margin value as needed
  },
  actionDiv: {
    textAlign: 'center',
  },
};

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles;

    console.log(posts);
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;
