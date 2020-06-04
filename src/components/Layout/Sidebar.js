import logo200Image from 'assets/img/logo/logo_200.png';
import logo_s from 'assets/img/SmartCareLogo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdLocalDining,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdStore,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRestorePage,
  MdFlag,
  MdMood,
  MdLocationCity,
  MdViewCarousel,
  MdMenu,
  MdRestaurantMenu,
  MdWeb,
  MdWidgets,
  MdDns,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  {
    to: '/storecategories',
    name: 'Store Categories',
    exact: false,
    Icon: MdDns,
  },
  {
    to: '/servicesGs',
    name: 'Services',
    exact: false,
    Icon: MdGroupWork,
  },
  { to: '/moodsGs', name: 'Moods', exact: false, Icon: MdMood },
  {
    to: '/MenuCategoriesGs',
    name: 'Menu Categories',
    exact: false,
    Icon: MdRestaurantMenu,
  },
  // {
  //   to: '/dropdowns',
  //   name: 'dropdowns',
  //   exact: false,
  //   Icon: MdArrowDropDownCircle,
  // },
  // { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  // { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  // { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
  // { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
  {
    to: '/storecategories',
    name: 'Restaurant Categories',
    exact: false,
    Icon: MdDns,
  },
  { to: '/servicesGs', name: 'Services', exact: false, Icon: MdGroupWork },
  { to: '/moodsGs', name: 'Moods', exact: false, Icon: MdMood },
  {
    to: '/MenuCategoriesGs',
    name: 'Menu Categories',
    exact: false,
    Icon: MdRestaurantMenu,
  },
];

const pageContents = [
  {
    to: '/storecategories',
    name: 'RestoStores',
    exact: false,
    Icon: MdRestorePage,
  },
  {
    to: '/storecategories',
    name: 'Drivers',
    exact: false,
    Icon: MdAccountCircle,
  },
  {
    to: '/moodsGs',
    name: 'Promocodes',
    exact: false,
    Icon: MdViewCarousel,
  },
  { to: '/MenuCategoriesGs', name: 'City', exact: false, Icon: MdLocationCity },
  { to: '/login', name: 'Country', exact: false, Icon: MdFlag },
];

const navItems = [
  { to: '/Dashboard', name: 'dashboard', exact: true, Icon: MdDashboard },
  // { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  // { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  // { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isOpenTrueOrFalse: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo_s}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">Smart Care</span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* Grocery Store By WD */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdMenu className={bem.e('nav-item-icon')} />
                  <span className="align-self-start">Grocery Store</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* Restaurant By WD */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdMenu className={bem.e('nav-item-icon')} />
                  <span className="">Restaurant</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            {/* Manage By WD */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdMenu className={bem.e('nav-item-icon')} />
                  <span className="">Manage</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
