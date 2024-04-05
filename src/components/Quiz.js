import React from 'react';
import Question from './Questions';

export default function Quiz(){

    function onNext(){
        
    }

    /** Prev button event handler */
    function onPrev(){
       
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
    
           <Question></Question>
    
            <div className='grid'>
             <button className='btn prev' onClick={onPrev}>Prev</button> 
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
      )

}