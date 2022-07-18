import { useState } from 'react'

import DisplayCodes from './DisplayCodes'
import CodeNav from './CodeNav'
import { codes } from '../Index/data'

const CodeList = (props) => {

  const [codeCategory, setCodeCategory] = useState('HTML')

  return (
    <div className="code-list">
      <section>
        <CodeNav setCodeCategory={setCodeCategory} />
        <DisplayCodes codeCategory={codeCategory} />
      </section>

    </div>
  )
}

export default CodeList