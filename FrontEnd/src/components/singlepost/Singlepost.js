import "./singlepost.css";

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          src="https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg"
          alt=""
          className="singlepostimg"
        />
        <h1 className="singleposttitle">
        Learn Data structures with EDUGIT
          <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>My Name</b>
          </span>
          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdescription">
          A data structure is a particular way of organizing data in a computer
          so that it can be used effectively. Why learn data structures?  Time
          is precious.  Memory at industrial levels is expensive. To Crack the
          Interviews of the Top Product Based Companies Did you know that under
          the hood all your SQL and Linux commands are algorithms and data
          structures? Engineers working in Google, Microsoft, Facebook,
          Amazonlike such companies are different than others and paid higher as
          compared to other companies…but why? In these companies coding is just
          the implementation and roughly takes 20-30% of the time allotted to a
          project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          nobis rem blanditiis adipisci molestias eveniet deserunt. Iusto sunt
          facere perspiciatis temporibus sapiente inventore repellendus
          voluptatem, ad recusandae accusamus amet impedit? Most of the time
          goes into designing things with the best and optimum algorithms to
          save on the company’s resources all using DATA STRUCTURES.
        </p>
      </div>
    </div>
  );
}
