import React, { useState } from "react";
import Post from "./Post";

function Feed ( {posts, comments, setPosts, deletePost} ) {
  const [modal, setModal] = useState(false)

  const duringModal = modal ? "is-active" : ""

    const updatePost = (updatedPost) => setPosts((posts) => {
        return posts.map(post => {
             if(post.id === updatedPost.id){
               return (updatedPost)
             } else {
               return post
             }
           
            })
          })

    function handleDelete(id) {
        fetch(`/posts/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.ok) {
            deletePost(id);
            }})} 

    const postsCollection = posts.map((post) => {
        return <Post post={post} comments={comments} updatePost={updatePost} duringModal = {duringModal} handleDelete={handleDelete}/>;
    });

  return (
    <ul className="feed ml-4 mr-4">
      {postsCollection}
      {/* {comments ? comments={comments} : null} */}
    </ul>
  );
}

export default Feed;
