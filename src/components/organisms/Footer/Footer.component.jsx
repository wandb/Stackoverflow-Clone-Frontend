import React, { Fragment } from "react";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <span style={{lineHeight: `40px`}}>Made with love & coffee by <a href="https://wandb.ai" target="_blank" rel="noreferrer" style={{}}>Weights & Biases.</a></span>
    </div>
  </Fragment>
};

export default Footer;