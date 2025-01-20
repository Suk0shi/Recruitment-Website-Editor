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
    <div className='page'>
      <Header/>
      <div className="contactLayout">
        <div className="contactInfo">
          <h1>Let's Talk</h1>
          <p>Office: +44 (0)207 183 6535</p>
          <p>Mobile: +44 (0)7909 722109</p>
          <p>Email: caroline@caroline-condon.com</p>
        </div>
        <div className="formCard">
          <form action="POST" onSubmit={handleSubmit}>
            <div className='formComponent'>
              <label htmlFor="name">*Name</label>
              <input type="text" name="name" required/>
            </div>
            <div className="formComponent">
              <label htmlFor="email">*Email</label>
              <input type="email" name="email" required/>
            </div>
            <div className="formComponent double">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject"/>
            </div>
            <div className="formComponent double">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea> 
            </div>
            <button className='double'>Send</button>
            <p className='double'>{message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact