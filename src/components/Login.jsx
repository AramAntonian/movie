import '../style/Login.css'
import polygon from '../Polygon 2.svg'
import fget from '../F.get.svg'
import vec1 from '../Vector 111.svg'
import vec2 from '../Vector 112.svg'
import rect from '../Rectangle 48.svg'
import { Link } from 'react-router-dom'

function Login(){


    return(
        <div className='Login'>
           <Link to = '/'><img src = {fget} alt = 'fget'  className='login-fget'/></Link>
            <div className='signin-text'>Sign In</div>
            <div>
                <div className='email'>
                    <div className='discrb'>Email</div>
                    <input type = 'email' className='email-input' placeholder='username'/>
                </div>
                <div className='password'>
                    <div className='discrb'>Password</div>
                    <input type = 'email' className='email-input' placeholder= '*********' />
                </div>
                <div className='rem-forgot'>
                    <div className='remember'>
                        <input type='checkbox' s/>
                        <div>Remember me</div>
                    </div>
                    <div className = 'forgot'>Forget password?</div>
                </div>
                <div className='end'>
                    <div className='submit'>Sign up</div>
                    <div className='Reg'>Registration</div>
                </div>
            </div>
            <img src = {polygon} alt = 'polygon' className='polygon'/>
            <img src = {vec1} alt = 'vec1' className='vec1' />
            <img src = {vec2} alt = 'vec2' className='vec2' />
            <img src = {rect} alt = 'rect' className='rect' />
        </div>
    )
}

export default Login