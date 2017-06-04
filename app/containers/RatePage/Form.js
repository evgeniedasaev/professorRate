import React from 'react';
import { Link } from 'react-router';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
    state = {
        rate: undefined,
        comment: undefined,
        authorName: undefined,
    }

    componentDidMount() {
        this.setState({
            authorName: this.props.author.title,
        });
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

        const { author, user } = this.props;

        this.setState({
            authorName: author.title,
        });

        this.props.onSubmit(this.state, author, user);
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <div className="c-card__body">
                <form action="#" onSubmit={this.onSubmit.bind(this)}>                     
                    <div className="o-form-element">
                        <div className="o-field u-letter-box--small">
                            <select name="rate" onChange={this.onSelectChange.bind(this, "rate")} className="c-field">
                                <option value="0">Поставьте оценку</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="o-field u-letter-box--small">
                            <textarea name="comment" onChange={this.onInputChange.bind(this)} className="c-field" placeholder="Оставить отзыв" rows="10" required></textarea>
                        </div>
                    </div>
                    <div className="o-form-element">
                        <button className="c-button c-button--brand c-button--block" type="submit">Отправить отзыв</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
