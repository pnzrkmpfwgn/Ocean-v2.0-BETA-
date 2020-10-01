import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
import {togglePage} from '../../actions/authPage';

import {Form, Card, Button} from 'react-bootstrap';
import classes from './Auth.module.css';

const Login = ({login, isAuthenticated, togglePage}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/hub' />;
  }

  const toggleHandler = () => {
    togglePage();
  };
  return (
    <Fragment>
      <Card className={classes.card}>
        <Card.Title className={classes.animation}>Sign In</Card.Title>
        <Card.Body>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group>
              <Form.Label
                className={classes.animation}
                id={classes.label_email}
              >
                Email
              </Form.Label>
              <Form.Control
                className={classes.animation}
                id={classes.form1}
                type='email'
                name='email'
                placeholder='Enter your email'
                autoComplete='off'
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className={classes.animation}
                id={classes.label_password}
              >
                {' '}
                Password{' '}
              </Form.Label>
              <Form.Control
                className={classes.animation}
                id={classes.form2}
                type='password'
                name='password'
                placeholder='Enter your password'
                autoComplete='off'
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Button
              className={classes.btn + ' ' + classes.animation}
              type='submit'
            >
              {' '}
              Login{' '}
            </Button>
          </Form>
          <Button
            variant='secondary'
            className={classes.btn + ' ' + classes.animation}
            style={{fontSize: '18px'}}
            onClick={() => toggleHandler()}
          >
            {' '}
            Don't Have an Account?{' '}
          </Button>
        </Card.Body>
      </Card>
      {/* <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => onChange(e)}
            name='email'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      {isAuthenticated && <p>okeydir annem</p>} */}
    </Fragment>
  );
};

login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  togglePage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {login, togglePage})(Login);
