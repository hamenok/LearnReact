import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { PeoplePage, 
         PlanetsPage, 
         StarshipsPage,
         SecretPage,
         LoginPage } from '../pages';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';
 

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

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

    const { isLoggedIn } = this.state;

    if(this.state.hasError) {
        return <ErrorIndicator />;
    };

        return(
            <SwapiServiceProvider value={this.state.swapiService} >
                <Router>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        
                        <RandomPlanet />
                        <Switch>
                            <Route path="/" 
                                render={() => <h2>Welcome to StarDB</h2>} 
                                exact />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" exact component={StarshipsPage} />
                            <Route path="/starships/:id" 
                                render={({ match, location, history }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }}/>
                            <Route path="/login" 
                                render={() => (
                                    <LoginPage 
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                )} />
                            <Route path="/secret" 
                                render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn}/>
                                )}/>
                            
                            <Route render={() => <h2>Page not found</h2>} />
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    };
};



