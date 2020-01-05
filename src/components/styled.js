import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const WindowWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  box-shadow: 0 3px 6px ${({ focused }) => focused ? '#A7893D' : '#E8E8E8'};
`;

const WindowBody = styled.div`
  display: block;
  height: 100%;
`;

const WindowFullscreen = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const WindowToolbarWrapper = styled.div`
  width: calc(100% - 260px);
  background-color: red;
  position: absolute;
  left: 260px;
  bottom: 0;
`;

const WindowToolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

const Grid = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: grid;
    color: #666666;
    font: normal bold 16px/21px "Segoe UI";
    background-color: #ffffff;
    border: 1px solid #E8E8E8;
    max-width: ${({ minimized }) => minimized ? '225px' : undefined};
    ${({ minimized, maximized }) => minimized || maximized ? 'box-shadow: none; border: none;' : ''};
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    grid-template-areas: ${({ areas }) => areas};
`;

const Area = styled.div`
    height: 100%;
    grid-area: ${({ name }) => name};
    box-sizing: border-box;
    > * {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;

const TitleArea = styled(Area)`
  padding: 0.5rem 0.938rem;
  background-color: #E8E8E8;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #666666;
  cursor: pointer;
  
  &:hover {
    color: #A7893D;
  }
  
  &:last-child {
    padding-right: 0;
  }
`;

// PropTypes
WindowWrapper.propTypes = {
  focused: PropTypes.bool
};

Grid.propTypes = {
  minimized: PropTypes.bool,
  maximized: PropTypes.bool,
  columns: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.string
};

Area.propTypes = {
  name: PropTypes.string
};
TitleArea.propTypes = Area.propTypes;

// Default Props
WindowWrapper.defaultPropts = {
  focused: false
};

Grid.defaultProps = {
  areas: 'default',
  rows: '1fr',
  columns: '1fr'
};

Area.defaultProps = {
  name: 'default'
};
TitleArea.defaultProps = Area.defaultProps;

export {
  WindowWrapper,
  WindowBody,
  WindowFullscreen,
  WindowToolbarWrapper,
  WindowToolbar,
  Button,
  Grid,
  Area,
  TitleArea
};
