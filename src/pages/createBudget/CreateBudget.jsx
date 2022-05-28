import React, { useState, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import './createBudget.css';
import { Context } from '../../Context.js';
import { useNavigate } from 'react-router-dom';

const NewBudget = () => {
  const initialValues = {
    budgetName: null,
    periodDate: 'weekly',
    startDate: null,
    endDate: null,
    totalAmountAllocated: 0,
  };

  const [inputsValue, setInputsValue] = useState(initialValues);
  const { userData, budgetList, setBudgetList } = useContext(Context);

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputsValue({
      ...inputsValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetName = inputsValue.budgetName;
    const period = inputsValue.periodDate;
    const startDate = inputsValue.startDate;
    const endDate = inputsValue.endDate;
    const totalAmountAllocated = inputsValue.totalAmountAllocated;

    console.log('this is userData from context api:', userData);

    fetch('https://infinite-reef-87658.herokuapp.com//createBudget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: userData.data.userID,
        budgetName,
        periodDate: period,
        startDate,
        endDate,
        totalAmountAllocated,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const newBudget = [budgetName, result.data.budgetid];
        const allBudgets = [...budgetList, newBudget];
        setBudgetList(allBudgets);
        navigate('/budgetpage');
      });
    console.log('here');

    const newBudgetList = [...budgetList, budgetName];
    setBudgetList(newBudgetList);
  };
  console.log(userData);
  return (
    <>
      <Container>
        <div class='pt-2'>
          <header class='header p-2 justify-content-right'>
            <h1>New Budget</h1>
          </header>
        </div>
        <Row>
          <Col
            lg={3}
            md={3}
            sm={5}
            className='p-4 pt-2 m-auto shadow-sm rounded-lg'
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='budgetName'>
                <Form.Label>Budget Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Budget Name'
                  value={inputsValue.budgetName}
                  onChange={handleInputChange}
                  name='budgetName'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='period'>
                <Form.Label>Period</Form.Label>
                <select
                  class='form-select'
                  aria-label='Default select example'
                  id='period'
                  title='Period'
                  type='text'
                  value={inputsValue.period}
                  onChange={handleInputChange}
                  name='period'
                >
                  <option value='one'>Daily</option>
                  <option value='two'>Weekly</option>
                  <option value='three'>Monthly</option>
                </select>
              </Form.Group>
              <Form.Group className='mb-3' controlId='bar-cafe'>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='startDate'
                  value={inputsValue.startDate}
                  onChange={handleInputChange}
                  name='startDate'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='rent'>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Rent'
                  value={inputsValue.endDate}
                  onChange={handleInputChange}
                  name='endDate'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='utilities'>
                <Form.Label>Total Amount Allocated</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Total Amount Allocated'
                  value={inputsValue.totalAmountAllocated}
                  onChange={handleInputChange}
                  name='totalAmountAllocated'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewBudget;
