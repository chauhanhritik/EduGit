import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingswrapper">
      <div className="settingstitle">
        <span className="settingsupdatetitle">Update your account</span>
        <span className="settingsdeletetitle">Delete your account</span>
      </div>
      <form className="settingsform">
        <label>Profile Picture</label>
        <div className="settingspp">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg"
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="settingsppicon far fa-user-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          {/*Id='fileInput' links this input to htmlFOR ='fileInput' */}
        </div>
        <label>Username : </label>
        <input type='text' placeholder='safakar'/>
        <label>Email : </label>
        <input type='Email' placeholder='safakar@gmail.com'/>
        <label>Password : </label>
        <input type='password'/>
        <button className='settingssubmit'>Update</button>
      </form>
      
      </div>
      <Sidebar />
    </div>
  );
}
