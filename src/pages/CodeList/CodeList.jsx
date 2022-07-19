// import styles from './codeList.css'
import { useState } from 'react'

import DisplayCodes from './DisplayCodes'
import CodeNav from './CodeNav'
// import { codes } from '../Index/data'

const CodeList = (props) => {
console.log(props)
const categories = [...new Set(props.posts?.map((p) => p?.category[0]?.category))]
console.log(categories)
const [category, setCategory] = useState('HTML')

  return (
    <div className='code-list'>
      <h1>Code List</h1>
      <select onChange={(e)=>setCategory(e.target.value)}>
        {categories.map((c,idx) => (
          <option value={c} key={idx}>
            {c}
          </option>
        ))}
      </select>
      <h3>Now viewing {category}</h3>
      <section>
        <DisplayCodes category={category} posts={props.posts}/>
      </section>

    </div>
  )
}

export default CodeList