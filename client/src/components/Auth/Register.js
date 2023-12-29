import { useState } from 'react'

const Register = props =>{
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        console.log('username:', username)
    }

    return(
        <div className='auth__form-container'>
            <div className='auth__text-title'>Register</div>
            <div className='auth__form'>
                <form>
                    <div className='auth__form-field'>
                        <input 
                            type='text' 
                            placeholder="Username"
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <input 
                            type='text' 
                            placeholder="Email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <input 
                            type='text' 
                            placeholder="Name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>
                    <div className='auth__form-field'>
                        <input 
                            type='password' 
                            placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className='auth__form-field'>
                        <input 
                            type='password' 
                            placeholder="Confirm Password" 
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className='auth__form-field-button'>
                        <button className='auth__submit-button' disabled={!username || !password || !email || !confirmPassword} onClick={handleSubmit}>Register</button>
                    </div>
                    <div className='auth__form-field'>
                        Have an Account? <div className='auth__toggle-button' onClick={props.toggleAuth}>Login Here</div>
                    </div>
                    

                </form>
            </div>
            {error ?
                <div className='auth__form-bottom'>
                    Error
                </div>
            : null
            }   
        </div>
    )
}

export default Register