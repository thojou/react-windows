import React from 'react';
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Movable from "../movable";

describe('Movable', () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    });

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<Movable />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});