import { Button } from './Button';
import styles from './AddItem.module.css';

export function AddItem() {
  return (
    <div className={styles.addItem}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <Button />
    </div>
  );
}
