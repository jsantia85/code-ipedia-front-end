import AddComment from '../../components/AddComments/AddComments'
import style from './PostDetails.module.css'

function CommentsList(props){
console.log('this is props', props.posts)

  return (
    <>
      <p>it works</p>
      <div className= {style.container}>
      
      </div>
    </>
  )
}

export {CommentsList}