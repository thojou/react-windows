import React from 'react';
import PropTypes from 'prop-types';
import { ifElse, propEq } from 'ramda';
import Minimized from './minimized';
import Movable from './movable';
import Maximized from './maximized';
import useWindowState from '../hooks/useWindowState';

const WindowContainer = ifElse(
  propEq('minimized', true),
  Minimized,
  ifElse(
    propEq('maximized', true),
    Maximized,
    Movable
  )
);

const Window = ({ focused, maximized, minimized, onMinimize, position: defaultPosition, size: defaultSize, onMaximize, onRestore, onClose, children, bounds }) => {

  const {
    position,
    size,
    isMaximized,
    isMinimized,
    maximize,
    minimize,
    restore,
    savePosition,
    saveSize
  } = useWindowState(minimized, maximized, onMinimize, onMaximize, onRestore, defaultPosition, defaultSize, bounds);

  return (
    <WindowContainer
      position={position}
      size={size}
      focused={focused}
      minimized={isMinimized}
      maximized={isMaximized}
      onMinimize={minimize}
      onMaximize={maximize}
      onClose={onClose}
      onRestore={restore}
      onDragStop={savePosition}
      onResizeStop={saveSize}
    >{children}
    </WindowContainer>
  );
};

Window.propTypes = {
  focused: PropTypes.bool,
  minimized: PropTypes.bool,
  maximized: PropTypes.bool,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
  onClose: PropTypes.func,
  bounds: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

Window.defaultProps = {
  focused: true,
  maximized: false,
  minimized: false,
  onMinimize: console.debug,
  onMaximize: console.debug,
  onRestore: console.debug,
  onClose: console.debug,
  bounds: 'body',
  position: {
    x: 0,
    y: 0
  }
};

export default Window;
