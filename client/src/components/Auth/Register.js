import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createUser} from '../../store/user'

const Register = props =>{
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch() 

    const handleSubmit = e =>{
        e.preventDefault()

        if (password !== confirmPassword){
            setError('Password does not match')
        } else{
            setError('')
            const userObj = {
                email: email, 
                password: password, 
                username: username, 
                first_name: firstName, 
                last_name: lastName
    
            }
    
            dispatch((createUser(userObj)))

        }
    }

    return(
        <div className='auth__form-container'>
            <div className='auth__form-top'>
                <div className='auth__text-title'>Register</div>
            </div>
            <div className='auth__form-mid'>
                <div className='auth__form-mid-content'>
                    <div className='auth__form-field'>
                    <label>Username:</label>
                        <input 
                            type='text' 
                            placeholder="Username"
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <label>Email:</label>
                        <input 
                            type='text' 
                            placeholder="Email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <label>First Name:</label>
                        <input 
                            type='text' 
                            placeholder="First Name"
                            value={firstName}
                            onChange={e=>setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <label>Last Name:</label>
                        <input 
                            type='text' 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e=>setLastName(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <label>Password:</label>
                        <input 
                            type='password' 
                            placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className='auth__form-field'>
                        <label>Confirm Password:</label>
                        <input 
                            type='password' 
                            placeholder="Confirm Password" 
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='auth__form-mid-submit'>
                    <div className='auth__form-field-button'>
                        <button className='auth__submit-button' disabled={!username || !password || !email || !confirmPassword} onClick={handleSubmit}>Register</button>
                    </div>
                    <div>
                        {error ? 
                            <div className='auth__form-error'>
                                {error}
                            </div>
                        : null
                        }
                    </div>
                </div>
            </div>
            <div className='auth__form-bottom'>
                Need an Account?  <div className='auth__toggle-button' onClick={props.toggleAuth}><div className='auth__toggle-button'>Register Here</div></div>
            </div>
        </div>
    )
}

export default Register
