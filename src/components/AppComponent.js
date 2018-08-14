import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {HeaderComponent} from "./base/HeaderComponent";
import {HomeContainer} from "../containers/songs/HomeContainer";
import {ListPreviousSongsContainer} from "../containers/songs/ListPreviousSongsContainer";
import {AdminContainer} from "../containers/admin/AdminContainer";

export class AppComponent extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        const routes = [{
            path: '/',
            exact: true,
            component: () => <HomeContainer/>
        }, {
            path: '/tocadas',
            exact: true,
            component: () => <ListPreviousSongsContainer/>
        }, {
            path: '/admin',
            exact: true,
            component: () => <AdminContainer/>
        }];
        return (
            <div className="app">
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <HeaderComponent/>
                        <main className="view">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} render={route.component} exact={route.exact}/>
                                ))}
                                <Redirect to='/404'/>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }

}
