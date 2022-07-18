import { Link } from "react-router-dom";

const CodeCard = (props) => {

  return(
    <div className="card">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <div className="code-card-body-code">
          {/* <pre>
            <code>
              {props.code}
            </code>
          </pre> */}
        </div>
        <div className="card-text">
          <p>{props.author}</p>
        {props.user?.profile === props.post.author?._id &&
          <div className="card-footer">
            <Link
              state={props.post}
              to="/edit"
              className='btn btn-sm btn-primary'
            >
              Edit
            </Link>
          
          </div>
        }
        </div>
      </div>
    </div>
  )
}


export default CodeCard;