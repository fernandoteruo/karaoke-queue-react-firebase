import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {HeaderComponent} from "./base/HeaderComponent";
import {MusicContainer} from "../containers/songs/MusicContainer";
import {ListPreviousMusicContainer} from "../containers/songs/ListPreviousMusicContainer";



export class AppComponent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        const routes = [{
            path: '/',
            exact: true,
            component: () => <MusicContainer />
        }, {
            path: '/tocadas',
            exact: true,
            component: () => <ListPreviousMusicContainer />
        }];
        return (
            <div className="app">
                <Router>
                    <div>
                        <HeaderComponent />
                        <main className="view">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} render={route.component} exact={route.exact}/>
                                ))}
                                <Redirect to='/'/>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }

}
