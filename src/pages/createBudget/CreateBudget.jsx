import React, {useState,useContext} from "react";
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./createBudget.css";
import { Context } from "../../Context.js";


    const NewBudget = () => {
        const initialValues = {
            budgetName: null,
            periodDate: null,
            startDate: null,
            endDate: null,
            totalAmountAllocated: 0
        }

        const [inputsValue, setInputsValue] = useState(initialValues)

        const { isLoggedIn, setIsLoggedIn, setUserData, userData, budgetList, setBudgetList } =
    useContext(Context);

        const handleInputChange = (e) => {
            const {name, value} = e.target

            setInputsValue({
                ...inputsValue,
                [name]: value
            })
        }


        const handleSubmit = (e) =>{
            e.preventDefault()
            const budgetName = inputsValue.budgetName
            const period = inputsValue.periodDate
            const startDate = inputsValue.startDate
            const endDate = inputsValue.endDate
            const totalAmountAllocated = inputsValue.totalAmountAllocated


console.log('this is userData from context api:',userData)

        fetch('http://localhost:5000/createBudget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId : userData.userID,
        budgetName,
        periodDate:period,
        startDate,
        endDate,
        totalAmountAllocated
      }),
    }).then((response) => response.json())
    .then((result) => {
        console.log(result)
    });
    console.log("here")

    const newBudgetList = [...budgetList, budgetName]
    setBudgetList(newBudgetList)
        }

    return(
        <>
            <Container>
                <div class="pt-2">
                    <header class="header p-2 justify-content-right">
                        <h1>New Budget</h1>
                    </header>
                </div>
                <Row>
                    <Col lg={3} md={3} sm={5} className='p-4 pt-2 m-auto shadow-sm rounded-lg'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="budgetName">
                                <Form.Label>Budget Name</Form.Label>
                                <Form.Control type="text" placeholder="Budget Name" value={inputsValue.budgetName} onChange={handleInputChange} name="budgetName" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="period">
                                <Form.Label>Period</Form.Label>
                                {/* <Form.Control type="text" placeholder="Weekly" value={inputsValue.period} onChange={handleInputChange} name="period" /> */}
                           <DropdownButton class="selectpicker" className='p-3 mb-3'id="period" title="Period">
                        <Dropdown.Item value={inputsValue.period} onChange={handleInputChange} >Daily</Dropdown.Item>
                        <Dropdown.Item value={inputsValue.period} onChange={handleInputChange} >Monthly</Dropdown.Item>
                        <Dropdown.Item value={inputsValue.period} onChange={handleInputChange} >Annually</Dropdown.Item>
                            </DropdownButton>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bar-cafe">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" placeholder="startDate" value={inputsValue.startDate} onChange={handleInputChange} name="startDate" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="rent">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" placeholder="Rent" value={inputsValue.endDate} onChange={handleInputChange} name="endDate" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="utilities">
                                <Form.Label>Total Amount Allocated</Form.Label>
                                <Form.Control type="number" placeholder="Total Amount Allocated" value={inputsValue.totalAmountAllocated}onChange={handleInputChange} name="totalAmountAllocated" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NewBudget;
