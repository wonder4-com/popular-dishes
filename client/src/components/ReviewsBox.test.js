import React from 'react';
import { shallow } from 'enzyme';
import ReviewsBox from './ReviewsBox.jsx';
import Review from './Review.jsx';
describe('ReviewsBox Unit Tests', () => {


    var sampleData = [
        {
            user: 'Bob',
            text: 'I love corn cheese'
        },
        {
            user: 'Bob',
            text: 'I love corn cheese'
        },
        {
            user: 'Bob',
            text: 'I love corn cheese'
        }
    ];
    describe('ReviewBox should render correctly', () => {
        test('ReviewsBox should render correctly in "debug" mode', () => {

            const component = shallow(<ReviewsBox Reviews={sampleData} />);

            expect(component).toMatchSnapshot();
        });

        test('ReviewsBox should have three children', () => {

            const component = shallow(<ReviewsBox Reviews={sampleData} />);

            expect(component.find(Review)).toHaveLength(3);
        });
    })

    describe('ReviewsBox Unit Interaction Test', () => {
        test('this should fail', () => {
            expect(5).toHaveLength(2);
        });



    });

    describe('ReviewsBox Unit Interaction Test', () => {
        describe('onChangeHandler', () => {
            test('it should invoke the correct method when a change event is emitted', () => {
                const mockChangeHandler = jest.fn();
                const wrapper = shallow(<ReviewsBox Reviews={sampleData} />);
                console.log(wrapper[0])
                wrapper.instance().onChangeHandler = mockChangeHandler;
                wrapper.instance().forceUpdate();
                wrapper.find('button').simulate('click');
                expect(mockChangeHandler).toHaveBeenCalled();
            });
            test('it should correctly update the state when a change event is emitted', () => {
                const wrapper = shallow(<ReviewsBox Reviews={sampleData} />);
                wrapper.find('input').simulate('change', mockEventGenerator('a'));
                expect(wrapper.instance().state.todo).toBe('e');
            });
        });
        describe('onSubmitHandler', () => {
            test('it should invoke the correct method when a submit event is emitted', () => {
                const mockSubmitHandler = jest.fn();
                const wrapper = shallow(<ReviewsBox Reviews={sampleData} />);
                wrapper.instance().onSubmitHandler = mockSubmitHandler;
                wrapper.instance().forceUpdate();
                wrapper.find('form').simulate('click');
                expect(mockSubmitHandler).toHaveBeenCalled();
            })
        });
    });

});

