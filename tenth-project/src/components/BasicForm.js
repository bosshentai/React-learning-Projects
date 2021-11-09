import { useState } from "react";

const BasicForm = (props) => {
  // First name
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  // last name
  const [enteredLastName, setEnteredLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);

  // email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // first name
  const firstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameHasError = !firstNameIsValid && firstNameTouched;

  // last name
  const lastNameIsValid = enteredLastName.trim() !== "";
  const lastNameHasError = !lastNameIsValid && lastNameTouched;

  // email
  const emailIsValid = enteredEmail.includes("@");
  const emailHasError = !emailIsValid && emailTouched;

  // const emailIsValid = enteredLastName.includes("@");
  // const emailHasError = !emailIsValid && emailTouched;

  let formIsValid = false;

  //name

  const inputFirstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const nameFirstBlurHandler = (event) => {
    setFirstNameTouched(true);
  };

  //email

  const inputLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameBlurHandler = (event) => {
    setLastNameTouched(true);
  };

  const inputEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid) {
      // console.log("foi tocado")
      return;
    }

    setEnteredFirstName("");
    setFirstNameTouched(false);
  };

  // console.log(nameTouched)

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
            onChange={inputFirstNameHandler}
            onBlur={nameFirstBlurHandler}
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
            onChange={inputLastNameHandler}
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
          onChange={inputEmailHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
