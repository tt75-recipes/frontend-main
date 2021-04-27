import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/landing.css';

export default function Landing() {
  const [tokenExists, setTokenExists] = useState(false);
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    if (recipe.title.toLowerCase().includes(search.toLowerCase()))
      return true;
  })

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) setTokenExists(true);
    console.log(localStorage);

    if (token) {
      axios.get('https://tt75-recipes.herokuapp.com/api/categories')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
      axios.get('https://tt75-recipes.herokuapp.com/api/recipes')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err))
    }
  }, [])

  const handleSearch = e => setSearch({ ...search, [e.target.name]: e.target.value });
  const handleRadio = e => setRadio({ ...radio, [e.target.name]: e.target.value });

  if (!tokenExists) {
    return (
      <div className='landing'>
        <h1>Secret Family Recipes</h1>
        <div className='container-search-recipes'>
          <aside className='searchbar'>
            <input onChange={handleSearch}
              name='search'
              value={search}
              placeholder='search'
              spellCheck='false'
              autoComplete='off'
            />
            <div onChange={handleRadio}>
              {
                categories.map(category => {
                  return (
                    <label>{category}
                    <input type='radio' value={category} name='radio-categories' />
                    </label>
                  )
                })
              }
            </div>
          </aside>
          <main className='recipelist'>
            {
              filteredRecipes.map(recipe => {
                return (
                  <div className='recipe-card'>
                    <h2>Title:</h2> <p>{recipe.title}</p>
                    <h3>Source:</h3> <p>{recipe.source}</p>
                    <h3>Instructions:</h3> <p>{recipe.instructions}</p>
                    <h3>Ingredients:</h3> <p>{recipe.ingredients}</p>
                    <h3>Category:</h3> <p>{recipe.category}</p>
                  </div>
                )
              })
            }
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