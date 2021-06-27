import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./state/store"

export function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
