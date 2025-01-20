import { useState } from 'react';
import Header from '../components/Header'

function SignUp() {
  
  const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      
      fetch(`${import.meta.env.VITE_API_URL}/jobs/signUp`, {
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
        <div className="formCard">
          <form action={`${import.meta.env.VITE_API_URL}/blog/signUp`} method="POST" onSubmit={handleSubmit}>
          <h1 className='double'>Create Account</h1>
            <div className="formComponent double">
              <label htmlFor="username"> Username </label>
              <input type="text" name='username' placeholder='' required/> 
            </div>
            <div className="formComponent">
              <label htmlFor="password"> Password </label>
              <input type="password" name='password' placeholder='' required/> 
            </div>
            <div className="formComponent">
              <label htmlFor="passwordConfirm"> Confirm Password </label>
              <input type="password" name='passwordConfirm' placeholder='' required/> 
            </div>
              <button className='double'>Sign Up</button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    )
  }
  
  export default SignUp