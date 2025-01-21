// create posts here with a form 
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function CreatePost() {
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      
      fetch(`${import.meta.env.VITE_API_URL}/jobs/post`, {
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
        if (response == 'post sent' && payload.published == 'on') {
          navigate('/Opportunities')
        } else if (response == 'post sent' && payload.published !== 'on') {
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
    }

    return (
      <div className='page'>
        <Header ></Header>
        {/* if user is logged in */}
        <div className="formCard">
          <form method="POST" onSubmit={handleSubmit}>
          <h1 className='double'>Create Post</h1>
          <div className="formComponent">
              <label htmlFor="title"> Title </label>
              <input type="text" name='title' placeholder=''/> 
          </div>
          <div className="formComponent">
              <label htmlFor="location"> Location </label>
              <input type="text" name='location' placeholder=''/> 
          </div>
          <div className="formComponent double">
              <label htmlFor="text"> Text </label>
              <textarea type="text" name='text' placeholder=''/> 
          </div>
          <div>
              <label htmlFor="published"> Published </label>
              <input type="checkbox" name='published'/> 
          </div>
              <button className='double'>Post</button>
          <p>{message}</p>
          </form>
        </div>
      </div>
    )
  }
  
  export default CreatePost