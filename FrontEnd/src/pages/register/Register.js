import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className='register'>
            <span className="registertitle">Register</span>
            <form  className="registerform">
                <label>Username</label>
                <input type='text' className='registerinput' placeholder="Enter your email username"></input>
                <label>Email</label>
                <input type='text' className='registerinput' placeholder="Enter your email address"></input>
                <label>Password</label>
                <input type='password' className='registerinput' placeholder="Enter your password"></input>
                <button className='registerbutton'>Register</button>
            </form>
            <Link to='/login' className='loginregisterbutton' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>


        </div>
    )
}
