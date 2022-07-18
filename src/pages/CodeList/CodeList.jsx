import { useState } from 'react'

import DisplayCodes from './DisplayCodes'
// import { codes } from '../Index/data'

const CodeList = (props) => {

  const [codeCategory, setCodeCategory] = useState('Code')

  return (
    <div className="code-list">
      <section>
        <DisplayCodes codeCategory={codeCategory} />
      </section>

    </div>
  )
}

export default CodeList