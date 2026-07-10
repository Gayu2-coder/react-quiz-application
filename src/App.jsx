import {useState} from "react";

import questions from "./data/questions";

import Question from "./components/Question";

import Timer from "./components/Timer";

import Result from "./components/Result";

import "./App.css";


function App(){


const [current,setCurrent]=useState(0);

const [score,setScore]=useState(0);

const [selectedAnswer,setSelectedAnswer]=useState("");

const [finished,setFinished]=useState(false);

const [time,setTime]=useState(30);



const nextQuestion=()=>{


if(selectedAnswer===questions[current].answer){

setScore(score+1);

}


if(current+1 < questions.length){

setCurrent(current+1);

setSelectedAnswer("");

setTime(30);

}

else{

setFinished(true);

}


};



const restart=()=>{

setCurrent(0);

setScore(0);

setSelectedAnswer("");

setFinished(false);

setTime(30);

};



if(finished){

return(

<Result

score={score}

total={questions.length}

restart={restart}

/>

)

}



return(

<div className="container">


<div className="quiz-box">


<h1>📝 React Quiz</h1>


<Timer

time={time}

setTime={setTime}

/>


<p>

Question {current+1} / {questions.length}

</p>



<Question

question={questions[current].question}

options={questions[current].options}

selectedAnswer={selectedAnswer}

setSelectedAnswer={setSelectedAnswer}

/>



<button

className="next"

onClick={nextQuestion}

>

Next

</button>


</div>


</div>


)


}


export default App;