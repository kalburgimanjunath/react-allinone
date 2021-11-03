import React, { useState, useEffect } from 'react';
import './style.css';
import { Topics, Avatar, Carousel, Tabs } from './components/index';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <div className="container">
      <h1>All in One</h1>
      <Router>
        <h1>Your Topics</h1>
        <Carousel data={topics} component={}/>
        {users &&
          users.map((item) => {
            return <Avatar user={item} type="onlyimage"/>;
          })}
        <Topics />
        <Tabs/>
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
