function CommentsList(props){

  return (
    <>
      {props.comments.map(comment => 
        <div key={comment._id}>
        <p>
        {comment.comments}</p>
        </div>
      )}
    
    </>
  )
  }
export {CommentsList}