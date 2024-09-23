import RoutesList from './Routes';
import { BrowserRouter} from "react-router-dom";
import styles from '../css/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
