const Code = (props) => {
    return (
      <div className="code-card">
        <section>
          <span>
            <p id="code-name">{props.code.code}</p>
            <p id="code-caption">{props.code.caption}</p>
            <p id="code-category">{props.code.category}</p>
          </span>
        </section>
      </div>
    )
  }
  
  export default Code