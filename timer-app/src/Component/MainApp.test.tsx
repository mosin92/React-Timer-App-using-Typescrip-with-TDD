import React from 'react';
import { shallow } from 'enzyme';
import { MainApp } from './MainApp'
describe(' Mainapp testing', () => {
    
    test("should have section element", () => {
        const wrapper=shallow(<MainApp/>)
        expect(wrapper.find('section').length).toEqual(1);
    });
    test("should have p element", () => {
        const wrapper=shallow(<MainApp/>)
        expect(wrapper.find('p').length).toEqual(3);
    });
    test("should have span element", () => {
        const wrapper=shallow(<MainApp/>)
        expect(wrapper.find('span').length).toEqual(2);
    });
    test("should have element class equal to time-container", () => {
        const wrapper=shallow(<MainApp/>)
        expect(wrapper.find(".timer-container").length).toEqual(1);
    });
    test("should have p element class equal to time-container", () => {
        const wrapper=shallow(<MainApp/>)
        expect(wrapper.find("p").length).toHaveClass("timer-text");
    });
});