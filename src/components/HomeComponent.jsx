import React from "react";
import './HomeComponent.css';
import QuizComponent from './QuizComponent';
class HomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            quizopen:false
        }
    }
    
    openPage=()=>{
        this.setState({quizopen:true});
    };
    render(){
        if(this.state.quizopen){
            return<QuizComponent/>
        }
        return(
            <div className="quiz-page">
                <h1>Quiz App</h1>
                <button onClick={this.openPage}  className="playBtn">Play</button>
            </div>
        );
    }
}
export default HomeComponent;