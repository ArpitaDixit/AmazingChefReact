import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {AmzingChef} from "./Home";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import {Link, Route}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={'/home'} component={AmzingChef}/>
                    {/*<Route path={'/recipe/:id'} component={}/>*/}
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);
