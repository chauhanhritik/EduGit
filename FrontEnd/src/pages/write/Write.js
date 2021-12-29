import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://store.hp.com/app/assets/images/uploads/prod/10-essential-computer-maintenance-tips-hero156657824639785.jpg?impolicy=prdimg&imdensity=1&imwidth=1000"
        className="writeimg"
        alt=""
        srcset=""
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeinput"
            autoFocus={true}
          ></input>
        </div>
        <div className="writeformgroup">
          <textarea
            className="writetext writeinput"
            placeholder="Tell your story"
            type="text"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
}
