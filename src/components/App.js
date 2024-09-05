import RoutesList from './Routes';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
