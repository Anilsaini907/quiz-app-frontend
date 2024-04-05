import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import ResultTable from '../components/ResultTable';

export default function Result() {
function onRestrat(){
    console.log('onRestrat');
}
    
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'></span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'></span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'></span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'></span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'></span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'></span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestrat}>Restart</Link>
        </div>

        <div className="container">
          <ResultTable></ResultTable>
        </div>
    </div>
  )
}