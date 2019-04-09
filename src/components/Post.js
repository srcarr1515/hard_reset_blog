import React from 'react';

const Post = ({post_title, post_txt, post_date, post_img}) => {
    return(
        <div className="item">
            <div className="image"><img href={post_img}></img></div>
            <div>
                <h3>{post_title}</h3>
                <div>
                    <p>{post_txt}</p>
                </div>
                <div>
                    {post_date}
                </div>
            </div>
        </div>
    )
}

export default Post;