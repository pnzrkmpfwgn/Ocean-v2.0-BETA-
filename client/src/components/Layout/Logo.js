import React, {Fragment} from 'react';
import Logo_img from '../../assets/Logo.png';
import classes from './Logo.module.css';

const Logo = ({children}) => {
  return (
    <Fragment>
      <img className={classes.logo} src={Logo_img} alt='Logo' />
      <main> {children} </main>
    </Fragment>
  );
};

export default Logo;
