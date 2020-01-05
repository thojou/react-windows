import React from 'react';
import renderer from "react-test-renderer";
import WindowLayout from "../layout";

describe('WindowLayout', () => {
    it('should render', () => {
        const tree = renderer.create(<WindowLayout />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});