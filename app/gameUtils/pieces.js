import { includes } from 'lodash/collection';

const pieces = {
  1: {
    name: 'pawn',
    imgPath: 'pawn',
  },
  2: {
    name: 'knight',
    imgPath: 'pawn',
  },
  3: {
    name: 'bishop',
    imgPath: 'pawn',
  },
  4: {
    name: 'rook',
    imgPath: 'pawn',
  },
  5: {
    name: 'queen',
    imgPath: 'pawn',
  },
  6: {
    name: 'king',
    imgPath: 'pawn',
  },
};

const getPieceInfoById = (id) => {
  let prefix = Object.hasOwnProperty.call(pieces, id) ? 'white_' : null;
  prefix = Object.hasOwnProperty.call(pieces, Math.abs(id)) ? 'black_' : prefix;
  if (!prefix) throw new Error('Invalid piece id');

  return {
    name: prefix + pieces[id].name,
    imgPath: prefix + pieces[id].imgPath,
  };
};

const isPiece = (id) => (
  includes([1, 2, 3, 4, 5, 6], Math.abs(id))
);

export {
  isPiece,
  getPieceInfoById,
};

export default getPieceInfoById;
