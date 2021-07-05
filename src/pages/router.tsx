import { ReactElement } from "react"
import { Route, Switch } from "react-router-dom"
import { MainLayout } from "src/components/layout/MainLayout"
import RouterAdmin from "./admin/routerAdmin"
import HomePageContainer from "./home"
import LoginPageContainer from "./login"
import RegisterPageContainer from "./register"
import ProfilePageContainer from "./profile"

export function RootRouter(): ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <MainLayout>
          <HomePageContainer />
        </MainLayout>
      </Route>
      <Route path="/login">
        <MainLayout>
          <LoginPageContainer />
        </MainLayout>
      </Route>
      <Route path="/register">
        <MainLayout>
          <RegisterPageContainer />
        </MainLayout>
      </Route>
      <Route path="/profile">
        <MainLayout>
          <ProfilePageContainer />
        </MainLayout>
      </Route>
      <RouterAdmin />
    </Switch>
  )
}
