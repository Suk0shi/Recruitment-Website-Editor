import '../styles/Opportunities.css'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Opportunities({setEditInfo}) {

  const [jobData, setJobData] = useState()
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/jobs/posts`, {
      mode: 'cors'})
      .then((response) => response.json())
      .then((data) => { console.log(data), setJobData(data)})
  }, [ ]);

  
  function Card({data}) {
  return (<div className='postCardContainer'>
    {data.map((data, index) => (
      <div className='postCard' key={index+`div`}>
        <h3 key={index+`title`}> {data.title}</h3>
        <p className='date' key={index+`date`}> {data.date}</p>
        <p key={index+`location`}> {data.location}</p>
        <p className='text' key={index+`text`}> {data.text}</p>
        <Link to="/UpdatePost" onClick={() => setEditInfo({
            'id':`${data._id}`,
            'title':`${data.title}`,
            'location':`${data.location}`,
            'text':`${data.text}`,
            'published':`${data.published}`,
            })}>
              Edit
        </Link>
      </div>
    ))}
  </div>)  
  }

  return (
    <>
      <Header/>
      <p>Opportunities Page</p>
      {(jobData === undefined) ? <h1>Loading</h1> :
      <Card data = {jobData.post}/>}
    </>
  )
}

export default Opportunities