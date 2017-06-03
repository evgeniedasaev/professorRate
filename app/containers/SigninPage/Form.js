import React from 'react';
import { Link } from 'react-router';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
    state = {
        userType: 1,
        title: undefined,
        yearStart: undefined,
        yearFinish: undefined,
        about: undefined,
        password: undefined
    }

    onSelectChange = (name, evt) => {
        this.onChange(name, evt.target.value);
    }

    onInputChange = (evt) => {
        this.onChange(evt.target.name, evt.target.value);
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        this.props.onSubmit(this.state);
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <div className="c-card__body">
                <form action="#" onSubmit={this.onSubmit.bind(this)}>
                    <div className="o-form-element">
                        <div className="o-field u-letter-box--small">
                            <select name="userType" onChange={this.onSelectChange.bind(this, "userType")} className="c-field" required>
                                <option value="1">Преподаватель</option>
                                <option value="2">Студент</option>
                            </select>
                        </div>
                        <div className="o-field u-letter-box--small">
                            <input name="login" onChange={this.onInputChange.bind(this)} className="c-field" type="email" placeholder="Укажите email" required />
                        </div>
                        <div className="o-field u-letter-box--small">
                            <input name="title" onChange={this.onInputChange.bind(this)} className="c-field" type="text" placeholder="Укажите ФИО" required />
                        </div>
                        <div className="c-input-group u-letter-box--small">
                            <div className="o-field">
                                <input name="yearStart" onChange={this.onInputChange.bind(this)} className="c-field" type="text" placeholder="Год начала работы/обучения" />
                            </div>
                            <div className="o-field">
                                <input name="yearFinish" onChange={this.onInputChange.bind(this)} className="c-field" type="text" placeholder="Год конца работы/обучения" />
                            </div>
                        </div>
                        <div className="o-field u-letter-box--small">
                            <textarea name="about" onChange={this.onInputChange.bind(this)} className="c-field" rows="5" placeholder="Расскажите о вас"></textarea>
                        </div>
                        <div className="o-field u-letter-box--small">
                            <input name="password" onChange={this.onInputChange.bind(this)} className="c-field" type="password" placeholder="Придумайте пароль" required />
                        </div>
                    </div>
                    <div className="o-form-element">
                        <button className="c-button c-button--brand c-button--block" type="submit">Регистрация</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
