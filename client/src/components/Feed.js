import React from "react";
import Post from "./Post";
// import PostForm from "./PostForm";

function Feed ( {posts, comments} ) {

const postsCollection = posts.map((post) => {
    return <Post key={post.id} post={post} comments={comments}/>;
  });

  return (
    <ul className="feed">
      {/* <PostForm /> */}
      {postsCollection}
      {/* {comments ? comments={comments} : null} */}
    </ul>
  );
}

export default Feed;