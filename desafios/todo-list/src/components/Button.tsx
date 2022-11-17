import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

export function Button() {
  return (
    <button className={styles.buttonAddItem}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
}
