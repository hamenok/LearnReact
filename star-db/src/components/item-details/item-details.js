import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'

import './item-details.css';


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        error: false,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !==  prevProps.itemId) {
            this.setState({loading: true});
            this.updatePerson();
        };
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updateItem() { 
        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId) {
            return;
        };

        getData(itemId)
            .then((item) => {
                    this.setState({
                        item,
                        image: getImageUrl(item),
                        loading: false
                    });
                })
                .catch(this.onError);
    };


    render() {
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }

        const { item, error, loading, image } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const hasData = !(loading || error);
        const test = this.props.children;
        const content = hasData ? <PersonView item={item} image={image} test={test}/> : null;
        console.log(loading);
        return (
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        )
    };
};

const PersonView = ({item, image, test}) => {
    const { name } = item;
    return(
        <React.Fragment>
                <img className="person-image"
                    src={image}
                    alt=""/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(test, (child) => {
                                return React.cloneElement(child, { item });
                            })    
                        }
                    </ul>
                </div>
        </React.Fragment>
    );
}