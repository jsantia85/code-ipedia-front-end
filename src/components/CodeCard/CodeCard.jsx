import { Link } from "react-router-dom";

const CodeCard = (props) => {

  return(
    <div className="card">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <div className="code-card-body-code">
          <pre>
            <code>
              {props.post.code}
            </code>
          </pre>
        </div>
        <div className="card-text">
          <p>{props.post.category.category}</p>
          <p>{props.author}</p>
        </div>
      </div>
    </div>
  )
}


export default CodeCard;