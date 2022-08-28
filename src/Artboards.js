// Build Artboards - Draggable artboards and static ones
import { useState, useEffect } from 'react';
import { Piece, DragPiece } from './Piece';
import { Focus } from './Focus';
import useList from './useList';

//AB1 is made up of draggable artboards (main board that floats over text)
const AB1 = () => {
  const pieces = useList().slice(0, 5);

  return (
    <div className='AB' id='AB1'>
      <DragPiece pieces={pieces} />
    </div>
  );
};

// AB3 is made up of static components (flagship piece)
const AB3 = () => {
  const pieces = useList().slice(6);

  return (
    <div className='AB' id='AB3'>
      <Piece pieces={pieces} />
    </div>
  );
};

// Placeholder artboard to hold a focus page
const ABX = () => {
  return <Focus></Focus>;
};

export default AB3;

export { AB1, AB3, ABX };
