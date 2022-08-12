// import { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {
  useFormik,
} from 'formik';
import { useState } from 'react';
import styles from '../signup.module.css';
import Button from '../Button';
import { signinEmail } from '../../../utils/firebase';

export default function Signin() {
  const [loginError, setLoginError] = useState(null);
  const icons = ['google', 'twitter', 'facebook', 'github'];
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Provide valid email')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    async onSubmit(values) {
      // eslint-disable-next-line no-alert
      const errorMessage = await signinEmail(values.email, values.password);
      if (errorMessage) {
        setLoginError(errorMessage);
      } else {
        // redirect
        console.log('Logged in');
      }
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.logoImage}>
        <img alt="devChallenges logo" src="./devChallenges.svg" />
      </div>
      <div className={styles.heading}>Login </div>
      {loginError && <div className={styles.errortext}>{loginError}</div>}
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? styles.inputerror : styles.input} placeholder="Email" />
          <MdEmail className={styles.icon} aria-hidden="true" />
        </div>
        {formik.touched.email && formik.errors.email && (
        <span className={styles.errortext}>{formik.errors.email}</span>
        )}
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? styles.inputerror : styles.input} placeholder="Password" />
          <MdLock className={styles.icon} aria-hidden="true" />
        </div>
        {formik.touched.password && formik.errors.password && (
        <span className={styles.errortext}>{formik.errors.password}</span>
        )}
        <button type="submit" disabled={!formik.isValid} className={styles.submitbutton}>Login</button>
      </form>
      <p className={styles.smalltext}>or continue with these social profiles</p>
      <div className={styles.socialsignup}>
        {icons.map((icon) => <Button icon={icon} key={icon} />)}
      </div>
      <p className={styles.smalltext}>
        Not a member?
        {' '}
        <Link to="/signup">
          <span className={styles.linktext}>Register</span>
        </Link>
      </p>
    </div>

  );
}
