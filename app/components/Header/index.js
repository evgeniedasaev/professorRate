import React from 'react';
import { Link } from 'react-router';

import SearchForm from '../SearchForm';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header>
        <nav className="c-nav c-nav--inline c-nav--high">
          <Link className="c-nav__item" to="/">Оцени профессора</Link>
          <Link className="c-nav__item c-nav__item--right" to="/login">Зарегистрироваться</Link>
          <Link className="c-nav__item c-nav__item--right" to="/logout">
            <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Войти
          </Link>
        </nav>
        <SearchForm />
      </header>
    );
  }
}

export default Header;
