import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './layers/AboutUs'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route      path="/" exact component={AboutUs} />
        </Switch>
    </div>
  );
}

export default App;
