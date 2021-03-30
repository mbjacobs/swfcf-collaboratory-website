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
    organizations : [],
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
                    placeholder="Search for a person"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
            <button class="example" onClick={this.handleSearch}>Search</button>
            </div>
            {this.state.persons ? (
            <div>
                {this.state.persons.map((person) => (
                <div class = "item-card">
                    <Person
                        key={person.user_id}
                        name={person.first_name + ' ' + person.last_name}
                        email={person.email}
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
                <Item.Meta>Email</Item.Meta>
                <Item.Description>{props.email}</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
  )