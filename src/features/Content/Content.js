import React, { useState } from 'react';
import AddStory from './AddStory';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './ContentSlice';
export default function Content() {
  const stories = useSelector((state) => state.stories);
  const count = useSelector((state) => state);
  console.log(count);

  const [isAddStory, setAddStory] = useState(true);
  const listStory = stories.map((item) => (
    <div key={item.id}>
      <div>{item.id}</div>
      <a href={item.id}>
        <div>{item.title}</div>
      </a>
      <div>{item.subheading}</div>
      <div>{item.content}</div>
    </div>
  ));
  const onClick = () => {
    console.log('clicked');
    setAddStory(true);
  };
  const onClickCancel = () => {
    console.log('clicked');
    setAddStory(false);
  };
  return (
    <div>
      {isAddStory ? (
        <>
          <AddStory />
          <button onClick={onClickCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={onClick}>Add a Story</button>
          {listStory}
        </>
      )}

      {/* Story list with edit and delete,archive list*/}
    </div>
  );
}
