import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function NavigationLayout({ children, showBreadcrumbs = true }) {
  return (
    <Fragment>
      <Header />

      {showBreadcrumbs && <Breadcrumbs />}

      {children}

      <Footer />
    </Fragment>
  );
}
