const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let n = 0; n < matrix[i].length; n++) {
            if (matrix[i][n] === '^^'){
              cats++;
            }
        }

    } return cats;
};
