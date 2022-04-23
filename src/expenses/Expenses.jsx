import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Expenses = () => {

    return(
        <> 
            <Container>
                <Row>
                    <Col> 
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