import {useState} from 'react'
import { Plus, Bell, Person } from 'react-bootstrap-icons';
import './Navbar.css';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () =>{
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false)
    const [selectedDropdownMenu, setSelectedDropdownMenu] = useState(null)

    const handleToggleDropdownMenu = target=>{
        setSelectedDropdownMenu(target)
        setToggleDropdownMenu(!toggleDropdownMenu)
    }

    return(
        <div className='navbar__container'>
            <div className='navbar__navigation'>
                <div className='navbar__logo'>NW Green Panels</div>
                <div className='spacer'>Cut List Manager</div>
                <div className='navbar__navigation-items'>
                    <ul>
                        <li></li>
                        <li><Plus /></li>
                        <li><Bell /></li>
                        <li><Person onClick={()=>handleToggleDropdownMenu('profile')} /></li>
                    </ul>
                    <NavbarDropdown toggleDropdownMenu={toggleDropdownMenu} setToggleDropdownMenu={setToggleDropdownMenu} selectedDropdownMenu={selectedDropdownMenu}/>
                </div>
            </div>
        </div>
    )
}
export default Navbar