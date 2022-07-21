function CommentsList(props){

  return (
    <>
    <h3>Comments: </h3>
      {props.comments.map(comment => 
        <div key={comment._id}>
        <p>
        {comment.comments}
        </p>
        </div>
      )}
    
    </>
  )
  }
export {CommentsList}