import React from 'react';
import PropTypes from 'prop-types';
import Portal from './portal';
import { WindowFullscreen } from './styled';
import WindowLayout from './layout';

const Maximized = ({ target, fullscreenComponent: WindowFullscreen, layoutComponent: WindowLayout, ...props }) => {
  return (
    <Portal target='body'>
      <WindowFullscreen>
        <WindowLayout {...props} />
      </WindowFullscreen>
    </Portal>
  );
};

Maximized.propTypes = {
  target: PropTypes.string,
  fullscreenComponent: PropTypes.elementType,
  layoutComponent: PropTypes.elementType
};

Maximized.defaultProps = {
  target: 'body',
  fullscreenComponent: WindowFullscreen,
  layoutComponent: WindowLayout
};
export default Maximized;
