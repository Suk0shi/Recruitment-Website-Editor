import '../styles/Contact.css'
import { useState } from 'react';
import Header from '../components/Header'

function Contact() {

  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

  const formData = new FormData(e.target);
  const payload = Object.fromEntries(formData);
  
  fetch(`${import.meta.env.VITE_API_URL}/jobs/sendEmail`, {
    method: 'Post', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
  })
  .then((response) => {
    setMessage(response);
    if (response === 'Email sent successfully!') {
      e.target.reset();
    }
  })
  .catch((err) => {
    setMessage(err.toString());
  });
}

  return (
    <>
      <Header/>
      <h1>Contact</h1>
      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">*Name</label>
        <input type="text" name="name" required/>
        <label htmlFor="email">*Email</label>
        <input type="email" name="email" required/>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject"/>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button>Send</button>
      </form>
      <p>{message}</p>
    </>
  )
}

export default Contact