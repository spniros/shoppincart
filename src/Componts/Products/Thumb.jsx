import React from 'react';
import PropTypes from 'prop-types';

const Thumb  = ({classes,src,alt,title}) => {
  
  return (
    <div className={classes}>
      <img src={src} alt={alt} title={title} />
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;






