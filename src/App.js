import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { auth } from './componunts/config/Firebase';
import HomeScreen from "./componunts/Screens/HomeScreen/HomeScreen";
import LoginScreen from './componunts/Screens/LoginScreen/LoginScreen';
import ProfileScreen from './componunts/Screens/ProfileScreen/ProfileScreen';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <LoginScreen />
        ):(
          <Switch>
          <Route path="/profile">
          <ProfileScreen />
          </Route>

          <Route path="/">
          <HomeScreen />
          </Route>
           
        </Switch>
        )}

      </Router>

    </div>
  );
}

export default App;
