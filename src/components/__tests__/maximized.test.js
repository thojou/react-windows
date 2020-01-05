import React from 'react';
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Maximized from "../maximized";

describe('Maximized', () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    });

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<Maximized />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});