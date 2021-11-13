import React, { useState, useEffect } from 'react';
import Stories from '../features/stories/Stories';
export default function AllStories() {
  const [stories, setStories] = useState('');
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setStories(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(Stories);
  const StoriesDetail = ({ item }) => {
    return <div>{item.Title}</div>;
  };
  return (
    <div>
      <h1>All Stories</h1>
      <Stories />
      {stories &&
        stories.map((item) => {
          return (
            <div>
              <StoriesDetail item={item.fields} />
            </div>
          );
        })}
    </div>
  );
}
