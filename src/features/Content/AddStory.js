import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { add } from './ContentSlice';
export default function AddStory() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add New Story</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="title" />
            {/* If this field has been touched, and it contains an error, display it
             */}
            {touched.title && errors.title && <div>{errors.title}</div>}
            <Field name="subheading" />
            {/* If this field has been touched, and it contains an error, display
           it */}
            {touched.subheading && errors.subheading && (
              <div>{errors.subheading}</div>
            )}
            <button type="button" onClick={() => dispatch(add())}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
