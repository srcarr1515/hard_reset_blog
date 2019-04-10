import React from 'react';
import Post from './Post'
import HRGLoader from './HRGLoader'

const PostList = ({post_list}) => {
    if(post_list.length < 1){
        return (<HRGLoader/>)
    }
    return(
    post_list.map(post => {
        let image_url = post.image
        if(post.image == null){
            image_url = 'https://semantic-ui.com/examples/assets/images/wireframe/image.png'
        }
        return <Post post_title={post.title} post_txt={post.slug} post_date={post.date} post_img={image_url}/>
    })
    )
}

export default PostList;