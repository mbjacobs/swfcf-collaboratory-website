import React, { useState, useHistory } from 'react'
import {
  Grid,
  Header,
  Segment,
  Button,
  Form,
  Message
} from 'semantic-ui-react'

function LoginLayout() {
  const [emailInput, setEmailInput] = useState([]);
  const [passwordInput, setPasswordInput] = useState([]);

  const history = useHistory;

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      email: '123@gmail.com',
      password: '123'
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
      const token = '1234567890';
      sessionStorage.setItem('auth-token', token);
      alert ('you got the right email and password!')
      // history.push('/menu');
    } else {
      alert ('wrong email or password combination');
    }
  }

  return (
    <Grid centered columns={2} style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Collaboratory Portal Login
        </Header>
        <Segment>
          <Form autoComplete='off' onSubmit={handleLoginSubmit} size="big">
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="Email address"
              value={emailInput}
              onChange={handleEmailChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />

            <Button color="blue" fluid size="big">
              Login
            </Button>
          </Form>
        </Segment>
        <Message info textAlign='center'>
          Forgot Password? <a href="#">Reset your password</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default LoginLayout
  

