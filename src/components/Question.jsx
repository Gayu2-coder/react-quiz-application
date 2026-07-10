function Question({
question,
options,
selectedAnswer,
setSelectedAnswer
}) {

return (

<div>

<h2>{question}</h2>

<div className="options">

{
options.map((option,index)=>(

<button

key={index}

className={
selectedAnswer===option
?"selected"
:""
}

onClick={()=>setSelectedAnswer(option)}

>

{option}

</button>

))

}

</div>

</div>

);

}

export default Question;