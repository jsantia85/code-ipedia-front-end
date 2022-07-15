import ReactPrismEditor from 'react-prism-editor';

const CodeEditor = (props) => {
  return(
    <ReactPrismEditor
      className="prism-editor"
      language={'javascript'}
      theme={'tomorrow'}
      lineNumber={true}
      readOnly={false}
     
    />
  )}

  export default CodeEditor;