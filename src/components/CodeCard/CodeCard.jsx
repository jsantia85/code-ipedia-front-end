// import { Link } from "react-router-dom";
import styles from './CodeCard.module.css'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const CodeCard = (props) => {
  const codeBlock = props.post.code
  return(
    <div className="card">
      <div className="card-header">
        <h3>{props.post.title}</h3>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardCode}>
          <Editor 
          value={codeBlock}
          highlight={codeBlock => highlight(codeBlock, languages.js)}
          />
        </div>
        <div className={styles.cardFooter}>
          <div className="card-text">
            <p>Category: {props.post.category[0].category}</p>
            <p>By: {props.post.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CodeCard;