import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Post from './Posts';

export default function Tabs({ newComponent }) {
  const [key, setKey] = useState('home');
  // console.log('new component');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Following ">
        {/* <newComponent /> */}
        <Post title="Following" />
      </Tab>
      <Tab eventKey="profile" title="Recommended For You">
        {/* <newComponent /> */}
        <Post title="Recommended For You" />
      </Tab>
    </Tabs>
  );
}
