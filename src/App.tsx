import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

    APP_TITLE = '';

    componentWillMount() {
        document.title = 'Hello to your notes';
    }

    render() {
        return (
            <Router>
                <Redirect from={'/'} to={'/home'}></Redirect>
                <Route path={'/home'} component={Home}></Route>
            </Router>
        );
    }
}

export default App;
