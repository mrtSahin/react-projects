import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'



const card=document.getElementById('card')

const sTexts=(
  <div className='texts-wrapper'>
    <h1>SUBSCRIBE</h1><br/>
    <p>Sign up with your email address to recieve news and updates</p>
  </div>
)

const inputs=(
  <div className='inputs-wrapper'>
    <input id='first-name' type='text' placeholder='First Name'></input>
    <input id='last-name' type='text' placeholder='Last Name'></input>
    <input id='email' type='text' placeholder='Email'></input>
  </div>
)

const button=(
  <div className='button-wrapper'>
    <button><a>Subscribe</a></button>
  </div>
)

const app=(
  <div className='app'>
    {sTexts}
    {inputs}
    {button}
  </div>
)

ReactDOM.render(app,card);

