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
        this.setState({ searchRegionValue: e.target.value });
        console.log(e.target.value);
    };

    logCauseVal = (e) => {
        this.setState({ searchCauseValue: e.target.value });
        console.log(e.target.value);
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchRegionValue, this.state.searchCauseValue);
    };

    makeApiCall = (searchReg, searchCause) => {
        var searchUrl = `formatted_url=${searchReg}&${searchCause}`;
        console.log(searchUrl)
    };

    render () {
        return (
        <div class='item-card'>
            <h4>Regions</h4>
            <Segment>
                    <button onClick={this.logRegionVal} class="ui button" value="Lee">Lee</button>
                    <button onClick={this.logRegionVal} class="ui button" value="Glades">Glades</button>
                    <button onClick={this.logRegionVal} class="ui button" value="Charlotte">Charlotte</button>
                    <button onClick={this.logRegionVal} class="ui button" value="Collier">Collier</button>
                    <button onClick={this.logRegionVal} class="ui button" value="Hendry">Hendry</button>
                    <button onClick={this.logRegionVal} class="ui button" value="Other">Other</button>
                </Segment>
            <h4>Causes</h4>
                <Segment>
                    <button onClick={this.logCauseVal} class="ui button" value="Animals">Animals</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Arts, Community, & Culture">Arts, Community, & Culture</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Climate Change">Climate Change</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Community Design">Community Design</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Economy & Jobs">Economy & Jobs</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Education">Education</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Environment">Environment</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Equity & Empowerment">Equity & Empowerment</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Health & Safety">Health & Safety</button>
                    <button onClick={this.logCauseVal} class="ui button" value="Philanthropy & Community Trust">Philanthropy & Community Trust</button>
                </Segment>
            <Segment>
                <button class="ui black right floated large button" onClick={this.handleSearch}>Search</button>
                <h2> </h2>
            </Segment>
        </div>
        )
    }
}
export default FilterOrg;