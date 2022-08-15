import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Auth/AuthContext';
import getNameFromEmail from '../../helpers/getNameFromEmail';
import styles from './navbar.module.css';

export default function Navbar() {
  const [open, setopen] = useState(false);
  const toggleMenu = () => {
    setopen(!open);
  };
  const value = useContext(AuthContext);
  const [name, setname] = useState('');
  useEffect(() => {
    if (value.user.email) {
      setname(getNameFromEmail(value.user.email));
    }
  }, [value]);
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <img src="./devChallenges.svg" alt="logo" />
        </li>
        {name && (
        <li className={styles.user}>
          <div className={styles.userimg}>
            <img src="./devChallenges.png" alt="profile" />
          </div>
          <div className={styles.username}>{name}</div>
          <button type="button" className={styles.arrow} onClick={toggleMenu}>
            <img src={open ? './uparrow.svg' : './downarrow.svg'} alt="down arrow" />
          </button>
        </li>
        )}
      </ul>
      <div className={open ? styles.usermenuactive : styles.usermenu}>
        <ul>
          <li>
            <img src="./userprofile.svg" alt="profile" />
            <span> My Profile</span>
          </li>
          <li>
            <img src="./logout.svg" alt="logout" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>

  );
}
