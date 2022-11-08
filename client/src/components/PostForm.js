import React, { useState } from "react";

export default function PostForm({ onAddPost }) {

  const [postContent, setPostContent] = useState("")

  // const [errors, setErrors] = useState([]);
  function handleSubmit(e){
    let post = {
      "post_content" : postContent,
    }
    e.preventDefault();
    setPostContent("");
    console.log(post.post_content)
    fetch('/posts',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => onAddPost(data))
      // } else {
        //Display errors
        // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }


  return (
    <>
      <div>
        {/* {errors ? errors.map((e) => <div>{e}</div>) : null} */}
        <form onSubmit={handleSubmit}>
          <p>
            <label>Post</label>
              <input
                type="text"
                name="post"
                value={postContent}
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
    </>
  );
}