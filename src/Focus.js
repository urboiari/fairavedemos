// Component that takes piece ID and makes a Focus page to
// buy the piece

// Need to implement pulling data from web3 platform servers using
// API?
import React, { useState } from 'react';
import { Piece, DragPiece, FocusPiece } from './Piece';
import Paragraph from './Paragraph';
import sticky from './art-pieces/sticky.png';
import Buy from './Buy';

const Focus = ({ obj }) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta velit, eget pellentesque ante. Nullam congue sagittis sodales. Maecenas pretium velit lectus. Quisque tristique sapien at est bibendum sagittis. Nulla facilisi. Etiam quis nunc tempor, feugiat erat eget, ullamcorper purus. Phasellus massa velit, sodales id dolor a, tincidunt gravida nisl.';

  return (
    <div className='focus-wrapper'>
      <div className='fwbg'></div>
      <div className='focus-content'>
        <FocusPiece piece={obj}></FocusPiece>
        <Paragraph text={text}></Paragraph>
        <Buy num={0.1}></Buy>
      </div>
    </div>
  );
};

export { Focus };
