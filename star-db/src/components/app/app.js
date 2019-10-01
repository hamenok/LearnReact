import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
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

        const { getPerson, getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >
                
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starShipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship} 
                getImageUrl={getStarshipImage}>

                
            </ItemDetails>
        );

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

                
                <Row left={personDetails} right={starShipDetails}/>


            </div>
        );
    };
};



