import React, {Fragment} from 'react';
import About from '../About/About';
import Chat from '../Chat/Chat';
import Spinner from '../Layout/Spinner';
import Map from '../Map/Map';
import MapForm from '../MapForm/MapForm';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

const Layout = ({auth}) => {
  return (
    <Fragment>
      <div style={{background: 'rgb(2, 70, 116)'}}>
        <About user={auth.user} />
        <Map />
        <MapForm />
      </div>
    </Fragment>
  );

  // return auth.loading || null ? (
  //   <Spinner />
  // ) : (
  //   <Fragment>
  //     <About user={auth.user} />
  //     <div> Map </div>
  //     <Chat />
  //   </Fragment>
  // );
};

Layout.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Layout);
