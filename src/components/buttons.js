import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose, FaWindowMaximize, FaWindowMinimize, FaWindowRestore } from 'react-icons/fa';
import { Button } from './styled';

const Buttons = ({ minimize, maximize, restore, close, onMinimize, onMaximize, onRestore, onClose, buttonComponent: Button }) => (
  <div>
    {minimize && <Button aria-label="minimize" type='button' onClick={onMinimize}><FaWindowMinimize /></Button>}
    {maximize && <Button aria-label="maximize" type='button' onClick={onMaximize}><FaWindowMaximize /></Button>}
    {restore && <Button aria-label="restore" type='button' onClick={onRestore}><FaWindowRestore /></Button>}
    {close && <Button aria-label="close" type='button' onClick={onClose}><FaWindowClose /></Button>}
  </div>
);

Buttons.propTypes = {
  minimize: PropTypes.bool,
  maximize: PropTypes.bool,
  restore: PropTypes.bool,
  close: PropTypes.bool,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
  onClose: PropTypes.func,
  buttonComponent: PropTypes.elementType
};

Buttons.defaultProps = {
  minimize: true,
  maximize: true,
  restore: true,
  close: true,
  onMinimize: console.debug,
  onMaximize: console.debug,
  onRestore: console.debug,
  onClose: console.debug,
  buttonComponent: Button
};

export default Buttons;
