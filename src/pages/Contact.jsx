import '../styles/Contact.css'
import Header from '../components/Header'

function Contact() {

  return (
    <>
      <Header/>
      <h1>Contact</h1>
      <form action="">
        <label htmlFor="name">*Name</label>
        <input type="text" name="name" id="name" required/>
        <label htmlFor="email">*Email</label>
        <input type="email" name="email" id="email" required/>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject"/>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default Contact