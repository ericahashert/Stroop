import React from 'react';
import tigerVideo from '../assets/bengalTiger.mp4';

function Home () {
    return (
    <div className="Home">
        <video id="background_video" autoPlay loop muted>
            <source src={tigerVideo} type="video/mp4" />
        </video>
        <h1 className= "home-heading has-text-light is-size-1 has-text-centered has-text-weight-bold pt-2">Welcome to Stroop</h1>
        <p className="container is-size-4 has-text-centered has-text-light pt-3">We believe that too many people have incurred serious injury or death due to misinformation about the substances they are given. If you are experiencing symptoms that you believe are inconsistent with your taken substance, search symptoms or drug names below to confirm. Don't let it become an emergency. </p>
    </div>
    )
}

export default Home;