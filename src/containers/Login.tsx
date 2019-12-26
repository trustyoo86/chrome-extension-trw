import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const [isSigned, setSigned] = useState(false); 

  const onHandleClick = () => {
    setSigned(true);
  };

  return (
    <div>
      <p>Login!</p>
      <button onClick={onHandleClick}>Login Button</button>
      {
        isSigned && <Redirect to='/test' />
      }
    </div>
  );
};

export default Login;
