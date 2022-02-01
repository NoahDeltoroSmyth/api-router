import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import DetailView from './views/DetailView/DetailView';
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeView />
          </Route>
          <Route path="/detail/:id">
            <DetailView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
