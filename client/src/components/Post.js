import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'

function Post ( {post} ) {
    // const [comments, setComments] = useState([]);
    let commentsCollection;
    // useEffect(() => {
        commentsCollection = post.comments.map((comment) => {
            return <Comments key={comment.id} comment={comment}/>;
        });
        console.log(post.user)

    // }, ([post]))

    return (
        <>
            <div>
                {/* <h4>@{post.users.username}</h4> */}
                <p>{post.post_content}</p>
            </div>
            <div>  
                <h4>Comments</h4>
                {commentsCollection}
            </div>
        </>
    )
}

export default Post;