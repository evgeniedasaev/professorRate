import React from 'react';
import {Link} from 'react-router';

function ProfessorPreview(props) {
    const {item} = props;

    return (
        <section className="u-letter-box--large">       
            <div className="o-grid o-grid--xsmall-full o-grid--small-full o-grid--medium-full">          
                {
                    typeof item.photo !== 'indefined' &&
                    <div className="o-grid__cell o-grid__cell--width-40 u-centered">
                        <img className="o-image" src={item.photo} />
                    </div>
                }
                <div className="o-grid__cell o-grid__cell--width-60">
                    <h3 className="c-heading c-heading--medium">
                        <Link to={'/professor/' + item.id}>
                            {item.title}
                        </Link>
                    </h3>
                    <span className="c-badge c-badge--warning">Оценка: {item.rate}</span>
                    <p className="c-paragraph">{item.about}</p>
                    {
                        item.courses.length && 
                        <span className="c-text--loud">Курсы</span>
                    }
                    {
                        item.courses.length &&
                        <ul className="c-list">
                            {
                                item.courses.map((course, i) => {
                                    return (
                                        <li key={i} className="c-list__item">{course.title}</li>
                                    );
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
        </section>
    );
}

ProfessorPreview.propTypes = {
    item: React.PropTypes.any,
};

export default ProfessorPreview;
