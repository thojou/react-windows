import { useRef, useState, useCallback, useEffect } from 'react';
import useToggleState from './useToggleState';

const useWindowState = (minimized, maximized, onMinimize, onMaximize, onRestore, defaultPosition, defaultSize, bounds) => {
  const containerRef = useRef(document.querySelector(bounds));
  const containerSize = containerRef.current.getBoundingClientRect();
  const [position, setPosition] = useState({
    x: (containerSize.width - defaultSize.width) / 2,
    y: (containerSize.height - defaultSize.height) / 2
  });
  const [size, setSize] = useState(defaultSize);
  const [isMinimized, minimize] = useToggleState(minimized, onMinimize);
  const [isMaximized, maximize] = useToggleState(maximized, onMaximize);
  const savePosition = useCallback((_, { x, y }) => { setPosition({ x, y }); }, []);
  const saveSize = useCallback((e, direction, ref) => { setSize({ width: ref.offsetWidth, height: ref.offsetHeight }); }, []);

  const restore = useCallback(() => {
    if (isMinimized) {
      minimize();
    } else if (isMaximized) {
      maximize();
    }
    onRestore();
  }, [isMinimized, isMaximized]);

  useEffect(() => {
    setPosition({
      x: containerSize.width - defaultSize.width / 2,
      y: containerSize.height - defaultSize.height / 2
    });
  }, []);

  return {
    position,
    size,
    isMaximized,
    isMinimized,
    maximize,
    minimize,
    restore,
    savePosition,
    saveSize
  };
};

export default useWindowState;
