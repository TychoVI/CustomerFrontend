import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    HashRouter, 
    Route, 
    Switch, useParams 
} from 'react-router-dom';

export class Landing extends Component {
    static displayName = Landing.name;

    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <Router>
                    <Switch>
                        <Route path="/table/:id" children={<TableNr />}/>
                    </Switch>
                </Router>
            </div>
        );
    }  
}

function TableNr() {
    let { id } = useParams(); 
    return (
      <div>
        <h3>table {id}</h3>
      </div>
    );
  }