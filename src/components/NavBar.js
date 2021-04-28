import { ReactComponent as LogoNav } from '../images/logo_Nav.svg'

export default function NavBar(){


  return (
    <div className='navbar' >
      <div style={{height:'100px', width: '150px', margin: '0px 80px'}}>
        <LogoNav />
      </div>
      <div className='navbar'>
        <a href='/profile'>Profile</a>
        <a href='/recipes'>Recipes</a>
        <div className='logout'>
          <a href='/logout'>Logout</a>
        </div>
      </div>
    </div>
  )
}