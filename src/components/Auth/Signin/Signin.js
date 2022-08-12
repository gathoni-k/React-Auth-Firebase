// import { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import * as Yup from 'yup';
import {
  useFormik,
} from 'formik';
import styles from '../signup.module.css';
import Button from '../Button';

export default function Signin() {
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
    onSubmit(values) {
      // eslint-disable-next-line no-alert
      alert(`You are signed up with ${values.email}`);
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.logoImage}>
        <img alt="devChallenges logo" src="./devChallenges.svg" />
      </div>
      <div className={styles.heading}>Login </div>
      <form className={styles.form}>
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? styles.inputerror : styles.input} placeholder="Email" />
          <MdEmail className={styles.icon} aria-hidden="true" />
        </div>
        {formik.touched.email && formik.errors.email && (
        <span className="errortext">{formik.errors.email}</span>
        )}
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? styles.inputerror : styles.input} placeholder="Password" />
          <MdLock className={styles.icon} aria-hidden="true" />
        </div>
        {formik.touched.password && formik.errors.password && (
        <span className="errortext">{formik.errors.password}</span>
        )}
        <button type="submit" className={styles.submitbutton}>Login</button>
      </form>
      <p className={styles.smalltext}>or continue with these social profiles</p>
      <div className={styles.socialsignup}>
        {icons.map((icon) => <Button icon={icon} key={icon} />)}
      </div>
      <p className={styles.smalltext}>
        Already a member?
        {' '}
        <a href="/">Login</a>
      </p>
    </div>

  );
}
