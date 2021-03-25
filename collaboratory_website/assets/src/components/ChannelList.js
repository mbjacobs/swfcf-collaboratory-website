// import React, { Component } from "react";
// import { Table } from "reactstrap";
// // import NewOrganizationModal from "./NewOrganizationModal";
// // import ConfirmRemovalModal from "./ConfirmRemovalModal";

// class ChannelList extends Component {
//     render() {
//         const organizations = this.props.organizations;
//         return (
//             <Table dark>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {!channels || channels.length <= 0 ? (
//                         <tr>
//                             <td colSpan="6" align="center">
//                                 <b>Ops, no one here yet</b>
//                             </td>
//                         </tr>
//                     ) : (
//                         channels.map(channel => (
//                             <tr key={channel.pk}>
//                                 <td>{channel.name}</td>
//                                 <td>{channel.description}</td>
//                                 {/* <td align="center">
//                   <NewOrganizationModal
//                     create={false}
//                     Organization={organization}
//                     resetState={this.props.resetState}
//                   />
//                   &nbsp;&nbsp;
//                   <ConfirmRemovalModal
//                     pk={organization.pk}
//                     resetState={this.props.resetState}
//                   />
//                 </td> */}
//                             </tr>
//                         ))
//                     )}
//                 </tbody>
//             </Table>
//         );
//     }
// }

// export default ChannelList;