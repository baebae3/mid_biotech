import styles from './app.module.scss'
import Router from "./components/Router/Router";

function App() {


  return (
    <div className={styles.main}>
      <Router />
    </div>
  );
}

export default App;
