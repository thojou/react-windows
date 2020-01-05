import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import WindowLayout from './layout';
import Portal from './portal';

const Movable = ({ position, size, minHeight, minWidth, target, onDragStop, onResizeStop, dragHandleClassName, ...props }) => {
  const defaults = useMemo(() => ({ ...position, ...size }), [position, size]);

  return (
    <Portal target={target}>
      <Rnd
        default={defaults}
        minHeight={minHeight}
        minWidth={minWidth}
        onDragStop={onDragStop}
        onResizeStop={onResizeStop}
        dragHandleClassName={dragHandleClassName}
      >
        <WindowLayout {...props} />
      </Rnd>
    </Portal>
  );
};

Movable.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  target: PropTypes.string,
  onDragStop: PropTypes.func,
  onResizeStop: PropTypes.func,
  dragHandleClassName: PropTypes.string,
  layoutComponent: PropTypes.elementType,
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

Movable.defaultProps = {
  dragHandleClassName: 'window-draggable',
  minHeight: 37,
  minWidth: 248,
  target: 'body'
};

export default Movable;
