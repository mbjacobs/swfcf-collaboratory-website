import React, { Component } from "react";
import { Table } from "reactstrap";

class ChangemakerList extends Component {
  render() {
    const changemakers = this.props.changemakers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Organization EIN</th>
            <th>Region ID</th>
          </tr>
        </thead>
        <tbody>
          {!changemakers || changemakers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            changemakers.map(changemaker => (
              <tr key={changemaker.cid}>
                <td>{changemaker.fname}</td>
                <td>{changemaker.lname}</td>
                <td>{changemaker.email}</td>
                <td>{changemaker.orgein}</td>
                <td>{changemaker.regionid}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ChangemakerList;