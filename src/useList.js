import { useState } from 'react';

import sticky from './art-pieces/sticky.png';
import bordeauxCover from './art-pieces/bordeaux-cover.png';
import cthemessCover from './art-pieces/cthemess-cover.png';
import balloonHeart from './art-pieces/heart.gif';
import ytVis from './art-pieces/ytvis-sc.png';
import lamb from './art-pieces/lamb.png';
import circus from './art-pieces/circus-liquor-memory.gif';
import basicShit from './art-pieces/basic-shit.png';
import window from './art-pieces/fair-ave-window.png';
import jed5664 from './art-pieces/jed5664.png';
import houseGif from './art-pieces/glass-house-nm.gif';

const useList = () => {
  const [pieces, setPieces] = useState([
    {
      title: 'sticky',
      src: sticky,
      id: 1,
      link: 'https://objkt.com/profile/tz1Vrv34Tw9YWdMhm5tS46h5398tZ9pVTMJq/created',
    },
    { title: 'bordeaux_cover', src: bordeauxCover, id: 2 },
    { title: 'cthemess_cover', src: cthemessCover, id: 3 },
    {
      title: 'balloon_heart',
      src: balloonHeart,
      id: 4,
      link: 'https://create.zora.co/collections/0x7aae83fd4891cb3aae0dcd86b72c0086a3d86e1d',
    },
    {
      title: 'yt_vis',
      src: ytVis,
      id: 5,
      link: 'https://youtu.be/wwoBMwk5wpU',
    },
    {
      title: 'lamb',
      src: lamb,
      id: 6,
      link: 'https://create.zora.co/collections/0xc7e406adabb1abda717f16314dc898c99f47e956',
    },
    {
      title: 'circus',
      src: circus,
      id: 7,
      link: 'https://create.zora.co/collections/0x8a0aa0cf6b2758c73d89ab6cb2b88ef9bb3328ad',
    },
    { title: 'basicShit', src: basicShit, id: 8 },
    {
      title: 'window',
      src: window,
      id: 9,
      link: 'https://create.zora.co/collections/0x5e9b528e4bf72be5856ae462b98319e8f08a675f',
    },
    {
      title: 'jed5664',
      src: jed5664,
      id: 10,
      link: 'https://create.zora.co/collections/0x3b0117794f7140cfce5b973cee4b58fe560e3f85',
    },
    { title: 'house_gif', src: houseGif, id: 11 },
  ]);

  return pieces;
};

export default useList;
