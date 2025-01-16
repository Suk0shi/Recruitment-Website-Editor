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
        setMessage(response);
      })
      .catch((err) => {
        setMessage(err.toString());
      });
    }

  
    return (
      <>
        <Header ></Header>
        <form action={`${import.meta.env.VITE_API_URL}/blog/signUp`} method="POST" onSubmit={handleSubmit}>
            <label htmlFor="username"> Username </label>
            <input type="text" name='username' placeholder='username' required/> <br />
            <label htmlFor="password"> Password </label>
            <input type="password" name='password' placeholder='password' required/> <br />
            <label htmlFor="passwordConfirm"> Confirm Password </label>
            <input type="password" name='passwordConfirm' placeholder='passwordConfirm' required/> <br />
            <button>Sign Up</button>
        </form>
        <p>{message}</p>
        
      </>
    )
  }
  
  export default SignUp