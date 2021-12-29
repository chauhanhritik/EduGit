import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {/* <Post     />           */}
      {/* <Post
        title={`Learn Data structures with ${props.title}`}
        passimage={`https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg`}
        content={`A data structure is a particular way of organizing data in a
computer so that it can be used effectively.
Why learn data structures?
 Time is precious.
 Memory at industrial levels is expensive.
To Crack the Interviews of the Top Product Based Companies
Did you know that under the hood all your SQL and
Linux commands are algorithms and data structures?
Engineers working in Google, Microsoft, Facebook, Amazonlike
such companies are different than others and paid higher
as compared to other companies…but why? In these
companies coding is just the implementation and roughly
takes 20-30% of the time allotted to a project. Most of the
time goes into designing things with the best and optimum
algorithms to save on the company’s resources all using
DATA STRUCTURES.`}
      />
      <Post
        title={"14 Patterns to Ace Any Coding Interview Questions"}
        passimage={"https://insights.dice.com/wp-content/uploads/2018/09/Tech-Interviews-Tech-Pros-Dice-1.png"}
        content={`The process of preparing for coding interviews is anxiety-inducing for many developers. 
        There’s so much material to cover, and often much of it feels irrelevant to what devs are doing in their day jobs,
        which only adds to the stress. One of the outcomes of this is that it’s now common for developers to spend
        weeks combing through hundreds of interview questions on sites like LeetCode. One of the most common points of 
        anxiety developers that I’ve talked to have before the interview is: Have I solved enough practice questions? 
        Could I have done more? That’s why I try to focus on helping developers grasp the underlyingpatterns behind each 
        question — so they don’t have to worry about solving hundreds of problems and suffer from Leetcode fatigue. If you
        understand the generic patterns, you can use them as a template to solve a myriad of other problems with slight 
        variations. Here, I’ve laid out the top 14 patterns that can be used to solve any coding interview question, as well 
        s how to identify each pattern, and some example questions for each. This just touches the surface — I strongly 
        recommend checking out Grokking the Coding Interview: Patterns for Coding Questions for comprehensive explanations, 
        examples, and coding practice.`}
      />
      <Post title={"A graphical introduction to dynamic programming"} 
      passimage={"https://miro.medium.com/max/2400/1*NTliycxTCTBX51Kh9YK2hw.png"}
       content={`I’ve been helping a friend understand dynamic programming (DP for short), so I’ve been on the lookout 
       for good resources. The topic is covered all across the web, but I found many of them focused on the code, and not 
       enough on the beautiful visualizations that shed light into how DP works. In this post, I present a highly visual 
       introduction to dynamic programming, then walk through three separate problems utilizing dynamic programming.`} />
      <Post title={"Data Structures 101: Graphs — A Visual Introduction for Beginners"}
       passimage={"https://miro.medium.com/max/571/0*pcBJE1ixkWrdm1tK.png"} 
       content={`Graphs are used in diverse industries and fields:
       GPS systems and Google Maps use graphs to find the shortest path from one destination to another.
       Social Networks use graphs to represent connections between users.
       The Google Search algorithm uses graphs to determine the relevance of search results.
       Operations Research is a field that uses graphs to find the optimal path to reduce the cost of transportation and delivery of goods and services.
       Even Chemistry uses graphs to represent molecules!!! `} /> */}
      <Post title={""} passimage={""} content={""} />
      <Post title={""} passimage={""} content={""} />
      <Post title={""} passimage={""} content={""} />
    </div>
  );
}
