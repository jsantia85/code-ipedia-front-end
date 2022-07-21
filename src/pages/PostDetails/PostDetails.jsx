import CodeCard from "../../components/CodeCard/CodeCard"
import {useLocation, useParams} from 'react-router-dom'
import AddComment from "../../components/AddComments/AddComments"
import style from './PostDetails.module.css'
import { CommentsList } from "../../components/CommentsList/CommentsList"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState} from "react"



function PostDetails (props) {
  const [comments, setComments] = useState([])
  
  // console.log('THIS IS PROPS', props)
  const location = useLocation()
  const {postId} = useParams()
  // console.log('post id', postId)
  const post = location.state
  // console.log('THIS IS POST IN POSTDETAILS', post)
  
  const commentsToPost = props.posts.filter((post) =>
  post._id === postId 
  )
  useEffect(()=> {
    setComments([...location.state.comments, props.comments])
  }, [location.state.comments])
  console.log('******************', comments)
  // console.log('this is commentsToPost', commentsToPost)
  // console.log(commentsToPost[0]?.comments)
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
            <div className="add-comment">
          <h5>Say Something Nice.</h5>
          <AddComment
            key={post._id}
            user={props.user}
            author={post.author} 
            handleAddComment={props.handleAddComment}
            comments={comments}
            setComments={setComments}
            postId={post._id}
            />
          </div>
        </section>

        {commentsToPost.map(post => 
          <CommentsList 
            key={post._id}
            user={props.user}
            author={post.author} 
            postId={post._id}
            comments = {comments}
            />
          )}
          <div>
          
          </div>
    </>
  )
}
export { PostDetails }