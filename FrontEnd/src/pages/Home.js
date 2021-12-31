import "./Home.css";
import Header from "../components/header/Header"
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home(props) {
    return (
        <>
        <Header title={props.title}/>  {/*If kept in NEXT div with the rest of the tags, then they will appear sideways*/}
        <div className="home"> 
            <br/>
            <Posts title={props.title}/>
            {/* <Sidebar/> */}
        </div>
        </>
    )
}
