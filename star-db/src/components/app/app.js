import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';


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
        
        
        const { getPerson, getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPlanets,
            getAllPeople,
            getAllStarships } = this.swapiService;

        return(
            <div className="stardb-app">
                <Header />
                {/* { planet }

                <div className="row mb2 button-row">
                    <button 
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                    </button>
                </div>  
                <PeoplePage/> */}
                {/* {itemList} */}


                <div className="row mb2">
                    <div className="col-md-6">
                        <PersonList 
                            onItemSelected={this.onPersonSelected}>
                        </PersonList>

                        <PlanetList 
                            onItemSelected={this.onPersonSelected}>
                        </PlanetList>

                        <StarshipList 
                            onItemSelected={this.onPersonSelected}>
                        </StarshipList>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={9} />
                    </div>
                </div>



            

            
                
                {/* <Row left={personDetails} right={starShipDetails}/> */}


            </div>
        );
    };
};



