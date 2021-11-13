import React, { useState, useEffect } from 'react';
import Stories from '../features/stories/Stories';
import Table from 'react-bootstrap/Table';
export default function AllStories() {
  const [stories, setStories] = useState('');
  const [story, setStory] = useState('');
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setStories(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(Stories);
  const deleteItem = (item) => {
    // console.log('clicked' + item);
    const url = `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`;
    console.log(url);

    const requestOptions = {
      method: 'DELETE',
    };
    fetch(
      `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  // const updateItem = (item) => {
  //   console.log('clicked' + item);
  //   const url = `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`;
  //   console.log(url);

  //   const requestOptions = {
  //     method: 'PUT',
  //   };
  //   fetch(
  //     `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setStory(data.records))
  //     .catch((error) => console.log(error));
  // };
  const StoriesDetail = ({ item }) => {
    return (
      <>
        <td>{item.Title}</td>
        <td>{item.Subheading}</td>
        <td>{item.content}</td>
        <td>{item.Tags}</td>
      </>
    );
  };
  // console.log(story);
  return (
    <div>
      <h1>All Stories</h1>
      <Stories story={story} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Subheading</th>
            <th>Content</th>
            <th>Tags</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {stories &&
          stories.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <StoriesDetail item={item.fields} />
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteItem(item.id)}
                    item={item.id}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateItem(item.id)}
                    item={item.id}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
      </Table>
    </div>
  );
}
