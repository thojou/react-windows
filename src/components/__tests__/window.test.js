import 'jest-styled-components';
import React from 'react';
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Window from "../window";

describe('WindowBody', () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    });

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<Window size={{
            width: 200,
            height: 100
        }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});