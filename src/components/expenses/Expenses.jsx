import React, { useState, useContext} from 'react';
import { Context } from "../../Context.js";
import '../../pages/createBudget/createBudget.css'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Expenses = () => {
  const { id } = useParams();

  const initialValues = {
    groceries: 0,
    restaurant: 0,
    barcafe: 0,
    rent: 0,
    utilities: 0,
    insurance: 0,
    fuel: 0,
    entertaiment: 0,
    communication: 0,
  };

  const [inputsValue, setInputsValue] = useState(initialValues);

  const { userData } = useContext(Context);

  const handleInputChange = (e) => {
    // taking the information from the input form
    const { name, value } = e.target;

    const newValues = {
      ...inputsValue,
      [name]: value,
    };
    setInputsValue(newValues)

    calculateTotalValues(newValues)
  };
/// setting state for total value
  const [totalValue,setTotalValue] = useState(0);
//  calculating the total of each input
  const calculateTotalValues = (newValues) => {
    const { groceries , restaurant, barcafe, rent, utilities, insurance, fuel, entertaiment, communication} = newValues;
    const newTotal = parseInt(groceries) + parseInt(restaurant) + parseInt(barcafe) + parseInt(rent) + parseInt(utilities) + parseInt(insurance) + parseInt(fuel) + parseInt(entertaiment) + parseInt(communication)
    setTotalValue(newTotal)
    console.log(totalValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const groceries = inputsValue.groceries;
    const restaurant = inputsValue.restaurant;
    const barcafe = inputsValue.barcafe;
    const rent = inputsValue.rent;
    const utilities = inputsValue.utilities;
    const insurance = inputsValue.insurance;
    const fuel = inputsValue.fuel;
    const entertainment = inputsValue.entertaiment;
    const communication = inputsValue.communication;
    const total = total.total;
    const totalExpense = totalValue


    fetch('http://localhost:5000/createExpenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: userData.userid,
        id: id,
        groceries: groceries,
        restaurant: restaurant,
        barcafe: barcafe,
        rent: rent,
        utilities: utilities,
        insurance: insurance,
        fuel: fuel,
        entertainment: entertainment,
        communication: communication,
        total: totalExpense,
      }),
    }).then(() => {

      console.log('Submission Successful');
      window.location.replace('/budgetpage');
    });
  };

  return (
    <>
      <Container>
      <div class="pt-2">
          <header class="header p-2 justify-content-right">
            <h1>Expenses </h1>
         </header>
       </div>
        <Row>
          <Col lg={3} md={3} sm={5} className='p-4 m-auto shadow-sm rounded-lg'>
            <h2>Expenses</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='groceries'>
                <Form.Label>Groceries</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Groceries'
                  value={inputsValue.groceries}
                  onChange={handleInputChange}
                  name='groceries'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='restaurant'>
                <Form.Label>Restaurant</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Restaurant'
                  value={inputsValue.restaurant}
                  onChange={handleInputChange}
                  name='restaurant'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='bar-cafe'>
                <Form.Label>Bar/Cafe</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Bar/Cafe'
                  value={inputsValue.barcafe}
                  onChange={handleInputChange}
                  name='barcafe'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='rent'>
                <Form.Label>Rent</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Rent'
                  value={inputsValue.rent}
                  onChange={handleInputChange}
                  name='rent'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='utilities'>
                <Form.Label>Utilities</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Utilities'
                  value={inputsValue.utilities}
                  onChange={handleInputChange}
                  name='utilities'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='insurance'>
                <Form.Label>Insurance</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Insurance'
                  value={inputsValue.insurance}
                  onChange={handleInputChange}
                  name='insurance'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='fuel'>
                <Form.Label>Fuel</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Fuel'
                  value={inputsValue.fuel}
                  onChange={handleInputChange}
                  name='fuel'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='entertaiment'>
                <Form.Label>Entertaiment</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Entertaiment'
                  value={inputsValue.entertaiment}
                  onChange={handleInputChange}
                  name='entertaiment'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='communication'>
                <Form.Label>Communication</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Communication'
                  value={inputsValue.communication}
                  onChange={handleInputChange}
                  name='communication'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='total'>
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Total'
                  value={totalValue}
                  onChange={handleInputChange}
                  name='total'
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Save
              </Button>
              <Button variant='danger' className='m-5' type='submit'>
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Expenses;
