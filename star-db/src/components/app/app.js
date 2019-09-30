import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {

    };

    

    componentDidCatch() {
        this.setState({ hasError: true });
    };
    
render() {

    if(this.state.hasError) {
        return <ErrorIndicator />;
    };

    const planet = this.state.showRandomPlanet ? 
        <RandomPlanet /> :
        null;

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (<span>{item.name} <button>!</button></span>)} />
        );

        const personalDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return(
            <div className="stardb-app">
                <Header />
                { planet }

            <div className="row mb2 button-row">
                <button 
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                </button>
            </div>  
                <PeoplePage/>

                
                <Row left={itemList} right={PersonDetails}/>


            </div>
        );
    };
};



