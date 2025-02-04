import '../styles/IndividualOpportunity.css'
import Header from '../components/Header'
import { Link, useNavigate } from "react-router-dom";
import ContactForm from '../components/ContactForm';
import { useEffect, useState } from 'react';

function IndividualOpportunity({postInfo}) {

  const [showForm, setShowForm] = useState(false);
  const [storedPostInfo, setStoredPostInfo] = useState(() => {
    const savedPost = localStorage.getItem("postInfo");
    return savedPost ? JSON.parse(savedPost) : null;
  });
  
  const navigate = useNavigate();
  
  const handleBack = (e) => {
    e.preventDefault();
    if (postInfo.published == 'false') {
        navigate('/Unpublished')
    } else {
      navigate('/Opportunities')
    } 
  }

  useEffect(() => {
    if (postInfo.date !== undefined) {
      setStoredPostInfo(postInfo);
      localStorage.setItem("postInfo", JSON.stringify(postInfo));
    }
    
  }, [postInfo])
  

  return (
    <div className='page'>
      <Header/>
      <div className='opportunitiesPage'>
        <div className='opportunitiesCards'>
          <div className='individualPostCard'>
            <button onClick={handleBack} className='backButton'>Back</button>
            <h3>{storedPostInfo.title}</h3>
            <p className='location'>{storedPostInfo.location}</p>
            <p className='date'>{storedPostInfo.date}</p>
            <p className='text'>{storedPostInfo.text}</p>
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