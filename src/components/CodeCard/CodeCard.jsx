const CodeCard = (props) => {
  return(
    <div className="card">
      <div className="card-header">
        <h3>{props.category}</h3>
      </div>
      <div className="card-body">
        <div className="code-card-body-code">
          <pre>
            <code>
              {props.code}
            </code>
          </pre>
        </div>
        <div className="card-text">
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  )
}


export default CodeCard;