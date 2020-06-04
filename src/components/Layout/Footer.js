import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{' '}
            <a href="http://orangenow.ca/">WD</a>, made with love for a better
            web app
          </p>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
