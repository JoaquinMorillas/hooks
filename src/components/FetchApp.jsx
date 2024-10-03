import React from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isLoading, error } = useFetch(url);
  return (
    <>
      <h2>Users: </h2>
      {isLoading ? (
        <h4>Loading</h4>
      ) : error ? (
        <h4>Error</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
