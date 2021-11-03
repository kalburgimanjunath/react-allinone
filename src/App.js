import React, { useState, useEffect } from 'react';
import './style.css';
import { Header,Topics, Avatar, Carousel, ProjectTabs } from './components/index';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function App() {
  let [users, setusers] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setusers(data));
  }, []);

  const topics = [
    'topic1',
    'topic2',
    'topic3',
    'topic4',
    'topic5',
    'topic6',
    'topic7',
  ];
  const AvatarCategory = users && users.map((item) => {
      return <Avatar user={item} type="onlyimage"/>
    })
  return (
    <div className="container">
      <Header title="All in One"/>      
      <Router>
      <Container>
      <Row>
        <Col>
        <h1>Your Topics</h1>
        <Topics />
        <Container>
          <Row>
          <Col><Carousel data={topics} component={}/></Col>
          </Row>
          <Row>
          {users && users.map((item) => {
            return <Col as="span" xs lg="2"><Avatar user={item} type="onlyimage"/></Col>
          })}
        </Row>
        </Container>
        
        </Col>
      </Row>      
    </Container>
        
        
        <ProjectTabs/>
        <h1>Recommended Topics</h1>
        <Topics/>
        <h1>Who to follow</h1>
        {users &&
          users.map((item) => {
            return <Avatar user={item} type="details"/>;
          })}
      </Router>
    </div>
  );
}
