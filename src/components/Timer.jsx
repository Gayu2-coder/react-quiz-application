import { useEffect } from "react";

function Timer({time, setTime}) {

  useEffect(() => {

    if(time === 0) return;

    const timer = setInterval(()=>{
      setTime(time - 1);
    },1000);


    return ()=>clearInterval(timer);

  },[time]);


  return (
    <h3>
      ⏱ Time Left: {time}s
    </h3>
  );
}

export default Timer;