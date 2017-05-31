import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '../index';

describe('<SearchForm />', () => {
    it('should render a div', () => {
        const renderedComponent = shallow(
            <SearchForm />
        );
        expect(renderedComponent.find('div').length).toEqual(1);
    });
});
