import React from 'react';
import css from './FriendList.module.css';
import FriendListitem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        <FriendListitem friends={friends} />
      </ul>
    </>
  );
};

export default FriendList;
