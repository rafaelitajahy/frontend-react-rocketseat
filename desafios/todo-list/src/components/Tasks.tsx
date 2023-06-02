import imgClipBoard from '../assets/clipboard.svg';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </header>
      <main>
        <img src={imgClipBoard} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </main>
    </div>
  );
}
