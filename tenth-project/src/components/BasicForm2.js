import useInput2 from "../hooks/use-input2";


export const BasicForm2 = (props) => {

  const {
    value: enteredFirstName,
    IsValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameHandler,
    valueBlurHanlder: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput2 ((value) => value.trim !== "")


  const {
    value: enteredLastName,
    IsValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameHandler,
    valueBlurHanlder: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput2( (value) => value.trim !== "")


  const {
    value: enteredEmail,
    IsValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailHandler,
    valueBlurHanlder: emailBlurHandler,
    reset: emailReset,
  } = useInput2 ( (value) => value.includes("@"))


  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }


  const formSubmissionHandler = (event) =>{
    event.preventDefault();

    if (!formIsValid){
      return;
    }

    firstNameReset()
    lastNameReset()
    emailReset()
  }




  const nameInputClasses = firstNameHasError
  ? "form-control invalid"
  : "form-control";

const lastNameInputClasses = lastNameHasError
  ? "form-control invalid"
  : "form-control";

const emailInputClasses = emailHasError
  ? "form-control invalid"
  : "form-control";


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          {firstNameHasError && (
            <p className="error-text">First Name muts not be empty</p>
          )}
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        {
          emailHasError && (
            <p className="error-text">Email is incorrect</p>
          )
        }
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

