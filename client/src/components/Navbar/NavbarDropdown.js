import {useRef, useEffect} from 'react'

import ProfileDropdown from './ProfileDropdown'

const NavbarDropdown = props =>{
    const refMenu = useRef(null)




    const closeOpenMenu = e =>{
        if(!refMenu.current?.contains(e.target)){
            props.setToggleDropdownMenu(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', closeOpenMenu, true)
    },[]) 

    let content;
    if(props.selectedDropdownMenu == 'profile'){
        content = <ProfileDropdown />
    } 


    return(
        <div className='navbar__menu-container'>
             
            {props.toggleDropdownMenu ?
                <div className='navbar__menu' ref={refMenu}>
                    {content}
                </div>
            :null
            }

        </div>
    )
}
export default NavbarDropdown




