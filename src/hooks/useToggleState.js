import { useState, useCallback } from 'react';

/**
 * Hook to create a toggle state.
 *
 * @param {boolean} defaultState The default state for this hook.
 * @param {function} onToggle The function to execute on state toggle
 * @returns {[boolean, Function]} Returns the current state and the toggle function.
 */
const useToggleState = (defaultState, onToggle) => {
  const [currentState, setCurrentState] = useState(defaultState);

  const toggle = useCallback(() => {
    setCurrentState(!currentState);
    onToggle(!currentState);
  }, [currentState]);

  return [currentState, toggle];
};

export default useToggleState;
