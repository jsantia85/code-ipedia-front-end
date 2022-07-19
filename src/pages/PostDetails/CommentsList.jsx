// import AddComment from '../../components/AddComments/AddComments'
import style from './PostDetails.module.css'

function CommentsList (props) {


  return (
    <>
    <div className= {style.container}>
      <p>{props.comments}</p>
    </div>
    </>
  )
}

export {CommentsList}