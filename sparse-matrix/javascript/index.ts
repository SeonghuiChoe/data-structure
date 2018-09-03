import matrixTerm from './matrix-term';
const originArray = [
    [0, 0, 15],
    [0, 3, 22],
    [0, 5, -15],
    [1, 1, 11],
    [1, 2, 3],
    [2, 3, -6],
    [4, 0, 91],
    [5, 2, 28]
];
const terms = originArray.map((v) => new matrixTerm(v[0], v[1], v[2]));
console.log(terms);
