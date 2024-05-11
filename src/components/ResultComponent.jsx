import React from 'react';
import './ResultComponent.css'
 class ResultComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>Result</h1>
                <div className="result">
                    <p></p>
                    <h4>Your Score is </h4>
                    <ul>
                        <li>Total number of questions </li>
                        <li>Number of attempted questions</li>
                        <li>Number of correct answers</li>
                        <li>Number of wrong answers</li>
                    </ul>

                </div>
                    <div className='row-btn'>
                        <button className='playAgain'>Play Again</button>
                        <button className='home'>Back to Home</button>
                    </div>
            </div>
        )
    }
 }
 export default ResultComponent