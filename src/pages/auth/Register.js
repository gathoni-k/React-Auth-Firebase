import Signup from '../../components/Auth/Signup/Signup';
import styles from './auth.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <Signup />
    </div>
  );
}
