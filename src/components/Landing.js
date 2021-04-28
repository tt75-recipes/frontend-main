import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import { ReactComponent as LogoLarge } from '../images/logo_Large.svg'
import { axiosWithAuth } from '../axiosWithAuth.js';
import { useHistory } from "react-router-dom";

export default function Landing() {
  const history = useHistory();
  const [tokenExists, setTokenExists] = useState(false);
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState({ text: '' }); // hack to get state to work
  const [radio, setRadio] = useState(0);

  const filteredRecipes = recipes.filter(recipe => {
    // a bit hacky, but works
    // console.log(recipe.category_id, parseInt(radio));
    if (recipe.title.toLowerCase().includes(search.text.toLowerCase()) && parseInt(radio) === 0)
      return true;
    else if (recipe.title.toLowerCase().includes(search.text.toLowerCase()) && recipe.category_id === parseInt(radio))
      return true;
    return false;
  })

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setTokenExists(true);
    // (token && console.log(JSON.parse(token)));

    if (token) {
      axiosWithAuth().get('https://tt75-recipes.herokuapp.com/api/categories')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err));
      axiosWithAuth().get('https://tt75-recipes.herokuapp.com/api/recipes')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err));
    }
  }, [])

  const handleSearch = e => setSearch({ ...search, [e.target.name]: e.target.value });
  const handleRadio = e => {
    setRadio(e.target.value);
  }

  if (tokenExists) {
    return (
      <div className='landing'>
        <div id='logo' style={{height:'200px', width: '500px', margin: 'auto'}} >
          <LogoLarge />
        </div>
        <div className='container-search-recipes'>
          <aside className='searchbar'>
            <button className='new-recipe-button' onClick={() => history.push('/api/recipes/newRecipe')}>Add Recipe</button>
            <input id='searchtext' onChange={handleSearch}
              name='text'
              value={search.text}
              placeholder='search'
              spellCheck='false'
              autoComplete='off'
            />
            <div className='category-option' onChange={handleRadio}>
              <input type='radio' value='0' name='radio-categories' defaultChecked></input>
              <label>none</label>
              {
                categories.map((category, index) => {
                  return (
                    <div key={index} className='category-option'>
                      <input type='radio' value={category.category_id} name='radio-categories' />
                      <label>{category.category_name}</label>
                    </div>
                  )
                })
              }
            </div>
          </aside>
          <main className='recipelist'>
            {
              filteredRecipes.map((recipe, index) => {
                return (
                  <div key={index} className='recipe-card' onClick={() => history.push(`/api/recipes/${recipe.recipe_id}`)}>
                    <h2>{recipe.title}</h2>
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