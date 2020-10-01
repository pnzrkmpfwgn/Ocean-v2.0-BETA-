import React, {Fragment} from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';

import classes from './MainPage.module.css';

const MainPage = ({isLogin, auth: isAuthenticated}) => {
  if (isAuthenticated.isAuthenticated) {
    return <Redirect to='/hub' />;
  }

  console.log(isAuthenticated.isAuthenticated);
  return (
    <Fragment>
      <div className={classes.MainPage}>
        <div className={classes.cloud_container}>
          <div>
            <div className={classes.cloud}></div>
            <div className={classes.cloud + ' ' + classes.cloud1}></div>
            <div className={classes.cloud + ' ' + classes.cloud2}></div>
            <div className={classes.cloud + ' ' + classes.cloud3}></div>
          </div>
        </div>
        <div className='align-items-center d-flex' style={{height: '100vh'}}>
          <Row
            className='justify-content-between d-flex'
            style={{width: '100%'}}
          >
            <Col
              className='align-items-center d-flex'
              style={{marginLeft: '20px'}}
            >
              {' '}
              <h1 className={classes.heading}>
                {' '}
                Welcome to The Ocean<span className={classes.special}>
                  Hub
                </span>{' '}
              </h1>{' '}
            </Col>
            <Col
              style={{marginRight: '40px'}}
              className='justify-content-end d-flex'
            >
              {isLogin ? <Login /> : <Register />}
            </Col>
          </Row>
        </div>

        <section className={classes.wave_container}>
          <div className={classes.submarine}></div>
          <div className={classes.wave + ' ' + classes.wave1}></div>
          <div className={classes.wave + ' ' + classes.wave2}></div>
          <div className={classes.wave + ' ' + classes.wave3}></div>
          <div className={classes.wave + ' ' + classes.wave4}></div>
        </section>
      </div>
    </Fragment>
  );
};

MainPage.propTypes = {
  isLogin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLogin: state.authPage.isLogin,
  auth: state.auth,
});

export default connect(mapStateToProps)(MainPage);
