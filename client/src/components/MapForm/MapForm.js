import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';

import {Container, Card, Form} from 'react-bootstrap';
import classes from './Forms.module.css';

const MapForm = ({addPost}) => {
  const [text, setText] = useState('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    addPost({text, lat, lng});
    setText('');
    setLat(0);
    setLng(0);
  };

  return (
    <Fragment>
      <Container style={{height: '100%'}}>
        {' '}
        <Card className={classes.card}>
          <Card.Title> Enter the coordinates and your activities </Card.Title>
          <Form className={classes.form} onSubmit={(e) => submitHandler(e)}>
            <textarea
              className={classes.textarea}
              rows='5'
              name='text'
              placeholder='Create a post'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Group className={classes.coordinates}>
              <Form.Label> Latitude </Form.Label>
              <input
                type='number'
                name='lat'
                onChange={(e) => setLat(e.target.value)}
              />
              <Form.Label> Longitude </Form.Label>
              <input
                type='number'
                name='lng'
                onChange={(e) => setLng(e.target.value)}
              />
            </Form.Group>
            <input type='submit' className={classes.btn} value='Submit' />
          </Form>
        </Card>
      </Container>
    </Fragment>
  );
};

MapForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, {addPost})(MapForm);
