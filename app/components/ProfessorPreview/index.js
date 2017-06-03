import React from 'react';
import {Link} from 'react-router';

const previewImg = require.context('!file-loader?name=[name].[ext]!../../../assets/user', true);

function ProfessorPreview(props) {
    const { item, showTitle, showRate, showShow } = props;

    return (
        <section className="u-letter-box--large">       
            <div className="o-grid o-grid--xsmall-full o-grid--small-full o-grid--medium-full">          
                {
                    typeof item.photo !== 'indefined' &&
                    <div className="o-grid__cell o-grid__cell--width-40 u-centered">
                        <img className="o-image" src={'/' + item.photo} alt={item.title} />
                    </div>
                }
                <div className="o-grid__cell o-grid__cell--width-60">
                    {
                        showTitle &&
                        <h3 className="c-heading c-heading--medium">
                            {item.title}
                        </h3>
                    }
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
                    <div className="u-letter-box--medium c-input-group">
                        {
                            showRate &&
                            <a className="c-button c-button--success u-large" href="#">Оценить</a>
                        }
                        {
                            showShow &&
                            <Link className="c-button c-button--info u-large" to={'/professor/' + item.id}>
                                Посмотреть отзывы
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

ProfessorPreview.propTypes = {
    item: React.PropTypes.any,
};

ProfessorPreview.defaultProps = {
    showTitle: true,
    showRate: false,
    showShow: true
};

export default ProfessorPreview;
