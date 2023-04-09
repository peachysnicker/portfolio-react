const Contact = () => {
  return (
    <div>
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
        Do you have any questions?<br></br> Please do not hesitate to contact
        directly. <br></br> A response should be received within a couple of
        hours.
      </h6>
      <a href="mailto:feser.mk@gmail.com">
        <h6 className="formSubTitle2">
          Email directly to feser.mk@gmail.com <br></br>{" "}
          <p className="emailLink2">📧</p>
        </h6>
      </a>
      <form
        className="form"
        action="https://formsubmit.co/feser.mk@gmail.com"
        method="post"
        onSubmit={(event) => {
          event.preventDefault(); // Prevents the form from submitting normally
          const formData = new FormData(event.target); // Creates a FormData object from the form data
          const formValues = Object.fromEntries(formData.entries()); // Converts the FormData object to a plain object
          console.log(formValues); // Outputs the form data to the console (optional)
          event.target.reset(); // Resets the form after submission
        }}
      >
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="email" placeholder="Email" />
        <input
          className="messageInput"
          name="message"
          type="text"
          placeholder="Message"
        />
        <input
          type="hidden"
          name="_next"
          value="https://mariahfeser.herokuapp.com/thankyou"
        />
        <button type="submit" className="button">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
