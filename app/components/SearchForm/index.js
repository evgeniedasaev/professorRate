import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="c-hero u-letter-box--large u-centered">
                <h1 className="c-heading c-heading--xlarge u-pillar-box--none u-letter-box--small">ОЦЕНИ ПРОФЕССОРА</h1>
                <div className="o-container o-container--small u-letter-box--medium">
                    <div className="o-grid">
                        <div className="o-grid__cell u-centered">                    
                            <form action="result.html">
                                <div className="c-input-group">
                                    <div className="o-field">
                                        <input className="c-field u-large" type="text" placeholder="Введите имя профессора" />
                                    </div>
                                    <button className="c-button c-button--brand">Найти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
