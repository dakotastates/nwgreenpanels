import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/user'


const Login = props =>{
    // const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() 
    const { error } = useSelector(state => state.user)

    const handleSubmit = e =>{
        e.preventDefault()
        const authObj = {
            email: email, 
            password: password
        }
        // console.log('AuthUser:', authObj)
        dispatch(login(authObj))

    }

    return(
        <div className='auth__form-container'>
            <div className='auth__form-top'>
                <div className='auth__text-title'>Login</div>
            </div>
            <div className='auth__form-mid'>
                <div className='auth__form-mid-content'>
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
                        <label>Password:</label>
                        <input 
                            type='password' 
                            placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='auth__form-mid-submit'>
                    <div>
                        <button className='auth__submit-button' disabled={!email || !password} onClick={handleSubmit}>Login</button>
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

export default Login

{/* <div className='auth__text-title'>Login</div>
<div className='auth__form'>
    <form>
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
            <label>Password:</label>
            <input 
                type='password' 
                placeholder="Password" 
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
        </div>

        <div className='auth__form-field-button'>
            <button className='auth__submit-button' disabled={!email || !password} onClick={handleSubmit}>Login</button>
        </div>

    </form>
</div>
<div className='auth__form-bottom'>
    Need an Account? <div className='auth__toggle-button' onClick={props.toggleAuth}>Register Here</div>
</div>
{error ? 
    <div className='auth__form-bottom'>
        {error}
     </div>
: null
} */}