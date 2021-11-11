import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Post from './Posts';

export default function Tabs({ newComponent, type }) {
  const [key, setKey] = useState('trending');
  console.log(type);

  return (
    <>
      {type == 'inner' ? (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="trending" title="Trending ">
            {/* <newComponent /> */}
            <Post title="Trending" />
          </Tab>
          <Tab eventKey="latest" title="Latest">
            {/* <newComponent /> */}
            <Post title="Latest" />
          </Tab>
          <Tab eventKey="best" title="Best">
            {/* <newComponent /> */}
            <Post title="Best" />
          </Tab>
        </Tabs>
      ) : (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="trending" title="Trending ">
            {/* <newComponent /> */}
            <Post title="Trending" />
          </Tab>
          <Tab eventKey="latest" title="Latest">
            {/* <newComponent /> */}
            <Post title="Latest" />
          </Tab>
          <Tab eventKey="best" title="Best">
            {/* <newComponent /> */}
            <Post title="Best" />
          </Tab>
        </Tabs>
      )}
    </>
  );
}
