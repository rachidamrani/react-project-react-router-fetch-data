import React, { Component } from "react";

export default class UserDetails extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    this.setState({
      user,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <h1 className="display-3">{user.name} details </h1>
        <ul className="list-group">
          <li className="list-group-item">Username: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
        </ul>
      </div>
    );
  }
}
