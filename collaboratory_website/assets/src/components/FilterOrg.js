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

class FilterOrg extends Component {
    state = {
        searchRegionValue: "",
        searchCauseValue: "",
        organizations: [],
        };

    constructor(props) {
        super(props);
        this.logRegionVal = this.logRegionVal.bind(this);
        this.logCauseVal = this.logCauseVal.bind(this);
    };

    logRegionVal = (e) => {
        this.setState({ searchRegionValue: `region_id=${e.target.value}` });
        console.log(`region=${e.target.value}`);
    };

    logCauseVal = (e) => {
        this.setState({ searchCauseValue: `cause_id=${e.target.value}` });
        console.log(`cause=${e.target.value}`);
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchRegionValue, this.state.searchCauseValue);
    };

    makeApiCall = (searchReg, searchCause) => {
        var searchUrl = `http://localhost:8000/orgfilter/?${searchReg}&${searchCause}`;
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            this.setState({ organizations: jsonData });
        });
    };

    render () {
        return (
        <div>
        <div class='item-card'>
            <h4>Regions</h4>
            {/* Will need to change className back to class if I don't decide to do the button states. Alternatively just show a string of what was searched for. */}
            <Segment>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=4") ? "ui black button" : "ui button"} value="4">Lee</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=2") ? "ui black button" : "ui button"} value="2">Glades</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=3") ? "ui black button" : "ui button"} value="3">Charlotte</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=5") ? "ui black button" : "ui button"} value="5">Collier</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=1") ? "ui black button" : "ui button"} value="1">Hendry</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=6") ? "ui black button" : "ui button"} value="6">Other</button>
                    <button onClick={this.logRegionVal} className={(this.state.searchRegionValue == "region_id=1&region_id=2&region_id=3&region_id=4&region_id=5&region_id=6") ? "ui black button" : "ui button"} value="1&region_id=2&region_id=3&region_id=4&region_id=5&region_id=6">All Regions</button>
                </Segment>
            <h4>Causes</h4>
                <Segment>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=1") ? "ui black button" : "ui button"} value="1">Animals</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=2") ? "ui black button" : "ui button"} value="2">Arts, Community, & Culture</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=3") ? "ui black button" : "ui button"} value="3">Climate Change</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=4") ? "ui black button" : "ui button"} value="4">Community Design</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=5") ? "ui black button" : "ui button"} value="5">Economy & Jobs</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=6") ? "ui black button" : "ui button"} value="6">Education</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=7") ? "ui black button" : "ui button"} value="7">Environment</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=8") ? "ui black button" : "ui button"} value="8">Equity & Empowerment</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=9") ? "ui black button" : "ui button"} value="9">Health & Safety</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=10") ? "ui black button" : "ui button"} value="10">Philanthropy & Community Trust</button>
                    <button onClick={this.logCauseVal} className={(this.state.searchCauseValue == "cause_id=1&cause_id=2&cause_id=3&cause_id=4&cause_id=5&cause_id=6&cause_id=7&cause_id=8&cause_id=9&cause_id=10") ? "ui black button" : "ui button"} value="1&cause_id=2&cause_id=3&cause_id=4&cause_id=5&cause_id=6&cause_id=7&cause_id=8&cause_id=9&cause_id=10">All Causes</button>
                </Segment>
            <Segment>
                <button class="ui black right floated big button" onClick={this.handleSearch}>Search</button>
                <h2> </h2>
            </Segment>
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
export default FilterOrg;

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