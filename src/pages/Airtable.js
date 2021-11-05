import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Avatar } from './components/Avatar';
export default function Airtable() {
  const [users, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Users?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setUser(data.records))
      .catch((error) => console.log(error));
  });
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Posts?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.records))
      .catch((error) => console.log(error));
  });
  console.log(posts);

  const ListItem = ({ item }) => {
    return (
      <li>
        <div>{item.Name}</div>
        <div>{item.Address}</div>
        <div>{item.Status}</div>
      </li>
    );
  };
  return (
    <div>
      Airtable
      {users &&
        users.map((item) => {
          // console.log(item);
          return <ListItem item={item.fields} key={item.id} />;
        })}
      {/* {users ? <ListItem /> : null} */}
    </div>
  );
}
