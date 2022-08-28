// Exports multiple components for displaying pieces
// - Piece returns static pieces from a given list
// - FocusPiece returns static pieces from a given list (formatted
// for a focus component)
// - DragPiece returns draggable pieces from a list

import React from 'react';
import { useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import Parallax from 'react-rellax';
import useList from './useList';
import useFocus from './useFocus';

const Piece = (props) => {
  const pieces = props.pieces;

  return (
    <React.Fragment>
      {pieces.map((piece) => (
        <div className='piece-preview' id={piece.title} key={piece.id}>
          <img src={piece.src} alt={piece.title} />
        </div>
      ))}
    </React.Fragment>
  );
};

const FocusPiece = (obj) => {
  const piece = obj.piece;

  return (
    <React.Fragment>
      <div className='focus-preview' id={piece.title + '_focus'} key={piece.id}>
        <img src={piece.src} alt={piece.title} />
      </div>
    </React.Fragment>
  );
};

const DragPiece = (props) => {
  const pieces = props.pieces;

  const [boundingBox, setBoundingBox] = useState({});

  const handleStart = (e) => {
    setBoundingBox(e.target.getBoundingClientRect());
  };

  const handleStop = (e) => {
    const { top, left } = e.target.getBoundingClientRect();
    // compare the start position to the current one
    // if no change, assume this is a simple click
    if (top === boundingBox.top && left === boundingBox.left) {
      handleClick(e);
    }
  };

  const handleClick = (e) => {
    // setFocus(e.target.id);
    // makeElement(props.name[e.target.alt]);
    console.log(e.target.id);
  };

  // useFocus(e.target.id);

  return (
    <React.Fragment>
      {pieces.map((piece) => (
        <div className='piece-preview' id={piece.title} key={piece.id}>
          <Parallax speed={Math.random() * 4}>
            <Draggable onStart={handleStart} onStop={handleStop}>
              <img src={piece.src} alt={piece.title} id={piece.id} />
            </Draggable>
          </Parallax>
        </div>
      ))}
    </React.Fragment>
  );
};

export { Piece, DragPiece, FocusPiece };
