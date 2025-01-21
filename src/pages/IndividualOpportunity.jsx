import '../styles/IndividualOpportunity.css'
import Header from '../components/Header'
import { Link, useNavigate } from "react-router-dom";

function IndividualOpportunity({postInfo}) {

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
            <Link to="/Contact">
                Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualOpportunity