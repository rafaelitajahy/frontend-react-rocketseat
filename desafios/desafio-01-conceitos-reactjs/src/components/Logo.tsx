import logoTodo from '../assets/logo-todo.svg';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoTodo} alt='Logotipo app todo' />
    </div>
  );
}
