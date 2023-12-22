import React, {Fragment} from 'react'
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";

import Index from './components'

export default ({history}) => {
    return (
        <Fragment>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route path={'/'}>
                            <Index/>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </Fragment>
    )
}