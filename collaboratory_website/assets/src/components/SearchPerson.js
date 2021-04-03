import React, {Component} from 'react';
import {
    Header,
    Segment,
    Container,
    Button,
    Card,
    Item
    } from 'semantic-ui-react';
import "../styles/Page.css";
import "../styles/Directory.css";


class SearchPerson extends Component {
    state = {
    searchValue: "",
    persons: [],
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
        var searchUrl = `http://localhost:8000/personsearch/?search=${searchInput}`;
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            this.setState({ persons: jsonData });
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
            {this.state.persons ? (
            <div>
                {this.state.persons.map((person, x) => (
                <div class = "item-card" key={x}>
                    <Person
                        key={x}
                        name={person.first_name + ' ' + person.last_name}
                        organization={person.organization_id.name}
                        email={person.email}
                        cause={person.organization_id.cause_id.map((el,i) => <li key={i}> {el} </li> )}
                        region={person.organization_id.region_id.map((el,i) => <li key={i}> {el} </li> )}
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

export default SearchPerson;

const Person = (props) => (
    <Item.Group class = "item-card">
        <Item>
            <Item.Content>
                <Item.Header>{props.name}</Item.Header>
                <Item.Meta>Organization</Item.Meta>
                <Item.Description>{props.organization}</Item.Description>
                <Item.Meta>Email</Item.Meta>
                <Item.Description>{props.email}</Item.Description>
                <Item.Meta>Causes</Item.Meta>
                <Item.Description>{props.cause}</Item.Description>
                <Item.Meta>Regions</Item.Meta>
                <Item.Description>{props.region}</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)