import React from 'react';

function Errors(props) {
    let { errors } = props;

    if (!errors) {
        errors = [];
    }

    if (!Array.isArray(errors)) {
        errors = [errors];
    }


    if (!errors.length) {
        return null;
    }

    return (
        <div className="u-letter-box--small">
            {errors.map((error, index) => (
                <div key={index} className="c-alert c-alert--error">{error}</div>
            ))}
        </div>
    );
}

Errors.propTypes = {
    errors: React.PropTypes.any,
};

export default Errors;
