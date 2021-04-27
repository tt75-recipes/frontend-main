import React from 'react';


export default function Recipe() {

  return(
    <div className='recipe'>
      <h2>Recipe Title</h2>
      <hr />
        <button>Edit</button>
        <button>Delete</button>
        <div className='content-recipe'>
            <h3>Ingredients</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur repellat inventore excepturi quae maxime veniam mollitia in, voluptatum distinctio unde non? Labore, fuga at pariatur repudiandae magni et nam!</p>
            
            <h3>Directions</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores, est, quas nihil eveniet ea illo neque consequatur quia inventore, voluptate eum laborum quaerat accusantium eos rerum saepe nesciunt iste.</p>
      
        </div>
    </div>
  );

}