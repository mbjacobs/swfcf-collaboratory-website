import React, { Component } from "react";
import { Table } from "reactstrap";
// import NewOrganizationModal from "./NewOrganizationModal";
// import ConfirmRemovalModal from "./ConfirmRemovalModal";

class OrganizationList extends Component {
  render() {
    const organizations = this.props.organizations;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>EIN</th>
            <th>Cause</th>
            <th>Region</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!organizations || organizations.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            organizations.map(organization => (
              <tr key={organization.pk}>
                <td>{organization.name}</td>
                <td>{organization.ein}</td>
                <td>{organization.cause_id}</td>
                <td>{organization.region_id}</td>
                {/* <td align="center">
                  <NewOrganizationModal
                    create={false}
                    Organization={organization}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={organization.pk}
                    resetState={this.props.resetState}
                  />
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default OrganizationList;