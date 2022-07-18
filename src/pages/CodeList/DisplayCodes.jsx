import Code from './Code'

const DisplayCodes = (props) => {

  const selectedCodes = props.codes.map((code, idx) => {
    return code.category === props.codeCategory &&
      <Code
        key={idx}
        code={code}
      />
  })

  return (
    <div className="code-list">
      {selectedCodes}
    </div>
  )
}

export default DisplayCodes


