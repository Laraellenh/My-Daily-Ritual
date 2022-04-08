
// import './App.css';
import Auth from './Auth'
import Login from './Login'
import { Route, Switch } from "react-router-dom";
import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import UserContainer from "./UserContainer"
import FavoritesForm from "./FavoritesForm"
import User from "./User"

function App() {
  const [books, setBooks] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(false);
  const [user, setUser] =useState(null);
  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          user(setUser);
        })
        .then(()=> {
          fetch('/users/:username')
          .then(res => res.json())
          .then(currentUser => {
            console.log(currentUser)
            
          });
        })
      }
    });

   

  },[]);

  function handlePostFavoriteBooks(obj){
    fetch('/users/username',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(json =>  {
          setBooks([...books,json])
        })
      } else {
        res.json()
        .then(json => {
        setErrors(Object.entries(json.errors))
        })
      }
    })
}

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  return (
    <>
    <Navigation setIsAuthenticated={setIsAuthenticated} user={user} />
    <Switch> 
    <Route exact path="/">
      <UserContainer books={books} setBooks={setBooks} user={setUser}/>
    </Route>
    <Route exact path="/favorites/new">
      <FavoritesForm handlePost={handlePostFavoriteBooks}   books={books} setBooks={setBooks}errors={errors} />
    </Route>
    <Route exact path="/users/:id">
        <User user={user} books={books}/>
    </Route>
    <Route path="/sign_up">
          <Auth />
    </Route>
    </Switch>
    <Route path="/login">
          <Login />
    </Route>
    </>
  );
}

export default App;
