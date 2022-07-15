import styles from "./Index.module.css";
import { useState } from 'react';

import indexData from "./data";
import CodeCard from "../../components/CodeCard/CodeCard";

const Index = (props) => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <h1>Posts</h1>
      <div className={styles.container}>
        {indexData.map(data=>
          <CodeCard 
            code={data.code}
            category={data.category}
            caption={data.caption}
          />
        )}
      </div>
    </>
  );
}

export default Index