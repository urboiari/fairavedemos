import { useState } from 'react';
import useList from './useList';

const useFocus = (pieceID) => {
  const pieces = useList();
  const [focus, setFocus] = useState(null);
  setFocus(useList[pieceID]);

  return focus;
};

export default useFocus;
