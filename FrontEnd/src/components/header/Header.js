import "./Header.css";
import logo from './logo.jpg';

export default function Header() {
    return (
        <div className='header'>
            <div className="headertitles">
                <span className="headertitlesm" >Courses and questions both at one place</span>
                <span className="headertitlelg" >Learn with EDUGIT with with no concept left uncovered in DS & algorithms</span>
            </div>
            {/* <img className="headerimg" src="https://drive.google.com/file/d/17fIbIU0eQD3-mKsXlesDEtOpblIQAy5N/view?usp=sharing" alt="" srcset="" /> */}
            <img src={logo} alt="Logo" />
        </div>
    )
}
