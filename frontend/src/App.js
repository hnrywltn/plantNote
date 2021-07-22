import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AddPlant from "./components/AddPlant";
import Plant from "./components/Plant";
import Todo from "./components/ToDo";




function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>



      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path="/">
            <SplashPage />
          </Route>

          <Route path='/SplashPage'>
            <SplashPage />
          </Route>

          <Route exact path="/plants">
            <HomePage />
          </Route>

          <Route path='/todos'>
            <Todo />
          </Route>

          <Route path="/plants/add">
            <AddPlant />
          </Route>

          <Route path="/plants/:id">
            <Plant />
          </Route>

          <Route path="/login">
            <LoginFormPage />
          </Route>



          <Route path="/signup">
            <SignupFormPage />
          </Route>



        </Switch>
      )}
    </>
  );
}

export default App;
