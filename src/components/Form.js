// COPIED FROM ACTIVITY 15 - have not fully reviewed it yet
import React, { useState } from "react";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ME: Adding email and message input for the form
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // ME: Added to get value of email and message
    const { name, value, email, message } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // ME: Dont think I need this since I am not rendering the hello text at top of form like activity did - REWRITE IF ELSE STATEMENT HERE
    // return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // ME: removed aler - Alert the user their first and last name, clear the inputs
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        {/* Will have to add more input text box for message option */}
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
