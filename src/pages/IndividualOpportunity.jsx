import '../styles/IndividualOpportunity.css'
import Header from '../components/Header'
import { Link, useNavigate } from "react-router-dom";
import ContactForm from '../components/ContactForm';
import { useState } from 'react';

function IndividualOpportunity({postInfo}) {

  const [showForm, setShowForm] = useState(false);
  
  const navigate = useNavigate();
  
  const handleBack = (e) => {
    e.preventDefault();
    if (postInfo.published == 'false') {
        navigate('/Unpublished')
    } else {
      navigate('/Opportunities')
    } 
  }

  return (
    <div className='page'>
      <Header/>
      <div className='opportunitiesPage'>
        <div className='opportunitiesCards'>
          <div className='individualPostCard'>
            <button onClick={handleBack} className='backButton'>Back</button>
            <h3>{postInfo.title}</h3>
            <p className='location'>{postInfo.location}</p>
            <p className='date'>{postInfo.date}</p>
            <p className='text'>{postInfo.text}</p>
            <p>To apply for this job...</p>
            <a onClick={() => setShowForm(!showForm)}>Contact Us</a>
            {showForm ? <div className="contactMini">
              <ContactForm/>
            </div>
            : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualOpportunity