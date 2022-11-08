import React, { useState, useEffect } from "react";
import Feed from "./Feed"
import PostForm from "./PostForm"

function Community ( {posts, setPosts } ) {

  
    //   const postsCollection = posts.map((displayedPost) => {
    //     return (
    //       <UserPosts key = {displayedPost.id} userPost = {displayedPost} handleDelete = {handleDelete} updatePost={updatePost}/>
    //     )
    //   })
  
      function handleAddPost (newPost) {
        const newPostArray = [...posts, newPost]
        setPosts(newPostArray);
      }

      const deletePost = (id) => setPosts(posts => posts.filter(post => post.id !== id))
  
    //   function handleDelete(id) {
    //     //DELETE to `/posts/${params.id}`
    //     fetch(`/posts/${id}`, {
    //       method: "DELETE",
    //       headers: { "Content-Type": "application/json" },
    //     }).then((res) => {
    //       if (res.ok) {
    //         deletePost(id);
    //         history.push("/");
          // } else {
          //   res
          //     .json()
          //     .then((data) =>
          //       setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          //     );
          // }

    return (
        <>
        <div className="community">
            {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override?  */}
          {/* {/* {/* <p> Should we display all of the users Woofs here as a stretch goal?</p> */}
          {/* <h1 /> */}
          <PostForm onAddPost={handleAddPost} />
          {(posts) ? <Feed posts={posts} setPosts={setPosts} deletePost={deletePost}/> : null}
          {/* <ul className="user_posts">
            {/* {displayedPostsCollection} */}
          {/* </ul> */} 
        </div>
      </>
    )
}

export default Community;