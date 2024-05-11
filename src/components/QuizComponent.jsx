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
            questions: [
                {
                    ques: "Name the Father of the Indian Constitution?",
                    options: ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
                    ans: "Dr. B. R. Ambedkar"
                },
                {
                    ques: "1Name the Father of the Indian Constitution?",
                    options: ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
                    ans: "Dr. B. R. Ambedkar"
                },
                {
                    ques: "2Name the Father of the Indian Constitution?",
                    options: ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
                    ans: "Dr. B. R. Ambedkar"
                },
            ]
        };
    }

    handleOption = (option) => {
        this.setState({ selectedOption: option });
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
            return <ResultComponent />;
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
