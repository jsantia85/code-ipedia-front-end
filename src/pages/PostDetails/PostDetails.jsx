import CodeCard from "../../components/CodeCard/CodeCard"
import {useLocation, useParams} from 'react-router-dom'
import AddComment from "../../components/AddComments/AddComments"
import style from './PostDetails.module.css'
import { CommentsList } from "../../components/CommentsList/CommentsList"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState} from "react"



function PostDetails (props) {
  
  const location = useLocation()
  const [comments, setComments] = useState([])
  const [post, setPost] = useState(location.state.post)
  const {postId} = useParams()
  
  
  
  
  useEffect(()=> {
    setPost(props.posts.filter(post => post._id === location.state.post._id)[0])
  }, [props.posts])
  
  return (
    <>
    <h1>Post Details</h1>
    
        {props.user?.profile === post.author?._id &&
          <div className="">
            <Link
              state={{post}}
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
        <section>
        <CodeCard 
          key={post._id}
          post={post}
          title={post.title}
          author={post.author.name}
          user={props.user}
          />
            <div className="add-comment">
          <h5>Say Something Nice.</h5>
          <AddComment
            key={post._id}
            user={props.user}
            author={post.author} 
            handleAddComment={props.handleAddComment}
            setComments={setComments}
            postId={post._id}
            />
          </div>
        </section>

        
        { post.comments?.length &&
          <CommentsList 
            key={post._id}
            user={props.user}
            author={post.author} 
            postId={post._id}
            comments = {post.comments}

          />
        }
          <div>
          
          </div>
    </>
  )
}
export { PostDetails }