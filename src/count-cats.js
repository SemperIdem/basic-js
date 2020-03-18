module.exports = function countCats(matrix) {
  let count = 0;
  for (row of matrix) {
    for (element of row) {
      if (element == "^^") {
        count++
      }
    }
  }
  return count;
};
