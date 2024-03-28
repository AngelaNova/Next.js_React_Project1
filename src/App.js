import React from 'react';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css'; // he didn't add this!  REMOVE LATER IF NOT NEEDED
import './index.css';



const App = () => {
  return (
    <div className = "App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
