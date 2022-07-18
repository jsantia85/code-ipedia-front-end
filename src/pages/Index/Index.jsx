import styles from "./Index.module.css";
import CodeCard from "../../components/CodeCard/CodeCard";

const Index = (props) => {
  return (
    <>
      <h1>Posts</h1>
      <div className={styles.container}>
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
  );
}

export default Index