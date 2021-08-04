import React from 'react';
import { useState } from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}


function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const [number, setNumber] = useState(1);

  const onIncrease = ()=> {
      setNumber(number+1);
  }

  return (
    <div>
      <User user={users[number]} />
      <User user={users[1]} />
      <User user={users[2]} />
      <button onClick={onIncrease}>click</button>
    </div>
  );
}

export default UserList;