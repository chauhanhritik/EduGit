
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home.js";
import Ques from "./pages/questions/Ques.js";
import Questions from "./pages/questions/Questions.js";
import Setting from "./pages/settings/Setting.js";
import Single from "./pages/single/Single.js";
import Write from "./pages/write/Write.js";



function App() {
  let title='EDUGIT'
  
  // const mongoose = require('mongoose');


  // const db = "mongodb+srv://Hritik:<password>@cluster0.b2c1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  // mongoose.connect(db);
 
  
  return (
  <>
    <Navbar title={title}></Navbar>
      {/* <div style={{color:'white'}}>
        blog app */}
      {/* </div> */}

     {/* <Home title={title}/>  */}
     {/* <Single />  */}
     {/* <Write/> */}
     <Setting/> 
     {/* <Questions/> */}
     {/* <Ques/> */}
     </>
  );
}

export default App;
