import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import '../styles/landing.css'; // we talked about styled-components, but nothing concrete yet -- using plain css for now, can easily change later

export default function Landing() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://tt75-recipes.herokuapp.com/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
  }, [])

  return(
    <div className='landing'>
      <h1>Secret Family Recipes</h1>
      <nav className='landing-links'>
        <a href='/register'>Register</a>
        <a href='/login'>Login</a>
      </nav>
    </div>
  );

}