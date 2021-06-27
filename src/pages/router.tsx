import { ReactElement } from "react"
import { Route, Switch } from "react-router-dom"
import { Anonymous } from "src/components/authorize"
import { MainLayout } from "src/components/layout/MainLayout"
import HomePageContainer from "./home"
import LoginPageContainer from "./login"
import RegisterPageContainer from "./register"

export function RootRouter(): ReactElement {
  return (
    <Switch>
      <MainLayout>
        <Route exact path="/">
          <HomePageContainer />
        </Route>
        <Anonymous>
          <Route path="/login">
            <LoginPageContainer />
          </Route>
          <Route path="/register">
            <RegisterPageContainer />
          </Route>
        </Anonymous>
      </MainLayout>
    </Switch>
  )
}
