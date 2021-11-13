import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default function Stories() {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const MyInput = () => {
    return (
      <div className="RichEditor-root">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    );
  };

  const submitCourse = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          Title: title,
          Subheading: subheading,
          content: content,
          Status: 'Published',
        },
      }),
    };
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };

  const updateCourse = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          Title: title,
          Subheading: subheading,
          content: content,
          Status: 'Published',
        },
      }),
    };
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };
  const deleteCourse = () => {};
  return (
    <Container>
      <Row>
        <Col>
          <h1>Add new Story</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form method="post">
            <label>Title</label>
            <input
              type="text"
              name="name"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Sub heading</label>
            <input
              type="text"
              name="subheading"
              placeholder="Sub heading"
              onChange={(e) => setSubheading(e.target.value)}
            />
            <br />
            <label>Content</label>
            <input
              type="text"
              name="content"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <br />
            <MyInput />
            <button type="button" onClick={submitCourse}>
              Add
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
