import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    this.setState({
      users,
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h1 className="display-3">Welcome to my home page!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          numquam architecto quo distinctio aliquam esse itaque accusamus eos
          officiis fuga, explicabo atque ratione? Porro animi accusantium
          commodi perspiciatis harum nam!
        </p>
        <hr />

        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {" "}
                    <Link to={`/users/${user.id}`}>{user.name}</Link>{" "}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
