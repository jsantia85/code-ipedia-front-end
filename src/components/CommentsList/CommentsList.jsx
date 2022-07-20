// import AddComment from '../../components/AddComments/AddComments'
// import AddComment from "../AddComments/AddComments"
import {useLocation} from 'react-router-dom'

function CommentsList(props){
  console.log('this is props', props.posts)
  const location = useLocation()

  console.log('this is location', location)

  return (
    <>
      {location.state.comments.map(comment => 
      // console.log('this is comment', comment.comments)
      <p>{comment.comments}</p>
      )}
      

  </>
  )
  }
export {CommentsList}