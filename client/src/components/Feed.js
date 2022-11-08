import React, { useState } from "react";
import Post from "./Post";
// import PostForm from "./PostForm";

function Feed ( {posts, comments, setPosts, deletePost} ) {
    const [popUp, setPopUp] = useState(false)

    const duringPopUp = popUp ? " during-popup" : ""

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
    //DELETE to `/woofs/${params.id}`
        fetch(`/posts/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.ok) {
            deletePost(id);
            }})} 

    const postsCollection = posts.map((post) => {
        return <Post post={post} comments={comments} updatePost={updatePost} duringPopUp = {duringPopUp} handleDelete={handleDelete}/>;
    });

  return (
    <ul className="feed">
      {postsCollection}
      {/* {comments ? comments={comments} : null} */}
    </ul>
  );
}

export default Feed;