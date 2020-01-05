import React from 'react';
import PropTypes from 'prop-types';
import WindowLayout from './layout';
import Portal from './portal';

const Minimized = ({ target, layoutComponent: WindowLayout, ...props }) => {
  return (
    <Portal target='#window-toolbar'>
      <WindowLayout {...props} />
    </Portal>
  );
};

Minimized.propTypes = {
  target: PropTypes.string,
  layoutComponent: PropTypes.elementType
};

Minimized.defaultProps = {
  layoutComponent: WindowLayout
};

export default Minimized;
