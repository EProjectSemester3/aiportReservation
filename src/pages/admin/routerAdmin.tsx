import React from "react"
import { Route, Switch } from "react-router"
import { ManageLayout } from "src/components/layout/manage/ManageLayout"
import AdminComponent from "."
import ManageAirlineContainer from "./airline"
import ManageCityContainer from "./city-airport"

export default function RouterAdmin() {
  return (
    <Switch>
      <ManageLayout>
        <Route path="/admin" exact>
          <AdminComponent />
        </Route>
        <Route path="/admin/manage-airline">
          <ManageAirlineContainer />
        </Route>
        <Route path="/admin/manage-city">
          <ManageCityContainer/>
        </Route>
      </ManageLayout>
    </Switch>
  )
}
