import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'

function Post ( { post, updatePost, handleDelete } ) {
    const [isActive, setIsActive] = useState(false)
    const [postContent, setPostContent] = useState(post.post_content)
    const [areCommentsRendered, setAreCommentsRendered] = useState(false)

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

      function handleClick () {
        setAreCommentsRendered(areCommentsRendered => !areCommentsRendered)
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
    <div className="post-container">
        <div className='container'>
        <div className='columns is-mobile is-centered'>
            <div className='column is-14'>
                <article className="message is-link">
                    <div className="message-body">
                        <strong>@chad</strong> 
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
                        <p>My childhood was as normal as most people. I played with the neighborhood kids, stayed outside and stayed quite happy. As a child with severe ADHD/ADD I was prescribed Ritalin to balance me out. I swapped schools halfway through 5th grade and moved to a different town. Middle school and high school were a little harder because I was kind of an awkward kid. I mostly kept to myself and kept a small tight group of friends. I then got a scholarship to college and enrolled at The University of Alabama at Birmingham.
                        <br />
                        <br />I started partying as soon as I enrolled in school. Shortly after, I enlisted in the Navy. I wanted to do law enforcement in the military but I ended up a machinist mate for reactor plants. The old saying “Drinks likes a sailor” couldn’t have applied more. Drinking gave me the sense of normalcy that I had been looking for. Once I got out, through a few turns of events, I ended up in Florida.
                        <br />
                        <br />Florida opened up a lot of doors to experiences I had always wanted, but had never been exposed to. Drinking took a back seat quickly to drugs. I could regulate all of my emotions and moods any way I wanted to. I didn’t have to deal with any issues because they could just be buried down. Eventually a life of drugs, concerts and doing nothing with my life started to get old. I decided to get away from the drugs and bad decisions and go back home to Alabama. An opportunity to finally get into law enforcement was awaiting me.
                        <br />
                        <br />Flash forward a bit, and I was hired by my sheriff’s department to finally claim a dream career I had since I was 5. I was on top of the world and beyond fulfilled by my new career. Unfortunately, the thing about untreated addiction is it will rear its head once again. I thought that changing my playgrounds, playmates and playthings would be enough to solve my problem. I would go on drinking binges when I was off work, and then when the drinking didn’t satisfy me, I eased back into drugs. I justified it as I always do and told myself I wasn’t hurting anybody. I eventually started to be honest with myself and began thinking something was wrong because I couldn’t quit on my own. The stakes were so high doing something that was so stupid. Yet, how do I ask for help as a cop with a drug problem? I didn’t like asking for help at all, let alone something of that magnitude.
                        <br />
                        <br />Luckily the big man helped me with that. I was finally caught taking evidence and arrested for it. I was told I was going to rehab and couldn’t have been more against it. I spent some of the best weeks of my life in rehab in Guntersville. I finally got the education on addiction, and the tools to live life on life’s terms.
                        I now have over 2 1/2 years of sobriety and am happier than I have ever been. My journey through recovery has been more than I could have asked for.
                        <br />
                        <br />Don’t ever be afraid to ask for help. It’s a journey best traveled with other people that are already on that path. There are so many resources available, you just have to want it.</p>
                        <button onClick={handleClick} className=" mt-4 button is-small">
                            Comments
                        </button>
                        {areCommentsRendered ? (
                            <div className="mt-4">  
                                {commentsCollection}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div className='container'>
        <div className='columns is-mobile is-centered'>
            <div className='column is-14'>
                <article className="message is-link">
                    <div className="message-body">
                        <strong>@bo</strong> 
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
                        <p>I have been an addict since the age of 13. It first started as fun, trying to fit in and trying to be cool, and I never thought it would lead down the path of addiction. I used all throughout high school and college. I used every drug in the book but my drug of choice was crystal meth.
                        <br />
                        <br />Once I found crystal meth at 26 years old, it led my life into the brink of disaster. After four years of chronic meth abuse, I found myself in the hospital on suicide watch after an attempt to take my own life.
                        <br />
                        <br />When I was in the hospital, I came to the conclusion that recovery was the only way out. When I got out of the hospital, I started going to 12-step meetings and started being active in recovery.
                        <br />
                        <br />I have had my relapses. I have probably had four or five relapses. Crystal meth is one of the most powerful and addictive drugs. A lot of the experience and knowledge I have gained has come from to different 12-step meetings that include people who struggle with different addictions but all are focused on recovery.
                        <br />
                        <br />Every time that I have relapsed and have come back, the one thing that I felt was missing was my spirituality. Without a doubt that is the one thing that sticks in my mind. I try to go back and figure out what went wrong and what happened it all comes back to my spirituality. Now I pray in the morning and evening and meditate to keep myself in check with my addiction.
                        <br />
                        <br />Advice I would give to those starting in recovery is to never give up. In the time that I have been in recovery, my life has been full and rewarding. I have done things I never would have done. I have traveled the world, learned to scuba dive, and have hiked through national parks. I absolutely learned to love life. Never give up and keep coming back to recovery!</p>
                        <button onClick={handleClick} className=" mt-4 button is-small">
                            Comments
                        </button>
                        {areCommentsRendered ? (
                            <div className="mt-4">  
                                {commentsCollection}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                    </article>
                </div>
            </div>
        </div>


        <div className='container'>
        <div className='columns is-mobile is-centered'>
            <div className='column is-14'>
                <article className="message is-link">
                    <div className="message-body">
                        <strong>@alan</strong> 
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
                        <p>Treatment forced me to see one thing crystal clear – my recovery had to be the most important thing in my life. They say whatever you put ahead of your recovery will be the second thing you lose. I learned that I had to get sober not for other people or to look good in the face of my wreckage, but that I had to get sober for myself. Most importantly, I had to learn that I was worth it.
                        <br />
                        <br />Nowadays I try to remain as vigilant in possible in the fellowship of recovery. Talking to other people who have faced similar things to me and hearing how they’ve moved through and handled the many challenges life presents sober is critical for me. I also do what I can for the newcomer. When I found recovery, I can’t even summarize how significant it was for me to talk to people and tell them what I have done and then be told to. I owe that same warm heart to every new person who is seeking long term recovery. In short, I try to avoid being hungry, angry, lonely and tired, as these four things can trigger an emotional spiral.
                        <br />
                        <br />Today my life is honest and true. I don’t have nearly the material things I once did.  What I do have today is a reflection in the mirror that I can l good about. The greatest gift of recovery is the ability I now have to feel good about the things I do and the person that I am. I had never felt that before in my life. I get to care for others and be a good friend and a good son. It’s all genuine and true and I owe all of that to recovery.
                        <br />
                        <br />My greatest message to others that are suffering from addiction/alcoholism is as follows:
                        <br />
                        <br />You’re worth it, plain and simple. There is a solution to your problem, and millions of people out there – 23 million in America, in fact – have found it. You can too. You are not a bad person that needs to get good, you are a sick person who needs to get well.</p>
                        <button onClick={handleClick} className=" mt-4 button is-small">
                            Comments
                        </button>
                        {areCommentsRendered ? (
                            <div className="mt-4">  
                                {commentsCollection}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div className='container'>
        <div className='columns is-mobile is-centered'>
            <div className='column is-14'>
                <article className="message is-link">
                    <div className="message-body">
                        <strong>@lexi</strong> 
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
                        <p>It is possible to quit. You just have to want it so bad. You need to remember all those dreams— the dreams before the sorrows and heartbreaks. Those dreams are what will get you through your darkest days. Those dreams are what will keep you alive. So trust me if you are going through it, if you’re lost, sad and alone, trust me when I say it’s possible to become you again.</p>
                        <button onClick={handleClick} className=" mt-4 button is-small">
                            Comments
                        </button>
                        {areCommentsRendered ? (
                            <div className="mt-4">  
                                {commentsCollection}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                    </article>
                </div>
            </div>
        </div>    

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
                            <button onClick={handleClick} className=" mt-4 button is-small">
                                Comments
                            </button>
                            {areCommentsRendered ? (
                                <div className="mt-4">  
                                    {commentsCollection}
                                </div>
                            ) : (
                                null
                            )}
                            </div>
                        </article>
                    </div>
                </div>
            </div>  
        </div>
    )}           

export default Post;