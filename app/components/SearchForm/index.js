import React from 'react';
import { browserHistory } from 'react-router';

class SearchForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    state = {
        qtail: undefined
    }

    onChange = (evt) => {
        if (evt.target.value.length) {
            this.setState({ qtail: evt.target.value });
        } else {
            this.setState({ qtail: undefined });
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        if (typeof this.state.qtail !== undefined) {
            browserHistory.push('/search/' + this.state.qtail);
        }
    }

    render() {
        return (
            <div className="c-hero u-letter-box--large u-centered">
                <h1 className="c-heading c-heading--xlarge u-pillar-box--none u-letter-box--small">ОЦЕНИ ПРОФЕССОРА</h1>
                <div className="o-container o-container--small u-letter-box--medium">
                    <div className="o-grid">
                        <div className="o-grid__cell u-centered">                    
                            <form onSubmit={this.onSubmit}>
                                <div className="c-input-group">
                                    <div className="o-field">
                                        <input
                                            className="c-field u-large"
                                            type="text"
                                            placeholder="Введите имя профессора"
                                            onChange={this.onChange}
                                        />
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

export default SearchForm;
