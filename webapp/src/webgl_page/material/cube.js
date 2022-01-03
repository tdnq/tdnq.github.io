//    v7----- v6
//   /|      /|
//  v3------v2|
//  | |     | |
//  | |v4---|-|v5
//  |/      |/
//  v0------v1

const sideLength = 1.0;
const cube = {
  vertex: [
    -sideLength, -sideLength, sideLength,
    sideLength, -sideLength, sideLength,
    sideLength, sideLength, sideLength,
    -sideLength, sideLength, sideLength,
    -sideLength, -sideLength, -sideLength,
    sideLength, -sideLength, -sideLength,
    sideLength, sideLength, -sideLength,
    -sideLength, sideLength, -sideLength,

  ],
  indices: [
    0, 3, 2, 0, 1, 2,
    1, 2, 5, 2, 5, 6,
    2, 3, 6, 3, 6, 7,
    0, 3, 4, 3, 4, 7,
    0, 1, 4, 1, 4, 5,
    4, 5, 6, 4, 6, 7,
  ],
  unit: 3,
};

export default cube;
