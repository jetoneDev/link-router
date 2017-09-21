import React, { Component, PropTypes } from 'react';
import Logger from '../../logger';
const logger = new Logger("Router");
class Router extends Component {
    constructor(props) {
        super(props);
        this.unlisten = null;
        this.matchPath = this.matchPath.bind(this);
        this.initRoutes = this.initRoutes.bind(this);
        global.router = this.props.history;
        this.state = {
            history: this.props.history,
            location: null,
            routes: this.initRoutes(this.props.routes) || null,
            routeComponent: null,
        }
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            // location is an object like window.location
            this.matchPath(location);
        })

    }
    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
        }
    }
    componentDidMount() {
        this.matchPath(global.router.location);
    }
    initRoutes(params) {
        let json = {}
        for (var key in params) {
            json[key.toLowerCase()] = params[key];
        }
        logger.debug(params, json);
        return json;
    }
    matchPath(params) {
        let me = this;
        let pathArray = params.pathname.match(/\/\w*/gi);
        logger.debug(pathArray);
        let myComponent = null;
        for (let i = pathArray.length - 1; i >= 0; i--) {
            let pathname = pathArray[i].toLowerCase();
            if (me.state.routes[pathname.toLowerCase()] == undefined) {
                logger.debug("can't not matchRoute " + pathname);
                myComponent = null
                break;
            }
            //前置执行
            if (me.props.onEntry) {
                me.props.onEntry(me.state.history, params);
            }
            if (me.state.routes[pathname].onEntry) {
                me.state.routes[pathname].onEntry(me.state.history, params);
            }
            //end
            myComponent = React.createElement(
                me.state.routes[pathname].component,
                {
                    location: params
                }, myComponent
            );
        }
        this.setState({
            location: params, routeComponent: myComponent
        });
    }

    render() {
        return this.state.routeComponent != null ? this.state.routeComponent : <div />

    }
}
Router.propTypes = {
    children: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.object,
    onEntry: PropTypes.func,
};

export default Router;