export class SparseMatrix = {
    constructor(rows, cols, terms) {
        this.rows = rows;
        this.cols = cols;
        this.terms = terms;
        this.smArray = [];
    }
    
    insertTerm = function (term) {
        this.smArray.push(term);
    }
    
    smArrayLength() {
        return this.smArray.length;
    }
    
    transpose() {
        return;
    }
    
    add(matrix) {
        return;
    }
    
    multiply(matrix) {
        return;
    }
};
