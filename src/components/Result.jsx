function Result({score,total,restart}){

return(

<div className="result">

<h1>🎉 Quiz Completed</h1>

<h2>
Your Score: {score}/{total}
</h2>


<button onClick={restart}>
Restart Quiz
</button>


</div>

)

}

export default Result;