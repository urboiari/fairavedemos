import { useState } from 'react';

import sticky from './art-pieces/sticky.png';
import bordeauxCover from './art-pieces/bordeaux-cover.png';
import cthemessCover from './art-pieces/cthemess-cover.png';
import balloonHeart from './art-pieces/heart.gif';
import ytVis from './art-pieces/ytvis-sc.png';
import lamb from './art-pieces/lamb.png';
import houseGif from './art-pieces/glass-house-nm.gif';

const useList = () => {
  const [pieces, setPieces] = useState([
    { title: 'sticky', src: sticky, id: 1 },
    { title: 'bordeaux_cover', src: bordeauxCover, id: 2 },
    { title: 'cthemess_cover', src: cthemessCover, id: 3 },
    { title: 'balloon_heart', src: balloonHeart, id: 4 },
    { title: 'yt_vis', src: ytVis, id: 5 },
    { title: 'lamb', src: lamb, id: 6 },
    { title: 'house_gif', src: houseGif, id: 7 },
  ]);

  return pieces;
};

export default useList;
