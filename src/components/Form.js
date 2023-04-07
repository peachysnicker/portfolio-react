import React, { useState } from "react";

function Form() {
  // Here we set state variables for name using `useState`
  const [name, setName] = useState("");

  // ME: Adding email and message input for the form?
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
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contactForm">
      <h4 id="waviy" className="formTitle">
        <span style={{ "--i": 0 }}>C</span>
        <span style={{ "--i": 1 }}>O</span>
        <span style={{ "--i": 2 }}>N</span>
        <span style={{ "--i": 3 }}>T</span>
        <span style={{ "--i": 4 }}>A</span>
        <span style={{ "--i": 0 }}>C</span>
        <span style={{ "--i": 3 }}>T</span>
      </h4>
      <h6 className="formSubTitle">
        Get in touch or send an email directly to feser.mk@gmail.com
      </h6>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
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
          className="messageInput"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" className="Button" onClick={handleFormSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
