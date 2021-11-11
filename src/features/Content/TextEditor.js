import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
export default function TextEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const onChange = (evt) => {
    console.log(evt);
    setValue(evt.target.value);
  };
  return (
    <div
      style={{ border: '1px solid black', minHeight: '6em', cursor: 'text' }}
    >
      <Editor
        className="texteditor"
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
        spellCheck={true}
      />
    </div>
  );
}
