import React, { Component } from 'react';

import { withRouter } from 'react-router';

class About extends Component {
    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, () => {
            return confirm('are you sure?');
        });
    }
    
    render() {
        return (
            <div>
                A really nice "about us" page ... i think.. ehhm .. bye ---> i've got called with a parameter value: <b>{this.props.params.aParam}</b>
            </div>
        );
    }
}

export default withRouter(About);