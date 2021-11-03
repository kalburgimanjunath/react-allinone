import React from 'react';
import Image from 'react-bootstrap/Image';
export default function Avatar({ user, ...data }) {
  let onlyAvatar = true;
  let { type } = data;
  console.log(data);
  return (
    <div>
      {type == 'onlyimage' ? (
        <Image
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          roundedCircle
        />
      ) : (
        <div>
          <div>{user.name}</div>
          <div>{user.company.catchPhrase}</div>
          <div>
            <Image
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              roundedCircle
            />
          </div>
          <button type="button">Follow</button>
        </div>
      )}
    </div>
  );
}
