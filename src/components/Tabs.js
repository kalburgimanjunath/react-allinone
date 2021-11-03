import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';

export default function Tabs({ newComponent }) {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <newComponent />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <newComponent />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <newComponent />
      </Tab>
    </Tabs>
  );
}
