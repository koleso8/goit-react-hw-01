import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <>
      <ul>
        {friends.map(item => {
          return (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
              id={item.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default FriendList;
