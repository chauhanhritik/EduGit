import Post from '../post/Post'
import './posts.css'

export default function Posts(props) {
    return (
        <div className="posts" >
            <Post title={props.title}/>          
            <Post title={props.title}/>          
            <Post title={props.title}/>          
            <Post title={props.title}/>          
            <Post title={props.title}/>          
            <Post title={props.title}/>          
            <Post title={props.title}/>          
        </div>
    )
}
