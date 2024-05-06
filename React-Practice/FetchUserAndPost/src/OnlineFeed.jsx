import React, { useState } from "react";
import "./onlineFeed.css";
import { User } from "../User";
export default function OnlineFeed() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((apiResult) => apiResult.json())
      .then((data) => {
        const newData = data.slice(0, 3);
        setUsers((prev) => [...prev, ...newData]);
      });
  };
  return (
    <div className="main-container">
      <div className="users-container">
        <button onClick={fetchUsers}>more users</button>{" "}
        <span>{users.length}</span>
        <div className="users">
          {users.map((userItem, index) => (
            //  props are used to send the data to a component
            <User
              index={index}
              email={userItem.email}
              username={userItem.username}
              address={userItem.address}
            />
          ))}
        </div>
      </div>
      <div className="posts-container">
        <button>more posts</button>
      </div>
    </div>
  );
}