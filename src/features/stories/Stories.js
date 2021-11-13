import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Stories() {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const resetFields = () => {
    setTitle('');
    setSubheading('');
    setContent('');
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
    // resetFields();
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
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Sub heading</label>
            <input
              type="text"
              name="subheading"
              onChange={(e) => setSubheading(e.target.value)}
            />
            <br />
            <label>Content</label>
            <input
              type="text"
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button type="button" onClick={submitCourse}>
              Add
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
