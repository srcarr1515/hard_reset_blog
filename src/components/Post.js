import React from 'react';

const Post = ({post_title, post_txt, post_date, post_img}) => {
    return(
        <div className="item">
            <div className="ui small image"><img src={post_img}></img></div>
            <div className="content">
                <a className="header">{post_title}</a>
                <div className="description">
                    {post_txt}
                </div>
                <div className="meta">
                    {post_date}
                </div>
            </div>
        </div>
    )
}

export default Post;