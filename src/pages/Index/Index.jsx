import styles from "./Index.module.css";

import CodeCard from "../../components/CodeCard/CodeCard";
import { Link } from "react-router-dom";

const Index = (props) => {
  
  console.log(props.posts)
  return (
    <>
      <h1>Posts</h1>
      <div className={styles.container}>
        {props.posts.map(post =>
        <Link to={`/index/${post._id}`} key={post._id} className={styles.text} state={post}>
          {
          <CodeCard 
            className={styles.codeCard}
            key={post._id}
            post={post}
            title={post.title}
            author={post.author.name}
            categories={post.categories}
            user={props.user}
            code={props.code}
            handleDeletePost={props.handleDeletePost}
            /> }
        </Link>
        )}
      </div>
    </>
  );
}

export default Index