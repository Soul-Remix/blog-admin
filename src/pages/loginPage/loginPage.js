import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Loader from '../../components/loader/loader';
import TextInput from '../../components/textinput/textinput';

import './loginPage.css';

const LoginPage = ({ login, error, loggingIn }) => {
  return (
    <section className="login-container">
      <Formik
        initialValues={{
          userName: '',
          password: '',
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={(values) => login(values)}
      >
        <Form className="auth-form">
          <h2 className="auth-form-header">LogIn</h2>
          {error && <p className="error auth-form-p">{error}</p>}
          <TextInput
            label="User Name"
            name="userName"
            type="text"
            placeholder="user name"
          />
          <TextInput
            label="password"
            name="password"
            type="text"
            placeholder="password"
          />
          {!loggingIn && (
            <button className="auth-form-btn" type="submit">
              LogIn
            </button>
          )}
          {loggingIn && <Loader />}
        </Form>
      </Formik>
    </section>
  );
};

export default LoginPage;
