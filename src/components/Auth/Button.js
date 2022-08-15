// import {
//   FaFacebookSquare, FaGithub, FaGoogle, FaTwitter,
// } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { signInWithGithub } from '../../utils/firebase';
import styles from './signup.module.css';

const icons = {
  google: './Google.svg',
  twitter: './Twitter.svg',
  facebook: './Facebook.svg',
  github: './Github.svg',
};

function Button({ icon }) {
  const loginWithGitHub = async () => {
    const response = await signInWithGithub();
    console.log(response);
  };
  const handleClick = (e) => {
    const btnName = e.target.parentNode.name;
    if (btnName === 'github') {
      loginWithGitHub();
    }
  };
  return (
    <button type="button" name={icon} className={styles.socialiconwrapper} arial-label={`Login with ${icon}`} onClick={handleClick}>
      <img src={icons[icon]} alt={icon} />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
};

export default Button;
