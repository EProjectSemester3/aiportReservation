import { ReactElement } from "react"
import { Route, Switch } from "react-router-dom"
import { Anonymous } from "src/components/authorize"
import { ManageLayout } from "src/components/layout/manage/ManageLayout"

export function RootRouter(): ReactElement {
  return (
    <Switch>
      <ManageLayout>
        <Route exact path="/"></Route>
        <Anonymous>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
        </Anonymous>
      </ManageLayout>
    </Switch>
  )
}
