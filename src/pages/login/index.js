import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import { checkAccountValidation, checkPasswordValidation } from '../../utils/login'
import './index.css';

class App extends Component {
  state = {
    accountInvalid: false,
    passwordInvalid: false,
    validated: false
  }

  handleSubmit = (event) => {
    const { account, password } = this.form
    if (!checkAccountValidation(account.value) || !checkPasswordValidation(password.value)) {
      event.preventDefault()
      this.setState({
        accountInvalid: true,
        passwordInvalid: true,
      })
    } else {
      this.setState({ validated: true });
    }
  }

  render() {
    const { accountInvalid, passwordInvalid, validated } = this.state

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
      </div>
    );
  }
}

export default App;
