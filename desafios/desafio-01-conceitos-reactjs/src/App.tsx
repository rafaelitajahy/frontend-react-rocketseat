import { Trash } from '@phosphor-icons/react';
import { Logo } from './components/Logo';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div className={styles.tasks}>
      <Logo />
      <div className={styles.addTasks}>
        <input type='text' />
        <button>Criar</button>
      </div>
      <div>
        <p>
          Tarefas criadas <span>5</span>
        </p>
        <p>
          Concluídas<span>2 de 5</span>
        </p>
      </div>
      <div>
        <input type='checkbox' name='' id='' />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash />
      </div>
    </div>
  );
}

export default App;
