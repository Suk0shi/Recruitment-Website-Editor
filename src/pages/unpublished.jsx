import { useState } from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import '../styles/Opportunities.css'
import '../App.css'

function Unpublished({setEditInfo, setPostInfo}) {

  const [jobData, setJobData] = useState()

  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/jobs/unpublished`, {
      mode: 'cors',
      headers: {
        'Authorization': `${localStorage.getItem('SavedToken')}`
      }})
      .then((response) => response.json())
      .then((data) => { console.log(data), setJobData(data)})
  }, [ ]);

  const decodeHTML = (input) => {
    const parser = new DOMParser();
    return parser.parseFromString(input, "text/html").documentElement.textContent;
  };

  function redirectIndividual(data) {
    setPostInfo({
      'title':`${decodeHTML(data.title)}`,
      'location':`${decodeHTML(data.location)}`,
      'date':`${data.date}`,
      'text':`${decodeHTML(data.text)}`,
      'published':`${data.published}`,
    });
    navigate('/IndividualOpportunity')
  }
  
  function Card({data}) {
    return (<div className='postCardContainer'>
      {data.map((data, index) => (
        <div className='postCard' key={index+`div`} onClick={() => redirectIndividual(data)}>
          <h3 key={index+`title`}> {decodeHTML(data.title)}</h3>
          <p key={index+`location`}> {decodeHTML(data.location)}</p>
          <p className='date double' key={index+`date`}> {data.date}</p>
          <p className='text double' key={index+`text`}> {decodeHTML(data.text)}</p>
          <Link to="/UpdatePost" className='double' onClick={() => setEditInfo({
              'id':`${data._id}`,
              'title':`${decodeHTML(data.title)}`,
              'location':`${decodeHTML(data.location)}`,
              'text':`${decodeHTML(data.text)}`,
              'published':`${data.published}`,
              })}>
                Edit
          </Link>
        </div>
      ))}
    </div>)  
    }

  return (
    <div className='page'>
      {/* display job posts */}
      <Header></Header>
      <div className='opportunitiesPage'>
        <h1>Unpublished Opportunities</h1>
        <div className='opportunitiesCards'>
          {(jobData === undefined) ? <h1>Loading</h1> :
          (jobData === 'Login required') ? <h1>{jobData}</h1> :
          <Card data = {jobData.post}/>}
        </div>
      </div>
    </div>
  )
}

export default Unpublished