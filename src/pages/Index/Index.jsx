import styles from "./Index.module.css";
import CodeCard from "../../components/CodeCard/CodeCard";

const Index = (props) => {
  return (
    <>
      <h1>Posts</h1>
      <div className={styles.container}>
        {props.posts.map(post =>
        // console.log(post)
          <CodeCard 
            key={post._id}
            title={post.title}
            author={post.author.name}
            categories={post.categories}
            user={props.user}
          />
        )}
      </div>
    </>
  );
}

export default Index