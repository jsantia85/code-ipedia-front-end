import Code from './Code'

const DisplayCodes = (props) => {
console.log(props)
  // const selectedCodes = props.codes.map((code, idx) => {
  //   return code.category === props.codeCategory &&
  //     <Code
  //       key={idx}
  //       code={code}
  //     />
  // })

  return (
    <h1>Display codes</h1>
    // <div className="code-list">
    //   {selectedCodes}
    // </div>
  )
}

export default DisplayCodes


