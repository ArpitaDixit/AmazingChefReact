import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {AmzingChef} from "./Home";
import {RecipeViewScreen} from "./RecipeViewScreen";

// import {Link, Route}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    {/*<Redirect from={'/'} to={'/home'}/>*/}
                    <Route path={'/home'} component={AmzingChef}/>
                    <Route path={'/recipes/:id'} component={RecipeViewScreen}/>
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
