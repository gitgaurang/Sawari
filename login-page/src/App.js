import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google OAuth response here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <GoogleLogin
          clientId="354661754859-t286tm4lnblocd7c2c0hl0q774o2e513.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
