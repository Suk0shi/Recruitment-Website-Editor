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
          setMessage(response);
          
        })
        .catch((err) => {
          setMessage(err.toString());
        });
      } else {
          setMessage('No post found. Please try again');
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
      <>
        <Header ></Header>
        {/* if user is logged in */}
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="title"> Title </label>
            <input type="text" name='title' placeholder='title' defaultValue={undefined===editInfo ? '' : editInfo.title}/> <br />
            <label htmlFor="location"> Location </label>
            <input type="text" name='location' placeholder='location' defaultValue={undefined===editInfo ? '' : editInfo.location}/> <br />
            <label htmlFor="text"> Text </label>
            <input type="text" name='text' placeholder='text' defaultValue={undefined===editInfo ? '' : editInfo.text}/> <br />
            <label htmlFor="published"> Published </label>
            <input type="checkbox" name='published'defaultChecked={editInfo?.published === "true"}/> <br />
            <button>Update Post</button>
        </form>
        <button onClick={handleDelete} className='deletePost'>Delete Post</button>
        <p className='message'>{message}</p>
      </>
    )
  }
  
  export default UpdatePost