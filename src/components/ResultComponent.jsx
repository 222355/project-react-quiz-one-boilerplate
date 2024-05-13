import React from 'react';
import './ResultComponent.css'
import HomeComponent from './HomeComponent';
import QuizComponent from './QuizComponent';
    class ResultComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                play:false,
                home:false
            }
        }   
        playAgain=()=>{
            this.setState({play:true})
        }
        BacktoHome=()=>{
            this.setState({home:true})
        }
        render(){
            const {score,questions,attemptedQuestions} = this.props;
            const totalQuestions = questions.length;
            const attemptedquestions = attemptedQuestions;
            const correctAnswers =Math.floor(score/10)
            const wrongAnswer = attemptedQuestions-correctAnswers
            if(this.state.play){
               return <QuizComponent/>
            }
            if (this.state.home){
                return<HomeComponent/>
            }
            return (
                <div>
                    <h1>Result</h1>
                    <div className="result">
                        <p></p>
                        <h4>Your Score is {score}%</h4>
                        <ul>
                            <li>Total number of questions :  { totalQuestions} </li>
                            <li>Number of attempted questions : {attemptedquestions}</li>
                            <li>Number of correct answers :{correctAnswers}</li>
                            <li>Number of wrong answers :{wrongAnswer}</li>
                        </ul>

                    </div>
                        <div className='row-btn'>
                            <button className='playAgain' onClick={this.playAgain}>Play Again</button>
                            <button className='home' onClick={this.BacktoHome}>Back to Home</button>
                        </div>
                </div>
            )
        }
    }
    export default ResultComponent