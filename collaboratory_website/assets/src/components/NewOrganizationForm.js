// import React from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// import axios from "axios";

// import { ORGANIZATIONS_API_URL } from "../constants";

// class NewOrganizationForm extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//         pk: 0,
//         name: "",
//         ein: null,
//       };
//   }

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //       ein: null,
//   //       name: null,
//   //       address1: null,
//   //       address2: null,
//   //       city: null,
//   //       state: null,
//   //       zip: null,
//   //       country: null,
//   //       phone: null,
//   //       missionstmt: null,
//   //       website: null,
//   //       causes: null,
//   //       regionid: null,
//   //     };
//   // }


//   componentDidMount() {
//     if (this.props.organization) {
//       const { pk, name, ein } = this.props.organization;
//       this.setState({ pk, name, ein });
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   createOrganization = e => {
//     e.preventDefault();
//     axios.post(ORGANIZATIONS_API_URL, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   editOrganization = e => {
//     e.preventDefault();
//     axios.put(ORGANIZATIONS_API_URL + this.state.pk, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   defaultIfEmpty = value => {
//     return value === "" ? "" : value;
//   };

//   render() {
//     return (
//       <Form onSubmit={this.props.organization ? this.editOrganization : this.createOrganization}>
//         <FormGroup>
//           <Label for="name">Name:</Label>
//           <Input
//             type="text"
//             name="name"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.name)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="ein">EIN:</Label>
//           <Input
//             type="text"
//             name="ein"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.ein)}
//           />
//         </FormGroup>
//         <Button>Send</Button>
//       </Form>
//     );
//   }
// }

// export default NewOrganizationForm;