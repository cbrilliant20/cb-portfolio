import "./Contact.css"

const Contact = () => {
  return (
    <div id="contact-container">
      <h2>Contact</h2>
      <p>Have a question or want to work together?</p>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
