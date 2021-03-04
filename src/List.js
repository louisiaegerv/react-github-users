import React, { useState, useEffect } from "react";

const List = () => {
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  const getUsers = async () => {
    let response = await fetch(url);
    let userData = await response.json();
    setUsers(userData);
    // console.log(userData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ul className="users">
        {users.map((user) => {
          const { avatar_url, id, login, html_url } = user;
          return (
            <>
              <li key={id}>
                <img src={avatar_url} alt="" />
                <div>
                  <h4>{login}</h4>
                  <a target="_blank" href={html_url}>
                    Profile
                  </a>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default List;
