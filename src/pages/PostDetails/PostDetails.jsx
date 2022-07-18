// import { Link } from 'react-router-dom'
import CodeCard from "../../components/CodeCard/CodeCard"
import {useLocation, useParams} from 'react-router-dom'
import AddComment from "../../components/AddComments/AddComments"

function PostDetails (props) {
  const location = useLocation()
  console.log(location)
  const post = location.state
  return (
    <>
    <h1>Post Details</h1>
    <div>
      <CodeCard 
        key={post._id}
        post={post}
        title={post.title}
        author={post.author.name}
        user={props.user}
        />
        <AddComment />
    
      </div>
    </>
  )
}

export{ PostDetails }