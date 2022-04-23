import React from 'react'
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';


const Expenses = () => {

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
                                <Form.Control type="number" placeholder="Groceries" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="restaurant">
                                <Form.Label>Restaurant</Form.Label>
                                <Form.Control type="number" placeholder="Restaurant" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bar-cafe">
                                <Form.Label>Bar/Cafe</Form.Label>
                                <Form.Control type="number" placeholder="Bar/Cafe" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="rent">
                                <Form.Label>Rent</Form.Label>
                                <Form.Control type="number" placeholder="Rent" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="utilities">
                                <Form.Label>Utilities</Form.Label>
                                <Form.Control type="number" placeholder="Utilities" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="insurance">
                                <Form.Label>Insurance</Form.Label>
                                <Form.Control type="number" placeholder="Insurance" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="fuel">
                                <Form.Label>Fuel</Form.Label>
                                <Form.Control type="number" placeholder="Fuel" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="entertaiment">
                                <Form.Label>Entertaiment</Form.Label>
                                <Form.Control type="number" placeholder="Entertaiment" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="communication">
                                <Form.Label>Communication</Form.Label>
                                <Form.Control type="number" placeholder="Communication" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="total">
                                <Form.Label>Total</Form.Label>
                                <Form.Control type="number" placeholder="Total" />
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