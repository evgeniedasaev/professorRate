import React from 'react';
import { Link } from 'react-router';

import SearchForm from '../SearchForm';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { user, logout } = this.props;

    return (
      <header>
        <nav className="c-nav c-nav--high">
          <div className="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-fit o-container o-container--large u-pillar-box--small">
            <Link className="o-grid__cell o-grid__cell--hidden@small c-nav__item c-text--loud" to="/">Оцени профессора</Link>
            { 
              !user &&
              <Link className="o-grid__cell o-grid__cell--width-15@large o-grid__cell--width-20@medium o-grid__cell--width-35@small c-nav__item" to="/signin">
                <i className="fa fa-user"></i>&nbsp;&nbsp;Регистрация
              </Link>
            }
            { 
              !user &&      
              <Link className="o-grid__cell o-grid__cell--width-10@large o-grid__cell--width-15@medium o-grid__cell--width-25@small c-nav__item" to="/login">
                <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Войти
              </Link>
            }
            { 
              user &&
              <span className="o-grid__cell o-grid__cell--width-20@large o-grid__cell--width-25@medium o-grid__cell--width-35@small c-nav__item">
                <i className="fa fa-user"></i>&nbsp;&nbsp;{user.title}
              </span>
            }
            { 
              user &&      
              <Link
                className="o-grid__cell o-grid__cell--width-15@large o-grid__cell--width-20@medium o-grid__cell--width-25@small c-nav__item"
                onClick={(evt) => {
                  evt.preventDefault();
                  
                  logout();
                }}
              >
                <i className="fa fa-sign-out"></i>&nbsp;&nbsp;Выйти
              </Link>
            }
          </div>
        </nav>
        <SearchForm />
      </header>
    );
  }
}

export default Header;
