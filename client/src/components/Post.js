import React, { useState } from 'react';
import Comments from './Comments'
import PopUp from './PopUp'

function Post ( { post, updatePost, duringPopUp, handleDelete } ) {
    const [popUp, setPopUp] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    
    let commentsCollection;
    // useEffect(() => {
    commentsCollection = post.comments.map((comment) => {
        // console.log(comment)
        return <Comments key={comment.id} comment={comment}/>;
    });

    // }, ([post]))

    return (
        <>
        <div className="post_container">
            <div className={"Post" + duringPopUp}>
                <p>{post.post_content}</p>
            </div>
            <button onClick={()=> setPopUp(true)} className={duringPopUp}>Edit Post</button>
                {popUp && <PopUp post={post} setPopUp={setPopUp} updatePost={updatePost} setIsOpen={setIsOpen} open={isOpen}/>}
            <button onClick = {() => handleDelete(post.id)}>Delete Post</button>
            <div>  
                <h4>Comments</h4>
                {commentsCollection}
            </div>
        </div>
        </>
    )
}

export default Post;