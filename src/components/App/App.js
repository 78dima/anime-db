import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Container} from "@material-ui/core";
import Header from "../Header/Header";
import './App.css';
import FavoritePage from "../Pages/FavoritePage";
import Paper from "@material-ui/core/Paper";
import MainPage from "../Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>

      <Container>
          <Paper>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route path={'/favorites'} component={FavoritePage}/>
            </Switch>
          </Paper>
      </Container>
    </div>
  );
}

export default App;