// import { Link } from 'react-router-dom'
import CodeCard from "../../components/CodeCard/CodeCard"

function PostDetails (props) {

  return (
    <>
    <h1> This will show postId's as well as comment section </h1>
    <div>
        {props.posts.map(post =>
          <CodeCard 
            key={post._id}
            post={post}
            title={post.title}
            author={post.author.name}
            user={props.user}
            code={props.code}
          />
        )}
      </div>
    </>
  )
}

export{ PostDetails }