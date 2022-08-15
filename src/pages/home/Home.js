import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Auth/AuthContext';
import getNameFromEmail from '../../helpers/getNameFromEmail';
import styles from './home.module.css';

export default function Home() {
  const value = useContext(AuthContext);
  const [name, setname] = useState('');
  useEffect(() => {
    if (value.user.email) {
      setname(getNameFromEmail(value.user.email));
    }
  }, [value]);
  return (
    <div className={styles.container}>{name || 'Login'}</div>
  );
}
