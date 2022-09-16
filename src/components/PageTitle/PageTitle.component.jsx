import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({title}) => {
  let defaultTitle =
    'Gradient Explosion - Where ML Practitioners Learn, Share, & Build Careers';

  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
