import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RouteWrapper from 'Router/RouteWrapper';
import routerMap from 'Router/map';

class App extends Component {
    render() {
        console.log(routerMap);
        return (
            <BrowserRouter>
                <Route path={route.path} component={route.component}>
                    {
                        routerMap.map((route, index) => {
                            <RouteWrapper key={`route-${index}`} route={route} />
                        })
                    }
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;
