import './Navbar.css';
import {navItems,NAV_TITLE} from '../../constants/index'

function NavOptions(props){
  return(
    <p>{props.itemName}</p>
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
      </div>
    </div>
  );
}

export default Navbar;