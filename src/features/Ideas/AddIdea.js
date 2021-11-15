import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function AddIdea() {
  const submitIdea = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          'Problem': problem,
          'Proposed Solution': proposed_solution,
          'Early Adaptors': content,
          'Value Proposition': value_proposition,
          'Alternate Solutions': alternate_solutions,
          'Measurements': measurements,
          'Revenue Metrix': revenue_metrix,
          'Cost Metrix': cost_metrix,
          'Target Segment': target_segment,
          'Existing Alternatives': existing_alternatives,
        },
      }),
    };
    console.log(requestOptions.body);
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Ideas?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };

  const AddStorySchema = Yup.object().shape({
    problem: Yup.string()
      .min(2, 'Too Short')
      .max(20, 'Too long')
      .required('Required'),
    proposed_solution: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    earlyadaptors: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    value_proposition: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    alternate_solutions: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    measurements: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    revenue_metrix: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    cost_metrix: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    target_segment: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    existing_alternatives: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
  });
  return (
    <>
      <form method="post">
        <label>Problem</label>
        <input
          type="text"
          name="problem"
          placeholder="Problem"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Proposed Solution</label>
        <input
          type="text"
          name="proposed_solution"
          placeholder="Proposed Solution"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>Early Adaptors</label>
        <input
          type="text"
          name="earlyadaptor"
          placeholder="Early Adaptors"
          onChange={(e) => setSubheading(e.target.value)}
        />
        <br />
        <label>Value Proposition</label>
        <input
          type="text"
          name="value_proposition"
          placeholder="Value Proposition"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Alternate Solutions</label>
        <input
          type="text"
          name="alternate_solutions"
          placeholder="Alternate Solutions"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Measurements</label>
        <input
          type="text"
          name="measurements"
          placeholder="Measurements"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Revenue Metrix</label>
        <input
          type="text"
          name="revenue_metrix"
          placeholder="Revenue Metrix"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>cost Metrix</label>
        <input
          type="text"
          name="cost_metrix"
          placeholder="cost Metrix"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Target Segment</label>
        <input
          type="text"
          name="target_segment"
          placeholder="Target Segment"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>Existing Alernatives</label>
        <input
          type="text"
          name="existing_alternatives"
          placeholder="Existing Alernatives"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        {/* <MyInput /> */}
        <button type="button" onClick={submitIdea}>
          Add <i className="fa-solid fa-plus"></i>
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
      </form>
    </>
  );
}
