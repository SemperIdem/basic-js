module.exports = function transform(arr) {
    console.log("GAVNO");
    if (!(arr instanceof Array)) { throw Error; }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'string') {
            switch(arr[i]) {
                case '--discard-next':
                    ++i;
                    break;
                case '--discard-prev':
                    result.pop();
                    break;
                case '--double-next':
                    if (i  < arr.length - 1) {
                        result.push(arr[i + 1]);
                    }
                    break;
                case '--double-prev':
                  if (i > 0) {
                        result.push(arr[i - 1]);
                  }
                 break;
                default:
                    result.push(arr[i]);
                    break;
            }
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
  };
