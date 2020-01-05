import React from 'react';
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Portal from "../portal";

describe('Portal', () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    });

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<Portal><div /></Portal>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});