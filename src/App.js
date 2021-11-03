import React, { useState, useEffect } from 'react';
import './style.css';
import {
  Header,
  Topics,
  Avatar,
  Carousel,
  ProjectTabs,
  Posts,
  Footer,
} from './components/index';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as data from './data/data.js';
import Home from './pages/Home';
import InnerPage from './pages/InnerPage';
export default function App() {
  let [users, setusers] = useState(null);
  // const {topics} = data;
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
  const AvatarCategory =
    users &&
    users.map((item) => {
      return <Avatar user={item} type="onlyimage" />;
    });
  // let match = useRouteMatch();
  // let { topicId } = useParams();
  // console.log(topicId);
  return (
    <div className="container">
      <Header title="All in One" />
      <Router>
        <Switch>
          <Route path="/tags">
            <InnerPage topics={topics} users={users} />
          </Route>
          <Route path="/" exact>
            <Home topics={topics} users={users} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
