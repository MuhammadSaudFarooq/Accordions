import React, {useState} from "react";

const MyAccordion = ({question, answer}) => {
    const [showData, setShowData] = useState(false);
    return (
        <div className="main-container">
            <div className="question-heading">
                <p onClick={() => setShowData(!showData)}>{showData ? '-' : '+'}</p>
                <h3>{question}</h3>
            </div>
            {showData && <p className="answer-para">{answer}</p> }
        </div>
    )
}

export default MyAccordion;