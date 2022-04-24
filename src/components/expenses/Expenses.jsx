import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';


const Expenses = () => {
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
        total: 0
    }
    
    const [inputsValue, setInputsValue] = useState(initialValues)

    return(
        <> 
            <Container>
                <Row>
                    <Col lg={3} md={3} sm={5} className='p-4 m-auto shadow-sm rounded-lg'>
                    <DropdownButton className='p-3 mb-3'id="budget-allocated" title="Budget Allocated">
                        <Dropdown.Item href="#/action-1">Expenses Name Here</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Expenses Name Here</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Expenses Name Here</Dropdown.Item>
                    </DropdownButton>
                        <Form>
                            <Form.Group className="mb-3" controlId="groceries">
                                <Form.Label>Groceries</Form.Label>
                                <Form.Control type="number" placeholder="Groceries" value={inputsValue.groceries} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="restaurant">
                                <Form.Label>Restaurant</Form.Label>
                                <Form.Control type="number" placeholder="Restaurant" value={inputsValue.restaurant} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bar-cafe">
                                <Form.Label>Bar/Cafe</Form.Label>
                                <Form.Control type="number" placeholder="Bar/Cafe" value={inputsValue.barcafe}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="rent">
                                <Form.Label>Rent</Form.Label>
                                <Form.Control type="number" placeholder="Rent" value={inputsValue.rent} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="utilities">
                                <Form.Label>Utilities</Form.Label>
                                <Form.Control type="number" placeholder="Utilities" value={inputsValue.utilities} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="insurance">
                                <Form.Label>Insurance</Form.Label>
                                <Form.Control type="number" placeholder="Insurance" value={inputsValue.insurance} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="fuel">
                                <Form.Label>Fuel</Form.Label>
                                <Form.Control type="number" placeholder="Fuel" value={inputsValue.fuel} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="entertaiment">
                                <Form.Label>Entertaiment</Form.Label>
                                <Form.Control type="number" placeholder="Entertaiment" value={inputsValue.entertaiment} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="communication">
                                <Form.Label>Communication</Form.Label>
                                <Form.Control type="number" placeholder="Communication" value={inputsValue.communication} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="total">
                                <Form.Label>Total</Form.Label>
                                <Form.Control type="number" placeholder="Total" value={inputsValue.total} />
                            </Form.Group>

                            <Button variant="primary" type="submit">Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Expenses