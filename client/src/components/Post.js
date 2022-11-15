import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'

function Post ( { post, updatePost, handleDelete } ) {
    const [isActive, setIsActive] = useState(false)
    const [postContent, setPostContent] = useState(post.post_content)

    let commentsCollection;
    // useEffect(() => {
    commentsCollection = post.comments.map((comment) => {
        return <Comments key={comment.id} comment={comment}/>;
        console.log(comment)
    });


    // }, ([post]))


    function handleClickEvent () {
        setIsActive(isActive => !isActive)
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        // setErrors([]);
        // setIsLoading(true);
        fetch(`/post/${post.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              post_content: postContent,
            }),
          }).then((r) => {
            // setIsLoading(false);
            if (r.ok) {
                r.json().then((userData) => updatePost(userData));
                setIsActive(false)
            }
            //   } else {
            //     r.json().then((err) => setErrors(err.errors));
            //   }
        });
    }

    return (
    // <div className="message">
    //     <div className="post_container pb-4">
    //         <div className="message-header">
    //             <p>{}</p>
    //         </div>
    //         <div className="message-body">
    //         <div>
    //             <p>{post.post_content}</p>
    //         </div>
    //         <button className="mt-2" onClick={handleClickEvent}>Edit Post</button>
    //             <div className={isActive ? "modal is-active" : "modal"}
    //             >
    //                 <div onClick={handleClickEvent} className="modal-background">
    //                     <div className="modal-content has-background-white py-5 px-5">
    //                     <h1 className="has-text-centered">
    //                                 Edit Post
    //                             </h1>
    //                         <form onSubmit={handleSubmit} >
    //                             <div className="field">
    //                                 <div className="control">
    //                                     <input
    //                                         className="input"
    //                                         type="text"
    //                                         name="post"
    //                                         value={postContent}
    //                                         placeholder={post.post_content}
    //                                         onChange={(e) => setPostContent(e.target.value)}
    //                                     />
    //                                 </div>
    //                             </div>
    //                                     <input type="submit" value="Save" />
    //                         </form>
    //                     </div>            
    //                 </div>
    //             </div>
    //             {/* {modal && <Modal post={post} setModal={setModal} updatePost={updatePost} setIsActive={setIsActive} active={isActive}/>} */}
    //         <button className="ml-3 mb-3" onClick = {() => handleDelete(post.id)}>Delete Post</button>
    //         <div>  
    //             <h4>Comments</h4>
    //             {commentsCollection}
    //         </div>
    //     </div>
    // </div>
    // </div>
        <div className='container'>
            <div className='columns is-mobile is-centered'>
                <div className='column is-14'>
                    <article className="message is-link">
                        <div className="message-body">
                            <strong>@username</strong> 
                            <button className="button is-pulled-right is-small ml-2" onClick = {() => handleDelete(post.id)}>
                                        <span>Delete</span>
                                            {/* <span className="icon is-small">
                                                <i className="fas fa-times"></i>
                                            </span> */}
                            </button>
                            <button className="button is-pulled-right is-small" onClick={handleClickEvent}>Edit</button>
                                <div className={isActive ? "modal is-active" : "modal"}>
                                    <div className="modal-background">
                                        <div className="modal-content has-background-white py-5 px-5">
                                        <button onClick={handleClickEvent} className="delete" aria-label="close"></button>
                                            <h1 className="has-text-centered">
                                                Edit Post
                                            </h1>
                                            <form onSubmit={handleSubmit} >
                                                <div className="field">
                                                    <div className="control">
                                                        <input
                                                            className="input"
                                                            type="text"
                                                            name="post"
                                                            value={postContent}
                                                            placeholder={post.post_content}
                                                            onChange={(e) => setPostContent(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                    <input type="submit" value="Save" />
                                            </form>
                                        </div>            
                                    </div>
                                    <button className="modal-close is-large" aria-label="close"></button>
                                </div>
                            <p>{post.post_content}</p>
                                <div>  
                                    <h4>Comments</h4>
                                    {commentsCollection}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>  
    )
    }

export default Post;