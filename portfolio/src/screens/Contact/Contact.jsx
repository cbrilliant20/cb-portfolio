import "./Contact.css"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_tywowci",
        "template_5ulc3ln",
        e.target,
        "user_ttvC8yV2iD40DK9bYGip7"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div id="contact-container">
      <h2>Contact</h2>
      <p>Have a question or want to work together?</p>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>Submit</button>
      </form>
      <a href="#home-container">
        <FontAwesomeIcon icon={faAngleDoubleUp} className="up" />
      </a>
    </div>
  )
}

export default Contact
