import React from 'react';
import { shallow } from 'enzyme';
import SimpleBox from './simplebox.jsx';
describe('SimpleBox', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SimpleBox debug />);

        expect(component).toMatchSnapshot();
    });
});