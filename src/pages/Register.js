import Signup from '../components/Form/Signup/Signup';
import styles from './register.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <Signup />
    </div>
  );
}
