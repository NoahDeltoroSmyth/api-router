import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
