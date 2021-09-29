import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Header from "../Layout/Header"
import Navigation from "../Layout/Navigation"
import Weather from "../Weather/Weather"
import Main from "../Main/Main.js"
import TodoList from "../TodoList/TodoList.js"
import PokemonList from "../Pokemons/PokemonList.js"
import PokemonInfo from "../Pokemons/PokemonInfo.js"


function App() {
  return (
    <>

      <Provider store={store}>

        <Router>
          <Header />
          <Navigation />

          <Switch>

            <Route path='/weather'>
              <Weather />
            </Route>
            <Route path='/todolist'>
              <TodoList />
            </Route>
            <Route path='/pokemons/:id' exact>
              <PokemonInfo />
            </Route>
            <Route path='/pokemons' exact>
              <PokemonList />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </Router>
      </Provider>


    </>
  )

}

export default App
