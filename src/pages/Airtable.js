import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Avatar } from './components/Avatar';
export default function Airtable() {
  const [users, setUser] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Users?maxRecords=3&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setUser(data.records))
      .catch((error) => console.log(error));
  });
  const ListItem = ({ item }) => {
    return (
      <div key={item.Name}>
        <div>{item.Name}</div>
        <div>{item.Address}</div>
        <div>{item.Status}</div>
      </div>
    );
  };
  // const records = () => {
  //   fetch(
  //     'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Users?maxRecords=3&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
  //   )
  //     .then((res) => res.json())
  //     // .then(res => {
  //     // 	console.log(res.records)
  //     // 	// this.setState({ booksData: res.records })
  //     // })
  //     .then((data) => setUser(data))
  //     .catch((error) => console.log(error));
  // };
  // console.log(users);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((response) => response.json())
  //     // 4. Setting *photos* to the image url that we received from the response above
  //     .then((data) => setposts(data));
  // }, []);

  return (
    <div>
      Airtable1
      {users &&
        users.map((item) => {
          // console.log(item);
          return (
            <>
              <ListItem key={item.id} item={item.fields} />
            </>
          );
        })}
      {/* {users ? <ListItem /> : null} */}
    </div>
  );
}
