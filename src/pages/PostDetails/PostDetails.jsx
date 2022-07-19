// import { Link } from 'react-router-dom'
import CodeCard from "../../components/CodeCard/CodeCard"
import {useLocation} from 'react-router-dom'
import AddComment from "../../components/AddComments/AddComments"
import style from './PostDetails.module.css'
import { CommentsList } from "./CommentsList"

function PostDetails (props) {
  const location = useLocation()
  console.log(location)
  const post = location.state
  return (
    <>
    <h1>Post Details</h1>
    <div className= {style.container}>
      <CodeCard 
        key={post._id}
        post={post}
        title={post.title}
        author={post.author.name}
        user={props.user}
        />
      </div>
      <div>
        <h5>Say something nice.</h5>
        <AddComment
          key={post._id}
          user={props.user}
          author={post.author.name} />

          <CommentsList />
      </div>
    </>
  )
}

export{ PostDetails }