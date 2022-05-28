import React, { useContext, useState, useRef } from 'react';
import { Context } from '../../Context';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

// test login
// ray@gmail.com
// password
export default function SignUp() {
  const FirstName = useRef(null);
  const LastName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const { isLoggedIn, setIsLoggedIn, setUserData, userData } =
    useContext(Context);

  const onformSubmit = (e) => {
    console.log(FirstName.current.value);
    console.log(LastName.current.value);
    console.log(Email.current.value);
    console.log(Password.current.value);
    e.preventDefault();

    console.log('yes form is submitted!!!');

    axios
      .post('https://infinite-reef-87658.herokuapp.com//createUser', {
        firstName: FirstName.current.value,
        lastName: LastName.current.value,
        email: Email.current.value,
        password: Password.current.value,
      })
      .then((res) => {
        console.log('LINE 31:', res);
        setIsLoggedIn(true);
        setUserData({
          firstName: FirstName.current.value,
          lastName: LastName.current.value,
          email: Email.current.value,
          password: Password.current.value,
        });
        window.location.replace('/budgetpage');
      })
      .catch((err) => {
        console.log('line 46:',err);
      });

    console.log('sub');
  };
  return (
    <div>
      <Form onSubmit={onformSubmit}>
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            FirstName
          </Form.Label>
          <Col sm='10'>
            <Form.Control ref={FirstName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            LastName
          </Form.Label>
          <Col sm='10'>
            <Form.Control ref={LastName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email
          </Form.Label>
          <Col sm='10'>
            <Form.Control ref={Email} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='password'
              placeholder='password'
              ref={Password}
            />
          </Col>
        </Form.Group>
        <Button type='submit'>Sign Up</Button>
      </Form>
    </div>
  );
}
