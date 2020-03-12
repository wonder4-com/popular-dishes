import React from 'react';
import { shallow } from 'enzyme';
import SimpleBox from './simplebox.jsx';
describe('Components should render correctly', () => {
    it('SimpleBox should render correctly in "debug" mode', () => {
        const component = shallow(<SimpleBox debug />);

        expect(component).toMatchSnapshot();
    });
});