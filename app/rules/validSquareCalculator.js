import { includes } from 'lodash/collection';
import { range } from 'lodash/util';

const notValidSquares = [
  ...range(0, 20),
  ...range(20, 91, 10),
  ...range(29, 100, 10),
  ...range(100, 120),
];

export default function isValidSquare(id) {
  return !includes(notValidSquares, id);
}
