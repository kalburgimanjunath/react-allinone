import React from 'react';
import Image from 'react-bootstrap/Image';
export default function Avatar({ user, size, ...data }) {
  let onlyAvatar = true;
  let defaultValue = { width: 40, height: 40 };
  let width = '40';
  let height = '40';
  // console.log(size);
  if (size === '40') {
    let width = '40';
    let height = '40';
  } else {
    let width = '100';
    let height = '100';
  }
  let { type } = data;
  return (
    <>
      {type == 'onlyimage' ? (
        <Image
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          roundedCircle
          width={width}
          height={height}
        />
      ) : (
        <>
          <div>{user.name}</div>
          <div>{user.company.catchPhrase}</div>
          <div>
            <Image
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              roundedCircle
            />
          </div>
          <button type="button">Follow</button>
        </>
      )}
    </>
  );
}
