import '../styles/Contact.css'
import { useState } from 'react';
import Header from '../components/Header'
import ContactForm from '../components/ContactForm';

function Contact() {

  return (
    <div className='page'>
      <Header/>
      <ContactForm/>
    </div>
  )
}

export default Contact