import "./Home.css";
import Header from "../header/Header.js"
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";

export default function Home() {
    return (
        <>
        <Header/>  {/*If kept in NEXT div with the rest of the tags, then they will appear sideways*/}
        <div className="home"> 
            <br/>
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
