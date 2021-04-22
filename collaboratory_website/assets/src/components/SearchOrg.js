import React, {Component} from 'react';
import {
    Item
  } from 'semantic-ui-react';
import "../styles/Page.css";
import "../styles/Directory.css";
import { ORGANIZATIONS_SEARCH_API_URL } from "../constants";



class SearchOrg extends Component {
    state = {
    searchValue: "",
    organizations: [],
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
        var searchUrl = ORGANIZATIONS_SEARCH_API_URL + `?search=${searchInput}`;
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            this.setState({ organizations: jsonData });
        });
    };

    render() {
        return (
        <div id="main">
            <div class="example">
            <input
                    name="text"
                    type="text"
                    placeholder="Search..."
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
            <button class="example" onClick={this.handleSearch}>Search</button>
            </div>
            {this.state.organizations ? (
            <div>
                {this.state.organizations.map((organization) => (
                <div class = "item-card">
                    <Org
                        key={organization.org_id}
                        name={organization.name}
                        mission={organization.mission}
                        website={organization.website}
                        cause={organization.cause_id.map((el,i) => <li key={i}> {el} </li> )}
                        region={organization.region_id.map((el,i) => <li key={i}> {el} </li> )}
                    />
                </div>
                ))}
            </div>
            ) : (
            <p>Try searching for another organization.</p>
            )}
        </div>
        );
    }
}

export default SearchOrg;

const Org = (props) => (
    <Item.Group class = "item-card">
        <Item>
            <Item.Content>
                <Item.Header>{props.name}</Item.Header>
                <Item.Meta>Mission Statement</Item.Meta>
                <Item.Description>{props.mission}</Item.Description>
                <Item.Meta>Website</Item.Meta>
                <Item.Description>{props.website}</Item.Description>
                <Item.Meta>Causes</Item.Meta>
                <Item.Extra>{props.cause}</Item.Extra>
                <Item.Meta>Regions</Item.Meta>
                <Item.Extra>{props.region}</Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
  )