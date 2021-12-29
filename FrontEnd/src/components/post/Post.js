import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://i.pinimg.com/originals/a7/8c/7b/a78c7bc1c64b013f0180c8d22457fa2f.jpg"
        alt=""
        srcset=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Computer science </span>
          <span className="postcat">Data structures</span>
        </div>
        <span className="posttitle">Data structures with {props.title}</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className='postdescription'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit facilis nulla? Quos ipsa necessitatibus amet numquam at,
        accusantium temporibus non, ab nostrum voluptatum ex sunt velit
        laudantium. Dicta, quae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit facilis nulla? Quos ipsa necessitatibus amet numquam at,
        accusantium temporibus non, ab nostrum voluptatum ex sunt velit
        laudantium. Dicta, quae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit facilis nulla? Quos ipsa necessitatibus amet numquam at,
        accusantium temporibus non, ab nostrum voluptatum ex sunt velit
        laudantium. Dicta, quae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit facilis nulla? Quos ipsa necessitatibus amet numquam at,
        accusantium temporibus non, ab nostrum voluptatum ex sunt velit
        laudantium. Dicta, quae!
      </p>
    </div>
  );
}
