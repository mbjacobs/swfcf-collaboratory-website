import React, { Component } from "react";
import { Table } from "reactstrap";

class UserList extends Component {
  render() {
    const users = this.props.users;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Preferred Pronouns</th>
          </tr>
        </thead>
        <tbody>
          {!users || users.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.uid}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.preferredpronouns}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserList;