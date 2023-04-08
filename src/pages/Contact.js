const Contact = () => {
  return (
    <div className="row">
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
        Do you have any questions? <br></br> Please do not hesitate to contact
        directly. <br></br> A response should be received within a couple of
        hours
      </h6>
      <form
        className="form"
        action="mailto:feser.mk@gmail.com"
        onSubmit={(event) => {
          event.preventDefault(); // Prevents the form from submitting normally
          const formData = new FormData(event.target); // Creates a FormData object from the form data
          const formValues = Object.fromEntries(formData.entries()); // Converts the FormData object to a plain object
          console.log(formValues); // Outputs the form data to the console (optional)
          event.target.reset(); // Resets the form after submission
        }}
      >
        <input className="" name="name" type="text" placeholder="Name" />
        <input className="" name="email" type="email" placeholder="Email" />
        <input
          className="messageInput"
          name="message"
          type="text"
          placeholder="Message"
        />
        <button type="submit" className="button">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
