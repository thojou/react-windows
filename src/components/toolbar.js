import React from 'react';
import PropTypes from 'prop-types';
import { WindowToolbar, WindowToolbarWrapper } from './styled';

const Toolbar = ({ toolbarWrapperComponent: WindowToolbarWrapper, toolbarComponent: WindowToolbar }) => (
  <WindowToolbarWrapper>
    <WindowToolbar id='window-toolbar' />
  </WindowToolbarWrapper>
);

Toolbar.propTypes = {
  toolbarWrapperComponent: PropTypes.elementType,
  toolbarComponent: PropTypes.elementType
};
Toolbar.defaultProps = {
  toolbarWrapperComponent: WindowToolbarWrapper,
  toolbarComponent: WindowToolbar
};

export default Toolbar;
