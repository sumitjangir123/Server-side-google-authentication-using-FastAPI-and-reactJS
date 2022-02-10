import './App.css';
import React from 'react';

import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    if (response.tokenId){
      fetch('http://localhost:8000/auth?token='+ response.tokenId,{
        credentials: 'include',
        // To cause browsers to send a request with credentials included on both same-origin and cross-origin calls, 
        // add credentials: 'include' to the init object you pass to the fetch() method.
       })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        alert(myJson)
      });
    }
}

const temp = () =>{
  fetch('http://localhost:8000',{
    credentials:'include' 
  })
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    alert(myJson)
  });
}

function App() {
  return (
    <div className="App">
        <GoogleLogin
          clientId="116988534719-0r0.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <br/>
        <button onClick={temp}> Check session </button>
    </div>
  );
}

export default App;
