import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const sumarCounter = (value= 1) =>{
        setCounter((current) => current+value)
    }
    const restarCounter = (value = 1) =>{
        setCounter((current) => current-value)
    }
    const resetCounter = () =>{
        setCounter(initialValue);
    }

  return {
    counter,
    sumarCounter,
    restarCounter,
    resetCounter
  }
}


