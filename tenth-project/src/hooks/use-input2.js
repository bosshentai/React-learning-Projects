import { useState } from "react";

const useInput2 = (validateValue) => {
  const [enteredValue, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueHasError = !valueIsValid && isTouched;

  const inputValueHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHanlder = () => {
    setIsTouched(true);
  };

  const reset = ()=>{
    setValue("");
    setIsTouched(false);
    
  }

  return {
    value: enteredValue,
    IsValid: valueIsValid,
    hasError: valueHasError,
    valueChangeHandler: inputValueHandler,
    valueBlurHanlder: valueBlurHanlder,
    reset: reset,
  };
};

export default useInput2;
