import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

import {logout} from '../../store/user'

const ProfileDropdown = ()=>{ 

    const dispatch = useDispatch() 
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout()).then(()=>{
            navigate("/")
        })
        
    }

    return(
        <div>
            <ul>
                <li onClick={handleLogout}>Logout</li>
            </ul>
        </div>
    )
}
export default ProfileDropdown