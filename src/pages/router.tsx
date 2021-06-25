import React, { ReactElement } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import HomePageContainer from "./home"

export function RootRouter(): ReactElement {
    return (
        <Switch>
            <Route>
                <HomePageContainer/>
            </Route>
        </Switch>
    )
}