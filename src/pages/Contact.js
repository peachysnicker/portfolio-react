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
      <form className="form">
        <input
          className=""
          value="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className=""
          value="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="messageInput"
          value="message"
          name="message"
          type="text"
          placeholder="Message"
        />
        <button type="button" className="button">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
