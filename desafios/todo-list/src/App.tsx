import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { AddItem } from './components/AddItem';

import { Tasks } from './components/Tasks';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <AddItem />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
