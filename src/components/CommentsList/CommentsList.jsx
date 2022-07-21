function CommentsList(props){

  return (
    <>
      {props.comments.map(comment => 
      <div>
      <p key={comment._id}>
      {comment.comments}</p>
      </div>
      )}
      

  </>
  )
  }
export {CommentsList}