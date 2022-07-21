import styles from './CodeList.module.css'
import { useState } from 'react'

import DisplayCodes from './DisplayCodes'

const CodeList = (props) => {
  console.log(props)
  const categories = [...new Set(props.posts?.map((p) => p?.category[0]?.category))]
  console.log(categories)
  const [category, setCategory] = useState('JavaScript')

  return (
    <>
      <h1>Code List</h1>
          <select className={styles.selectBox} onChange={(e)=>setCategory(e.target.value)}>
            {categories.map((c,idx) => (
              <option value={c} key={idx}>
                {c}
              </option>
            ))}
          </select>
      <div className={styles.codeList}>
        <h4>Now viewing {category}</h4>
          <div className={styles.catCodeSection}>
            <section className={styles.categoryCode}>
              <DisplayCodes category={category} posts={props.posts}/>
            </section>
          </div>
      </div>
    </>
  )
}

export default CodeList