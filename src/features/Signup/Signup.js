import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function Signup() {
  const SignupSchema = yup.scheme;
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          displayname: '',
          firstname: '',
          lastname: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="form">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="label" className="error" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="label" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
