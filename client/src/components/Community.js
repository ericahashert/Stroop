import React from "react";
import Feed from "./Feed"
import PostForm from "./PostForm"

function Community ( {posts, setPosts } ) {
  
    function handleAddPost (newPost) {
      const newPostArray = [...posts, newPost]
      setPosts(newPostArray);
    }

    const deletePost = (id) => setPosts(posts => posts.filter(post => post.id !== id))

    return (
        <>
        <div className="community">
          <h1 className="title ml-5 mt-5">Join the Conversation</h1>
          <p className="ml-5 mb-4">Your voice is important and deserves to be heard. Share below - testimonials, encouraging stories, advice - whatever you feel would contribute to the conversation.</p>
          <PostForm onAddPost={handleAddPost} />
          {(posts) ? <Feed posts={posts} setPosts={setPosts} deletePost={deletePost}/> : null}
        </div>
      </>
    )
}

export default Community;