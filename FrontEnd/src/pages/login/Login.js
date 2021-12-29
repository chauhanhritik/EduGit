import './login.css';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className='login'>
            <span className="logintitle">Login</span>
            <form  className="loginform">
                <label>Email</label>
                <input type='text' className='logininput' placeholder="Enter your email address"></input>
                <label>Password</label>
                <input type='password' className='logininput' placeholder="Enter your password"></input>
                <button className='loginbutton'>Login</button>
            </form>
            <Link to='/register' className='loginregisterbutton' style={{ textDecoration: 'none', color: 'inherit' }}>
                Register
            </Link>

        </div>
    )
}
