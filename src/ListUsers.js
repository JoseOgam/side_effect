import React from "react";

const ListUsers = (props) => {
  const displayUsers = (props) => {
    const { users } = props;
    if (users.length > 0) {
      users.map((user, index) => {
        console.log(user);
        return (
          <div key={user.id}>
            <h2>{{ users: user.name }}</h2>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h1>no users to display</h1>
        </div>
      );
    }
  };
  return <div>{displayUsers(props)}</div>;
};
export default ListUsers;
