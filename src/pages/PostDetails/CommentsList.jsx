import AddComment from '../../components/AddComments/AddComments'
import style from './PostDetails.module.css'

function CommentsList (props) {


  return (
    <section>
    <div className= {style.container}>
      <p>{props.comments}</p>
    </div>
    </section>
  )
}

export {CommentsList}