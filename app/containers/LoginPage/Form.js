import React from 'react';
import { Link } from 'react-router';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
    state = {
        login: undefined,
        password: undefined,
    }

    onInputChange = (evt) => {
        this.onChange(evt.target.name, evt.target.value);
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        this.props.onSubmit(this.state.login, this.state.password);
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <div className="c-card__body">
                <form action="#" onSubmit={this.onSubmit.bind(this)}>
                    <div className="o-form-element">
                        <div className="o-field u-letter-box--small">
                            <input name="login" onChange={this.onInputChange.bind(this)} className="c-field" type="email" placeholder="Укажите email" required />
                        </div>
                        <div className="o-field u-letter-box--small">
                            <input name="password" onChange={this.onInputChange.bind(this)} className="c-field" type="password" placeholder="Придумайте пароль" required />
                        </div>
                    </div>
                    <div className="o-form-element">
                        <button className="c-button c-button--brand c-button--block" type="submit">Вход</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
