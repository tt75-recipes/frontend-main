import React from 'react';


export default function Recipe() {

  return(
    <div className='recipe'>
      <h1>Recipe Title</h1>
      <hr />
        <button>Edit</button>
        <button>Delete</button>
        <div className='content-recipe'>
            <h2>Ingredients</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
            
            <h2>Directions</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores, est, quas nihil eveniet ea illo neque consequatur quia inventore, voluptate eum laborum quaerat accusantium eos rerum saepe nesciunt iste.</p>
      
        </div>
    </div>
  );

}