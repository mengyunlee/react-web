import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

class RouteWrapper extends Component {
    static propTypes = {
        route: PropTypes.object.isRequired,
    }; 

    render() {
        const { route } = this.props;
        const routeChildren = route.children;

        return (
            <Route path={route.path} component={route.component}>
                { 
                    routeChildren.map((routeChild, index) => (
                        <RouteWrapper key={`${route.path}-${index}`} route={routeChild} />
                    ))
                }
            </Route>
        );
    }
}

export default RouteWrapper;
