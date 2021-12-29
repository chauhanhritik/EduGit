import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartitle">About ME</span>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7BiQ7AEUOpTwEjCyst0jHDri-Nfk1jvNRJkO2c11BBLktqzWlTWnJD3mGzUiPLIWkfA&usqp=CAU"
                        alt=""
                        srcset=""
                    />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                        deleniti, adipisci atque facilis tenetur eius sapiente deserunt
                        saepe? Rerum incidunt commodi ea soluta delectus aliquid expedita
                        odit perspiciatis placeat illum?
                    </p>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">
                    Categories
                </span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitems">life</li>
                    <li className="sidebarlistitems">music</li>
                    <li className="sidebarlistitems">style</li>
                    <li className="sidebarlistitems">sports</li>
                    <li className="sidebarlistitems">tech</li>
                    <li className="sidebarlistitems">cinema</li>
                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">Follow Us</span>
                <div className="sidebarsocial">
                    <i className="sidebaricons fas fa-user-graduate"></i>
                    <i className="sidebaricons fab fa-instagram"></i>
                    <i className="sidebaricons fab fa-twitter-square"></i>    
                </div>    
                
            </div>
        </div>
    );
}
