import React, { useState, useEffect } from "react"
import './resume.css'
import avatar from './img/avatar.png'

function Resume () {

    const [text, setText] = useState('')
    const sentence = "I'm Frontend Developer"
    let index = 0;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText((prevText) => prevText + sentence.charAt(index));
        index++;
        if (index > sentence.length) {
          clearInterval(interval)
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
    
    
    return (
            <div className='container'>
                <div className='wrapper'>
                    <div className='row'>
                        <img className='avatar' src={ avatar } alt="" />
                        <h1 className='title'>Aidarov Akzhol</h1> 
                        <h2>
                            <span className='typewriter'>{ text }</span>
                        </h2>
                    </div>
                </div>          
            </div>
     )
}

export default Resume;