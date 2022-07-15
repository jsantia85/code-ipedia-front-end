import ReactPrismEditor from 'react-prism-editor';

const CodeEditor = (props) => {
  return(
    <ReactPrismEditor
      language='javascript'
      theme='tomorrow'
      lineNumber='true'
      readOnly='false'
      changeCode={code => {
        this.code = code
        console.log(code)
      }}
    />
  )}

  export default CodeEditor;