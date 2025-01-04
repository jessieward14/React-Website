import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './signUp.css'; // Y

// instead of one const of image in Blog there are 2:setup and punchline as that is how the api works
const SignUp = () => {
    const [joke, setJoke] = useState({ //instead of data in blog - changed to joke for this
      setup: '',
      punchline: '',
    });
    const [showPunchline, setShowPunchline] = useState(false);//this shows the answer
  
// followed structure of blog
    const fetchJoke = () => {
      axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
          console.log(res.data);
          const { setup, punchline } = res.data;
          setJoke({ setup, punchline});
          setShowPunchline(false); // Hide punchline to start
        })
        .catch(err => {
          console.log(err);
        });
    };
  

const handleClickSetup = () => {
    setShowPunchline(true);
  };//this makes it so that when I click, I get the answer/punchline

  const handleNewJokeClick = () => {
    fetchJoke();
  };//gets new joke

  useEffect(() => {
    fetchJoke();
  }, []);



return (
    <div className="sign-up">
      <div className="joke-container">
        <h2>Oh! You want a joke to go with your meal?? I've got just the ones for you!</h2>
        <p className="joke-setup" onClick={handleClickSetup}>
          {joke.setup}
        </p>
        {showPunchline && <p className="joke-punchline">{joke.punchline}</p>}
      </div>
      <button className="new-joke-button" onClick={handleNewJokeClick}>
        New Joke
      </button>
    </div>
  );
};


export default SignUp;