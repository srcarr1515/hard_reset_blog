import React from 'react';
import Post from './Post'

const PostList = ({post_list}) => {
    return(
    //<Post post_title={post.title} post_txt={post.post}></Post>
    // <Post post_title={`${Objects.keys(post_list)}`}></Post>
    post_list.map(post => {return <Post post_title={post.title} post_txt={post.post} post_date={post.date} post_img={post.image}/>})

    )
}

export default PostList;