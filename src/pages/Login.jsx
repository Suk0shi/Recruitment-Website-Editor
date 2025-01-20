import Header from '../components/Header'
import { useState } from 'react';

function Login() {
  
  const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      
      fetch(`${import.meta.env.VITE_API_URL}/log-in`, {
        method: 'Post', 
        headers: {
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
        let token = response.token;
        localStorage.setItem("SavedToken", 'Bearer ' + token);
        setMessage('Logged in');
      })
      .catch((err) => {
        setMessage(err.toString());
      });
    }

    return (
      <div className='page'>
        <Header ></Header>
        <div className="formCard">
          <form action={`${import.meta.env.VITE_API_URL}/log-in`} method="POST" onSubmit={handleSubmit}>
            <h1 className='double'>Login</h1>
            <div className="formComponent">
              <label htmlFor="username"> Username </label>
              <input type="text" name='username' placeholder=''/>
            </div>
            <div className="formComponent">
              <label htmlFor="password"> Password </label>
              <input type="password" name='password' placeholder=''/>
            </div>
            <button className='double'>Log In</button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    )
  }
  
  export default Login