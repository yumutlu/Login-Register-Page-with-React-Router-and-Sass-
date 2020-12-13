
import './App.scss';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (

    <Router>
      <div>
        <Toolbar />
        <Switch>


          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/'>
            <Home />
          </Route>


        </Switch>
      </div>

    </Router>
  );
}

export default App;
