import React, { useState } from 'react';
import './styles/App.scss';
import {Search} from './components/Search';
import {Switch, Route, useHistory} from 'react-router-dom';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';

function App() {
    let history = useHistory();
    const [results, setResults] = useState({});

    const getResults = (query) => {
        fetch(`http://localhost:8080/api/items?q=${query}`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    setResults({error: response});
                } else {
                    setResults(response);
                    history.push(`/items?search=${query}`);
                }
            })
            .catch(error => {
                setResults({error: 'Connection lost'});
            });
    };

    return (
        <div className="App">
            <Search onSubmit={(query) => getResults(query)}/>
            <Switch>
                <Route exact path="/items">
                    <SearchResult categories={results.categories} items={results.items}/>
                </Route>
                <Route path="/items/:id" component={ProductDetail} />
            </Switch>
        </div>
    );
}

export default App;
