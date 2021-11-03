import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  Header,
  Topics,
  Avatar,
  Carousel,
  ProjectTabs,
  Posts,
  Post,
} from '../components/index';

export default function InnerPage({ topics, users }) {
  return (
    <>
      <Post title="text" />
      <Row>
        <ProjectTabs type="inner" />
      </Row>
    </>
  );
}
