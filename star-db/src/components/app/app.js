import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { PeoplePage, PlanetsPage, StarsipsPage } from '../pages';

import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';
 

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? SwapiService : SwapiService;
            console.log(Service);
            return {
                swapiService: new Service()
            }
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };
    
render() {

    if(this.state.hasError) {
        return <ErrorIndicator />;
    };

        return(
            <SwapiServiceProvider value={this.state.swapiService} >
                <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange} />
                    
                    <RandomPlanet />

                    <PeoplePage />

                    <PlanetsPage />

                    <StarsipsPage />

                </div>
            </SwapiServiceProvider>
        );
    };
};



