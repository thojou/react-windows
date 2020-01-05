import 'jest-styled-components';
import React from 'react';
import renderer from "react-test-renderer";
import Buttons from "../buttons";

describe('Buttons', () => {
    it('should render', () => {
        const tree = renderer.create(<Buttons />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without minimize', () => {
        const tree = renderer.create(<Buttons minimize={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without maximize', () => {
        const tree = renderer.create(<Buttons maximize={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without restore', () => {
        const tree = renderer.create(<Buttons restore={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without close', () => {
        const tree = renderer.create(<Buttons close={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render empty', () => {
        const tree = renderer.create(<Buttons minimize={false} maximize={false} restore={false} close={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});