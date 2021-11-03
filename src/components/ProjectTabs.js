import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Tabs({ newComponent }) {
  const [key, setKey] = useState('home');
  console.log('new component');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {/* <newComponent /> */}1
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <newComponent /> */}2
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <newComponent /> */}3
      </Tab>
    </Tabs>
  );
}
