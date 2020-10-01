import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import {API_KEY} from '../../config/api_key';

const MapContainer = ({getPosts, post: {posts}, isAuthenticated}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log(isAuthenticated.isAuthenticated);
  const mapStyles = {
    height: '100vh',
    width: '100%',
    marginBottom: '20px',
  };
  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  console.log(posts);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={2} center={defaultCenter}>
        {isAuthenticated.isAuthenticated
          ? posts.map((post) => (
              <Marker key={post._id} position={{lat: post.lat, lng: post.lng}}>
                {posts.map((post) => (
                  <InfoWindow
                    key={post._id}
                    position={{lat: post.lat, lng: post.lng}}
                  >
                    {<p> {post.text} </p>}
                  </InfoWindow>
                ))}
              </Marker>
            ))
          : 'nothing'}
      </GoogleMap>
    </LoadScript>
  );
};

MapContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateTopProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth,
});

export default connect(mapStateTopProps, {getPosts})(MapContainer);
