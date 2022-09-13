import React from 'react';

const BandcampWidget = () => {
  const bcStyle = {
    border: 0,
    width: '100%',
    height: '120px',
  };
  return (
    <iframe
      className='bc-preview'
      style={bcStyle}
      src='https://bandcamp.com/EmbeddedPlayer/album=174729273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/'
      seamless
    >
      <a href='https://aririveraa.bandcamp.com/album/5664-fair-ave'>
        5664 Fair Ave by Ari Rivera
      </a>
    </iframe>
  );
};

export default BandcampWidget;
