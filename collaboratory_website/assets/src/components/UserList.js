import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";

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
            <th>Email</th>
            <th>Phone</th>
            <th>Organization</th>
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
              <tr key={user.user_id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.preferred_pronouns}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.organization_id}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserList;