// import { Link } from 'react-router-dom'
import CodeCard from "../../components/CodeCard/CodeCard"
import {useLocation} from 'react-router-dom'
import AddComment from "../../components/AddComments/AddComments"
import style from './PostDetails.module.css'
import { CommentsList } from "./CommentsList"
import { Link, NavLink } from "react-router-dom"

function PostDetails (props) {
  console.log('THIS IS PROPS.HANDLEDELETEPOST', props.handleDeletePost)
  console.log('THIS IS PROPS', props)
  const location = useLocation()
  const post = location.state
  console.log('THIS IS POST IN POSTDETAILS', post)
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
        {props.user?.profile === post.author?._id &&
          <div className="">
            <Link
              state={props.post}
              to="/edit"
              className='btn btn-sm btn-primary'
            >
              Edit
            </Link>
            <NavLink to="/index">
              <button className="btn btn-sm btn-danger m-left" onClick={() => props.handleDeletePost(post._id)}>
                Delete
              </button>
            </NavLink>
          </div>
        }
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