import './Navbar.css';
import {navItems,NAV_TITLE} from '../../constants/index'
import { Link } from 'react-scroll';

function NavOptions(props){
  return(
    <Link to={props.itemName.toLowerCase()} smooth={true} duration={500}>
      <p>{props.itemName}</p>
    </Link>
  )
}

function Navbar() {
  return (
    <div className="navbar_container">
      <div className='navbar_left'>
        {NAV_TITLE}
      </div>

      <div className='navbar_right'>

        {

        navItems.map(function(data,index){

          return <NavOptions key={data} itemName={data}/>
        
        })

        }

        <a href="tel:+1234567890" className='no-underline'>
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;