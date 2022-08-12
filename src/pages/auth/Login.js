import Signin from '../../components/Auth/Signin/Signin';
import styles from './auth.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Signin />
    </div>
  );
}
