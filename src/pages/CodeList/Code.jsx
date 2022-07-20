
import CodeCard from "../../components/CodeCard/CodeCard"
const Code = (props) => {
    return (
      <div className="card">
        <section>
          <span>
          <CodeCard 
            key={props.post._id}
            post={props.post}
            title={props.post.title}
            author={props.post.author.name}
            categories={props.post.categories}
            user={props.user}
            code={props.code}
            /> 
          </span>
        </section>
      </div>
    )
  }
  
  export default Code