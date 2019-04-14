import React, { Component } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { HashRouter as Router, Route } from "react-router-dom";

import { checkAccountValidation, checkPasswordValidation } from '../../utils/login'
import './index.css';

class App extends Component {
  state = {
    accountInvalid: false,
    passwordInvalid: false,
    validated: false,
    loading: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { account, password } = this.form
    if (!checkAccountValidation(account.value) || !checkPasswordValidation(password.value)) {
      event.preventDefault()
      this.setState({
        accountInvalid: true,
        passwordInvalid: true,
      })
    } else {
      this.setState({ validated: true, loading: true });
      setTimeout(() =>{
        this.props.history.push('/home');
      }, 500)
    }
  }

  render() {
    const { accountInvalid, passwordInvalid, validated, loading } = this.state
    console.log(this.props);
    return (
      <div className="login-container">
        <div className="login-title">
          <h1>思沃学院在线学习</h1>
        </div>
        <div className="form-wrapper">
          <Form
            ref={form => this.form = form}
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Group controlId="formBasicAccount">
              <Form.Label>Account</Form.Label>
              <Form.Control
                type="text"
                name="account"
                isInvalid={accountInvalid}
                placeholder="Enter Account"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid username or password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                账号为2-20位英文,数字
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                isInvalid={passwordInvalid}
                placeholder="Enter Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid username or password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                账号为8-20位英文,数字,标点
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        {loading && (
          <div className="loading-modal">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
  }
}

export default App;
