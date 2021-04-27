import { ReactComponent as Logo_Nav } from '../images/logo_Nav.svg'

export default function NavBar(){


  return (
    <div className='navbar' >
      <div style={{height:'100px', width: '150px', margin: '0px 80px'}}>
        <Logo_Nav />
      </div>
      <div className='navbar links'>
        <a href='/profile'>Profile</a>
        <a href='/recipes'>Recipes</a>
        {/* <div className='landing-links'> */}
          <a href='/logout'>Logout</a>
        {/* </div> */}
      </div>
    </div>
  )
}