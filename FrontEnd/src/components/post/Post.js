import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img className="postimg" src={props.passimage} alt="" srcset="" />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Computer science </span>
          <span className="postcat">Data structures</span>
        </div>
        <a href={props.link} className="posttitle">
          {props.title}
        </a>
        <hr />
        {/* <span className="postdate">1 hour ago</span> */}
      </div>
      <p className="postdescription">{props.content}</p>
    </div>
  );
}
