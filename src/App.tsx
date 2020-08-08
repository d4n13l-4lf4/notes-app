import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import APP_CONFIG from "./constants/app-constants";
import 'fontsource-roboto';


class App extends React.Component {


    componentDidMount() {
        document.title = APP_CONFIG.APP_TITLE;
    }

    render() {
        return (
            <Router>
                <Route path={'/home'} component={Home} />
                <Redirect from={'/'} to={'/home'}/>
            </Router>
        );
    }
}

export default App;
