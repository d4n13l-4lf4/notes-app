import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

    APP_TITLE = 'Hello to your notes';

    componentDidMount() {
        document.title = this.APP_TITLE;
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
