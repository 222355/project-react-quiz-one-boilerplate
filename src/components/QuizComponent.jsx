import React from "react";
import './QuizComponent.css';
import ResultComponent from "./ResultComponent";

class QuizComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizlock: false,
            currentIndex: 0,
            selectedOption: null,
            score:0,
            attemptedQuestions:0,
            questions: [
                {
                    ques: "1 Name the Father of the Indian Constitution?",
                    options: ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
                    ans: "Dr. B. R. Ambedkar"
                },
                {
                    ques: "2 Name the National animal of India?",
                    options: ["Lion", "Tiger", "Elephant", "Leopard"],
                    ans: "Tiger"
                },
                {
                    ques: "3 Name the national flower of India?",
                    options: ["Rose","Lotus"," Lily"," Sunflower"],
                    ans: "Lotus"
                },
                {
                    ques: "4 Which is the most sensitive organ in our body?",
                    options: ["Liver", "Brain", "Skin", "Heart"],
                    ans: "Skin"
                },
                {
                    ques: "5 Who invented the Computer?",
                    options: ["Thomas Edison", "Isaac Newton", "Albert Einstein", "Charles Babbage"],
                    ans: "Charles Babbage"
                },
                {
                    ques: "6 Which is the longest river on Earth?",
                    options: ["Amazon", "Ganges", "Nile", "Yangtze"],
                    ans: "Nile"
                },
                {
                    ques: "7 Agra is situated on the bank of which river?",
                    options: ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
                    ans: "Yamuna"
                },
                {
                    ques: "8 What is the capital of India?",
                    options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
                    ans: "New Delhi"
                },
                {
                    ques: "9 What is the name of the largest desert in the world?",
                    options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Antarctic Desert"],
                    ans: "Sahara Desert"
                },
                {
                    ques: "10 What is the name of the largest rainforest in the world?",
                    options: ["Amazon rainforest", "Congo rainforest", "Borneo rainforest", "Daintree rainforest"],
                    ans: "Amazon rainforest"
                }, 
                {
                    ques: "11 What is the largest planet in our solar system?",
                    options: ["Earth", "Mars", "Jupiter", "Saturn"],
                    ans: "Jupiter"
                },
                {
                    ques: "12 Who wrote 'Romeo and Juliet'?",
                    options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "Jane Austen"],
                    ans: "William Shakespeare"
                },
                {
                    ques: "13 Who was the first woman to win a Nobel Prize?",
                    options: ["Marie Curie", "Mother Teresa", "Rosa Parks", "Florence Nightingale"],
                    ans: "Marie Curie"
                },
                {
                    ques: "14 When is India's Independence Day?",
                    options: ["26 January", "15 August", "5 September", "2 October"],
                    ans: "15 August"
                },
                {
                    ques: "15 Which state is also known as the 'fruit bowl' of India?",
                    options: ["Punjab", "Maharashtra", "Himachal Pradesh", "Kerala"],
                    ans: "Himachal Pradesh"
                },
            ]
        };
    }

    handleOption = (option) => {
        const { currentIndex, questions } = this.state;
        const currentQuestion=questions[currentIndex];
        if(option==currentQuestion.ans){
            this.setState(prevState=>({
                score:(prevState.score+1)*10
            }))
        }
        this.setState(prevState=>({
            attemptedQuestions :(prevState.attemptedQuestions)+1,
            selectedOption: option 

        }))
    };

    handleNext = () => {
        const { currentIndex, questions } = this.state;
        if (this.state.selectedOption !== null) {
            if (currentIndex === questions.length - 1) {
                this.setState({ quizlock: true });
            } else {
                this.setState((prevState) => ({
                    currentIndex: prevState.currentIndex + 1,
                    selectedOption: null
                }));
            }
        } else {
            alert("Please select an option");
        }
    };

    handlePrev = () => {
        if (this.state.currentIndex > 0) {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex - 1,
                selectedOption: null
            }));
        }
    };

    handleQuit = () => {
        this.setState({ quizlock: true });
    };

    render() {
        const { quizlock, currentIndex, questions } = this.state;

        if (quizlock) {
            return <ResultComponent score={this.state.score} questions={this.state.questions} attemptedQuestions={this.state.attemptedQuestions} />;
        }

        const currentQuestion = questions[currentIndex];

        return (
            <div className="quiz-page">
                <h1>Question</h1>
                <div className="pageNo">
                    <p>{currentIndex + 1} of {questions.length}</p>
                </div>
                <p>{currentQuestion.ques}</p>
                <div className="buttons">
                    <div className="rowbtn">
                        {currentQuestion.options.map((option, index) => (
                            <button key={index} className={`Quiz-button ${this.state.selectedOption === option ? 'selected' : ''}`} onClick={() => this.handleOption(option)}>{option}</button>
                     
                        ))}
                    </div>
                </div>
                <div className="Nav-Btn">
                    <button className="NavBtn prev" onClick={this.handlePrev}>Previous</button>
                    <button className="NavBtn nxt" onClick={this.handleNext}>Next</button>
                    <button className="NavBtn qt" onClick={this.handleQuit}>Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizComponent;
