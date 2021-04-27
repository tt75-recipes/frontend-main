import React from 'react';

import { ReactComponent as Logo_Large } from '../images/logo_Large.svg'

export default function Landing() {

  return(
    <>
      <div className='landing'>
        {/* <h2 className='josefin'>Secret Family</h2><h1>Recipes</h1> */}
        <div style={{height:'200px', width: '500px', margin: 'auto'}} >
          <Logo_Large />
        </div>
        <div className='landing-links'>
          <a href='/signup'>Sign Up</a>
          <a href='/login'>Login</a>
        </div>
      </div>
    </>
  );

}