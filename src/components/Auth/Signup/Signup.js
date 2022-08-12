import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {
  useFormik,
} from 'formik';
import { useState } from 'react';
import styles from '../signup.module.css';
import Button from '../Button';
import { registerUserEmail } from '../../../utils/firebase';

export default function Signup() {
  const [submissionError, setsubmissionError] = useState('');
  const icons = ['google', 'twitter', 'facebook', 'github'];

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Provide valid email')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    async onSubmit(values) {
      const response = await registerUserEmail(values.email, values.password);
      if (response) {
        setsubmissionError(response);
      } else {
        // redirect
        console.log('Registered!');
      }
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.logoImage}>
        <img alt="devChallenges logo" src="./devChallenges.svg" />
      </div>
      <div className={styles.heading}>Join thousands of learners from around the world </div>
      <div className={styles.subheading}>
        Master web development by making real-life projects.
        There are multiple paths for you to choose
      </div>
      {submissionError && <div className={styles.errortext}>{submissionError}</div>}
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? styles.inputerror : styles.input} placeholder="Email" />
          <div className={styles.icon} aria-hidden="true">
            <img src="./Email.svg" alt="confirm_password" />
          </div>
        </div>
        {formik.touched.email && formik.errors.email && (
        <span className={styles.errortext}>{formik.errors.email}</span>
        )}
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? styles.inputerror : styles.input} placeholder="Password" />
          <div className={styles.icon} aria-hidden="true">
            <img src="./Lock.svg" alt="confirm_password" />
          </div>
        </div>
        {formik.touched.password && formik.errors.password && (
        <span className={styles.errortext}>{formik.errors.password}</span>
        )}
        <div className={styles.inputwithicon}>
          <input tabIndex="0" type="password" name="cPassword" value={formik.values.cPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.cPassword && formik.errors.cPassword ? styles.inputerror : styles.input} placeholder="Confirm Password" />
          <div className={styles.icon} aria-hidden="true">
            <img src="./Lock.svg" alt="confirm_password" />
          </div>
        </div>
        {formik.touched.cPassword && formik.errors.cPassword && (
        <span className={styles.errortext}>{formik.errors.cPassword}</span>
        )}
        <button type="submit" disabled={!formik.isValid} className={styles.submitbutton}>Start coding now</button>
      </form>
      <p className={styles.smalltext}>or continue with these social profiles</p>
      <div className={styles.socialsignup}>
        {icons.map((icon) => <Button icon={icon} key={icon} />)}
      </div>
      <p className={styles.smalltext}>
        Already a member?
        {' '}
        <Link to="/signin">
          <span className={styles.linktext}>Login</span>
        </Link>
      </p>
    </div>

  );
}
