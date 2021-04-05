import React, {Component} from 'react';
import {
    Header,
    Segment,
    Container,
    Button,
    Divider,
    Card,
    Item,
    Form,
    } from 'semantic-ui-react';
import "../styles/Page.css";
import "../styles/Directory.css";

class FilterPerson extends Component {
    state = {
        searchRegionValue: "",
        searchCauseValue: "",
        persons: [],
        };

    constructor(props) {
        super(props);
        this.logRegionVal = this.logRegionVal.bind(this);
        this.logCauseVal = this.logCauseVal.bind(this);
    };

    logRegionVal = (e) => {
        this.setState({ searchRegionValue: e.target.value });
        console.log(e.target.value);
    };

    logCauseVal = (e) => {
        this.setState({ searchCauseValue: e.target.value });
        console.log(e.target.value);
    };

    handleSearch = () => {
        this.makeApiCall();
    };

    filterPersons = (arr) => {
        let full_profiles = [];

        // Check if a full profile exists, meaning they are attached to an org
        for (let no_nulls of arr) {
            if (no_nulls.organization_id != null)  {
                full_profiles.push(no_nulls)
            };
        }

        // Continue with the rest of the loop
        let new_persons = [];

            for (let person of full_profiles) {

                    if ( (this.state.searchCauseValue == "ALL") && (this.state.searchRegionValue == "ALL") ) {
                        console.log('both ALL')
                        return full_profiles
                    };

                    if ( (this.state.searchCauseValue == "ALL") || (this.state.searchRegionValue == "ALL")) {
                        console.log('one ALL');

                        if (this.state.searchRegionValue == "ALL") {
                            if ( person.organization_id.cause_id.includes(this.state.searchCauseValue)) {
                                console.log('region ALL')
                                new_persons.push(person)
                        }};
                        if (this.state.searchCauseValue == "ALL") {
                            console.log('cause ALL')
                            if ( person.organization_id.region_id.includes(this.state.searchRegionValue)) {
                                new_persons.push(person)
                        }};
                    };
                    if ((person.organization_id.region_id.includes(this.state.searchRegionValue)) && ( person.organization_id.cause_id.includes(this.state.searchCauseValue))) {
                        console.log('both here')
                        new_persons.push(person)
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
            var data = this.filterPersons(jsonData)
            this.setState({ persons: data });
            ;
        });
        };


    render () {
        return (
        <div>
        <div class='item-card'>
            <h4>Regions</h4>
            <Segment>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Lee") ? "ui black button" : "ui button"} value="Lee">Lee</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Glades") ? "ui black button" : "ui button"} value="Glades">Glades</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Charlotte") ? "ui black button" : "ui button"} value="Charlotte">Charlotte</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Collier") ? "ui black button" : "ui button"} value="Collier">Collier</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Hendry") ? "ui black button" : "ui button"} value="Hendry">Hendry</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "Other") ? "ui black button" : "ui button"} value="Other">Other</button>
                    {/* Not sure what to do here, just return all results? what does that do? If this is checking if something is in, check this using or, so basically if any of them exist there. maybe format these strings exactly? */}
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "ALL") ? "ui black button" : "ui button"} value="ALL">All Regions</button>
                </Segment>
            <h4>Causes</h4>
                <Segment>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Animals") ? "ui black button" : "ui button"} value="Animals">Animals</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Arts, Community, & Culture") ? "ui black button" : "ui button"} value="Arts, Community, & Culture">Arts, Community, & Culture</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Climate Change") ? "ui black button" : "ui button"} value="Climate Change">Climate Change</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Community Design") ? "ui black button" : "ui button"} value="Community Design">Community Design</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Economy & Jobs") ? "ui black button" : "ui button"} value="Economy & Jobs">Economy & Jobs</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Education") ? "ui black button" : "ui button"} value="Education">Education</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Environment") ? "ui black button" : "ui button"} value="Environment">Environment</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Equity & Empowerment") ? "ui black button" : "ui button"} value="Equity & Empowerment">Equity & Empowerment</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Health & Safety") ? "ui black button" : "ui button"} value="Health & Safety">Health & Safety</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "Philanthropy & Community Trust") ? "ui black button" : "ui button"} value="Philanthropy & Community Trust">Philanthropy & Community Trust</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "ALL") ? "ui black button" : "ui button"} value="ALL">All Causes</button>
                </Segment>
            <Segment>
                <button class="ui black right floated big button" onClick={this.handleSearch}>Search</button>
                <h2> </h2>
            </Segment>
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
export default FilterPerson;

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