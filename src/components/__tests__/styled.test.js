import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  Area, Button,
  Grid,
  TitleArea,
  WindowBody,
  WindowFullscreen,
  WindowToolbar,
  WindowToolbarWrapper,
  WindowWrapper
} from '../styled';

describe('WindowWrapper', () => {
  it('should render', () => {
    const tree = renderer.create(<WindowWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render on focus', () => {
    const tree = renderer.create(<WindowWrapper focused={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('WindowBody', () => {
  it('should render', () => {
    const tree = renderer.create(<WindowBody />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('WindowFullscreen', () => {
  it('should render', () => {
    const tree = renderer.create(<WindowFullscreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('WindowToolbarWrapper', () => {
  it('should render', () => {
    const tree = renderer.create(<WindowToolbarWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('WindowToolbar', () => {
  it('should render', () => {
    const tree = renderer.create(<WindowToolbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Grid', () => {
  it('should render', () => {
    const tree = renderer.create(<Grid />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should minimize', () => {
    const tree = renderer.create(<Grid minimized={true} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border', 'none');
    expect(tree).toHaveStyleRule('max-width', '225px');
  });

  it('should accept areas', () => {
    const areas = "'brand header' 'sidebar body'";
    const tree = renderer.create(<Grid areas={areas} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('grid-template-areas', areas);
  });

  it('should accept rows', () => {
    const rows = '1fr auto';
    const tree = renderer.create(<Grid rows={rows} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('grid-template-rows', rows);
  });

  it('should accept columns', () => {
    const columns = '1fr auto';
    const tree = renderer.create(<Grid columns={columns} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('grid-template-columns', columns);
  });
});

describe('Area', () => {
  it('should render', () => {
    const tree = renderer.create(<Area />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should accept name', () => {
    const name = 'header';
    const tree = renderer.create(<Area name={name} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('grid-area', name);
  });
});

describe('TitleArea', () => {
  it('should render', () => {
    const tree = renderer.create(<TitleArea />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('should render', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
