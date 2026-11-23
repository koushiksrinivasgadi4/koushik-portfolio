import React from 'react';

function Login() {

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Back!</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}

export default Login;