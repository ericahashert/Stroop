import React, { useState } from 'react';

function Modal ( {post, updatePost, setModal, isActive } ) {
    const [postContent, setPostContent] = useState(post.post_content)

    // const PopUp = props => {
        // function that takes boolean as param to conditionally display popup
            // const { setPopUp } = props 

    // const { id } = useParams()

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
                    setModal(false)
                }
                //   } else {
                //     r.json().then((err) => setErrors(err.errors));
                //   }
            });
    };


    return (
        <div className="modal">
            <div className="modal-background">
                <div className="modal-content has-background-white py-5 px-5">
                            <form onSubmit={handleSubmit}>
                                <p>
                                    <label>Post</label>
                                        <input
                                            type="text"
                                            name="post"
                                            value={postContent}
                                            placeholder={post.post_content}
                                            onChange={(e) => setPostContent(e.target.value)}
                                        />
                                </p>
                                        <input type="submit" value="Submit" />
                            </form>
                        {/* {errors */}
                            {/* ? errors.map((e) => ( */}
                            {/* <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2> */}
                            {/* )) */}
                            {/* : null} */}
                </div>            
            </div>
        </div>
    )}
export default Modal;