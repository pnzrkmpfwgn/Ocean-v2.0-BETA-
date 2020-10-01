import React from 'react';
import classes from './About.module.css';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

const About = (user) => {
  if (user) {
    console.log(user);
    console.log('Executed');
  }
  return (
    <section className={classes.about_section}>
      <h1 className={classes.greeting}>
        {' '}
        Welcome to the Ocean<span className={classes.special}>Hub</span>,
        {user.user && user.user.name}
      </h1>
      <p className={classes.paragraph}>
        Here we share locations of our activities and having discussions, Let's
        join if you please!
      </p>
    </section>
  );
};

About.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(About);
