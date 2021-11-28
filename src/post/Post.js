import "./post.css";

export default function Post() {
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
          <span className="postcat">Music </span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">Lorem ipsum dolor sit</span>
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
