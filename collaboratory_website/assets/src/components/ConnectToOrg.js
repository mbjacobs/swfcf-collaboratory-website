import React from 'react';
import {
    Header,
    Segment,
    Container,
    Button,
    Dropdown,
    Form,
  } from 'semantic-ui-react';
import "../styles/Profile.css";

import { CURRENT_USER_API_URL } from "../constants";
import { ORGANIZATIONS_API_URL } from "../constants";
import { USERS_API_URL } from "../constants";
import axios from "axios";

class ConnectToOrg extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            organizations: [],
            user: [],
            usersList: [],
            putObject:[],
        };
    }

    componentDidMount() {
        this.resetState();
    }

    //  Get User, Organization and User list for vaildation and nested serializer update
    getUser = () => {
        axios.get(CURRENT_USER_API_URL).then(res =>  {
            console.log(res.data)
            this.setState({ user: res.data });
            console.log(this.state.user)
        });
    };

    getOrganizations= () => {
        axios.get(ORGANIZATIONS_API_URL).then(res => this.setState({ organizations: res.data }));
    };
    getUsersList= () => {
        axios.get(USERS_API_URL).then(res => this.setState({ usersList: res.data }));
    };

    resetState = () => {
        this.getOrganizations();
        this.getUser();
        this.getUsersList();
    };

    // Link the auth user to user object, for passing in the post response
    matchFormattedUser = (auth_user, user_list, new_org) => {

        for (let userObj of user_list) {
            // console.log("this is the object", userObj)
            if (auth_user.username == userObj.user.username) {
                console.log("found the match")
                userObj['organization_id'] = new_org
                console.log("new user obj", userObj)
                return userObj
            };
        }
    };


    onDropdownChange = (e, data) => {
        console.log("logging the dropdown change", { [data.name]: data.value } )
        this.setState({ [data.name]: data.value });
    };

    updateOrg = e => {
        var data = this.matchFormattedUser(this.state.user, this.state.usersList, this.state.organization)
        // console.log(typeof data)
        // console.log("this is the user object to be passed in", data)
        e.preventDefault();
        axios({
            method: 'put',
            url: `${USERS_API_URL}${this.state.user.id}/`,
            data: data,
            });
        // axios.put(`${USERS_API_URL}${this.state.user.id}/`, {data}).then(() => {
        //     console.log(USERS_API_URL)
            // this.props.resetState();
            // this.props.toggle();
        };

    // Need a function that will accept the list of users, and then return the USER object (not just auth user)

    render() {
    return (
        <Container>
        <Form onSubmit={this.updateOrg}>
            <Form.Select
                fluid
                label='Organization'
                placeholder='Select an organization'
                onChange={this.onDropdownChange}
                name="organization"
                default="Not connected"
                options={this.state.organizations.map(organization => ({
                    key: organization.org_id,
                    value: organization,
                    text: organization.name
                }))}>
            </Form.Select>
        <div className="form-button-container">
            <Button type='submit'>Submit</Button>
        </div>
    </Form>
    </Container>
    );
};
}

export default ConnectToOrg;

// getCurrentUser= () => {
    //axios.get(CURRENT_USER_API_URL).then(res =>  {
    //  const users = res.data;
    //  this.setState({ users });

    //});

//import { CURRENT_USER_API_URL } from "../constants";
//import axios from "axios";