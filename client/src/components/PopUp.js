import React, { useState } from 'react';
// import '../css/PopUp.css';
// import { useParams } from 'react-router-dom';

function PopUp ( {post, setPopUp, updatePost, setIsOpen} ) {
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
                    setPopUp(false);
                }
                //   } else {
                //     r.json().then((err) => setErrors(err.errors));
                //   }
            });
    };


    return (
        <div className="PopUp">
            <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
            <div className="pu-content-container">
                <div>
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
export default PopUp;