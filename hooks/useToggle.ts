import { useCallback, useState } from 'react';

export type FocusToggle = () => void;

const useToggle = (initial = false): [boolean, FocusToggle] => {
  const [state, setState] = useState<boolean>(initial);

  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
};

export default useToggle;
