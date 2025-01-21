// create posts here with a form 
import Header from '../components/Header'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/UpdatePost.css'

function UpdatePost({editInfo}) {
  console.log(editInfo)
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      
      if (editInfo.id !== undefined) {
        fetch(`${import.meta.env.VITE_API_URL}/jobs/post/${editInfo.id}/update`, {
          method: 'Post', 
          headers: {
            'Authorization': `${localStorage.getItem('SavedToken')}`,
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
          if (response == 'post updated' && editInfo.published == 'true') {
            navigate('/Opportunities')
          } else if (response == 'post updated' && editInfo.published == 'false') {
            navigate('/Unpublished')
          }
          if (typeof response == "object") {
            setMessage(response.errors[0].msg)
          } else {
          setMessage(response);
          }
          
        })
        .catch((err) => {
          setMessage(err.toString());
        });
      } else {
          setMessage('No post found. Please try again');
      }
    }

    const handleBack = (e) => {
      e.preventDefault();

      if (editInfo.published == 'false') {
        navigate('/Unpublished')
      } else {
        navigate('/Opportunities')
      } 
    }

    const handleDelete = (e) => {
      e.preventDefault();
    
      if (editInfo.id !== undefined) {
        fetch(`${import.meta.env.VITE_API_URL}/jobs/post/${editInfo.id}/delete`, {
          method: 'Post', 
          headers: {
            'Authorization': `${localStorage.getItem('SavedToken')}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }

          return response.json();
        })
        .then((response) => {
          if (response == 'Post Deleted' && editInfo.published == 'true') {
            navigate('/Opportunities')
          } else if (response == 'Post Deleted' && editInfo.published == 'false') {
            navigate('/Unpublished')
          }
          setMessage(response);
        })
        .catch((err) => {
          setMessage(err.toString());
        });
      } else {
          setMessage('No post found. Please try again');
      }
    }
    
    return (
      <div className='page'>
        <Header ></Header>
        {/* if user is logged in */}
        <div className="formCard">
          <form method="POST" onSubmit={handleSubmit}>
            <button onClick={handleBack} className='double backButton'>Back</button>
            <div className="formComponent">
              <label htmlFor="title"> Title </label>
              <input type="text" name='title' placeholder='title' defaultValue={undefined===editInfo ? '' : editInfo.title}/> 
            </div>
            <div className="formComponent">
              <label htmlFor="location"> Location </label>
              <input type="text" name='location' placeholder='location' defaultValue={undefined===editInfo ? '' : editInfo.location}/>
            </div>
            <div className="formComponent double">
              <label htmlFor="text"> Text </label>
              <textarea type="text" name='text' placeholder='text' defaultValue={undefined===editInfo ? '' : editInfo.text}/>
            </div>
            <div>
              <label htmlFor="published"> Published </label>
              <input type="checkbox" name='published'defaultChecked={editInfo?.published === "true"}/>
            </div>
              <button className='double'>Update Post</button>
          <button onClick={handleDelete} className='deletePost double'>Delete Post</button>
          <p className='message'>{message}</p>
          </form>
        </div>
      </div>
    )
  }
  
  export default UpdatePost