import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import '../styles/landing.css'; // we talked about styled-components, but nothing concrete yet -- using plain css for now, can easily change later

export default function Landing() {
  const [tokenExists, setTokenExists] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) setTokenExists(true);
  }, [])

  useEffect(() => {
    axios.get('https://tt75-recipes.herokuapp.com/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
  }, [tokenExists])

  // conditional landing page logic
  //    logged in = display search bar & all the recipes
  //    not logged in = only show register/login
  if (tokenExists) {
    return (
      <div className='landing'>
        <h1>Secret Family Recipes</h1>
        <div className='container-search-recipes'>
          <aside className='searchbar'>
            placeholder
          </aside>
          <main className='recipelist'>
            placeholder
          </main>
        </div>
      </div>
    )
  }
  else {
    return(
      <div className='landing'>
        <h1>Secret Family Recipes</h1>
        <nav className='landing-links'>
          <a href='/register'>Register</a>
          <a href='/login'>Login</a>
        </nav>
      </div>
    )
  }
}