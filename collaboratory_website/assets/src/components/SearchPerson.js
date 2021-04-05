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
        this.makeApiCall();
    };

    searchPersons = (arr) => {
        var searchString = this.state.searchValue.toLowerCase().split(" ")

        let full_profiles = [];

        // Check if a full profile exists, meaning they have entered a full name for their profile
        for (let no_nulls of arr) {
            // if ((no_nulls.user.first_name != "" || no_nulls.user.last_name != "") && (no_nulls.organization_id != null) ) 
            if ((no_nulls.organization_id != null) )  {
                full_profiles.push(no_nulls)
            };
        }
        // Continue with the rest of the loop
        let new_persons = [];

            for (let person of full_profiles) {

                for (var i=0; i< searchString.length ; i++) {
                    console.log('searching on', searchString[i])

                    if ( person.user.first_name.toLowerCase().includes(searchString[i])) {
                        if (new_persons.includes(person)) {
                            continue;
                        };
                        new_persons.push(person)
                    };
                    if ( person.user.last_name.toLowerCase().includes(searchString[i])) {
                        if (new_persons.includes(person)) {
                            continue;
                        };
                        new_persons.push(person)
                    };
                }
            }
        return new_persons
    };

    makeApiCall = () => {
        var searchUrl = 'http://localhost:8000/users/';
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            var data = this.searchPersons(jsonData)
            this.setState({ persons: data });
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
                        name={person.user.first_name + ' ' + person.user.last_name}
                        organization={person.organization_id.name}
                        email={person.user.email}
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