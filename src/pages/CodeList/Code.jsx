const Code = (props) => {
    return (
      <div className="code-card">
        <section>
          <span>
            <p id="code-name">{props.code.title}</p>
            <p id="code-caption">{props.code.category}</p>
            <p id="code-category">{props.code.code}</p>
          </span>
        </section>
      </div>
    )
  }
  
  export default Code