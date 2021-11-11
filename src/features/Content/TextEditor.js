import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
export default function TextEditor() {
  const [text, setText] = useState('manjunath');
  const onChange = () => {
    setText('hello world');
  };
  return (
    <div>
      <Editor editorState={text} onChange={this.onChange} />
    </div>
  );
}
