import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import {togglePage} from '../../actions/authPage';
import {PropTypes} from 'prop-types';

import {Card, Button, Form} from 'react-bootstrap';

import classes from './Auth.module.css';

const Register = ({setAlert, register, isAuthenticated, togglePage}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {name, email, password} = formData;
  let history = useHistory();

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    register({name, email, password});
    history.push('/hub');
  };
  const toggleHandler = (e) => {
    togglePage();
  };
  return (
    <Fragment>
      <Card className={classes.card}>
        <Card.Title className={classes.animation}>
          {' '}
          Create an Account{' '}
        </Card.Title>
        <Card.Body>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group>
              <Form.Label
                className={classes.animation}
                id={classes.label_username}
              >
                {' '}
                Username{' '}
              </Form.Label>
              <Form.Control
                className={classes.animation}
                id={classes.form1}
                type='name'
                name='name'
                placeholder='Enter a username'
                autoComplete='off'
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className={classes.animation}
                id={classes.label_email}
              >
                Email
              </Form.Label>
              <Form.Control
                className={classes.animation}
                id={classes.form2}
                type='email'
                name='email'
                placeholder='Enter a valid email'
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
                id={classes.form3}
                type='password'
                name='password'
                placeholder='Enter a password'
                autoComplete='off'
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Button
              className={classes.btn + ' ' + classes.animation}
              type='submit'
            >
              {' '}
              Sign Up{' '}
            </Button>
          </Form>
          <Button
            onClick={() => toggleHandler()}
            className={classes.btn + ' ' + classes.animation}
            style={{fontSize: '18px'}}
            variant='secondary'
          >
            {' '}
            Have an Account?{' '}
          </Button>
        </Card.Body>
      </Card>
      {/* <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
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

        <input type='submit' className='btn btn-primary' value='Register' />
      </form> */}
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  togglePage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLogin: state.authPage.isLogin,
});

export default connect(mapStateToProps, {
  setAlert,
  register,
  togglePage,
})(Register);
