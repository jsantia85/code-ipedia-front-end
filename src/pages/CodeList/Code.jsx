const Code = (props) => {
    return (
      <div className="code-card">
        <section>
          <span>
            <p className='categoryName'>Title:</p>
            <p id="code-name">{props.post.title}</p>
            <p className='categoryName'>Category:</p>
            <p id="code-caption">{props.post.category[0].category}</p>
            <p className='categoryName'>Code:</p>
            <p id="code-category">{props.post.code}</p>
          </span>
        </section>
      </div>
    )
  }
  
  export default Code