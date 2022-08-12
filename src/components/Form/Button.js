// import {
//   FaFacebookSquare, FaGithub, FaGoogle, FaTwitter,
// } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './signup.module.css';

const icons = {
  google: './Google.svg',
  twitter: './Twitter.svg',
  facebook: './Facebook.svg',
  github: './Github.svg',
};

function Button({ icon }) {
  return (
    <button type="button" className={styles.socialiconwrapper} arial-label={`Login with ${icon}`}>
      <img src={icons[icon]} alt={icon} />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
};

export default Button;
