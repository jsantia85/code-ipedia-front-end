import Editor from "react-simple-code-editor";
import React from "react";
import { useState } from 'react';
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = (props) => {
  const [code, setCode] = useState(
    ``
  );
  return(
    <div>
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      textareaClassName="code-editor"
      preClassName="code-editor-pre"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        backgroundColor: "#fdfdfd",
        color: "#333",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: 16,
      }}
    />
    </div>
  )}

  export default CodeEditor;