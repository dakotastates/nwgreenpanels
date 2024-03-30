import { useState } from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import '../components/Auth/Auth.css'
// import '../components/Auth/Auth.css'

const AuthPage = () =>{
    const [toggleAuth, setToggleAuth] = useState(false)

    const handleToggleAuth = () => setToggleAuth(!toggleAuth)
    

    return(
        <div className='auth__container'> 
            <div className='auth__image'>Northwest Green Panels Cutlist Manager</div>
            <div className='auth__content-container'>
                
                <div className='auth__content'>
                    {toggleAuth ? 
                        <Register toggleAuth={handleToggleAuth}/>
                    : 
                        <Login toggleAuth={handleToggleAuth} /> 
                    }
                </div>
            </div>
        </div>
    )
} 

export default AuthPage
