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
      <div className="has-text-centered ml-5 mr-5 mb-4">
        {/* {errors ? errors.map((e) => <div>{e}</div>) : null} */}
        <form onSubmit={handleSubmit}>
          <div className="field">
              <div className="control">
                <input
                  className="input is-rounded"
                  placeholder="What's on your mind?"
                  type="text"
                  name="post"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
            </div>
            {/* <div className = "has-text-centered">
              <button className="button" type="submit">Submit</button>
            </div> */}
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