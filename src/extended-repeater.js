module.exports = function repeater(str, options) {
    if (options.addition === null || (options.addition && typeof options.addition != 'string')) {
        options.addition = String(options.addition);
    }


    if (!options.separator) {
        options.separator = '+';
      }
    if (options.addition && !options.additionSeparator)
      {
        options.additionSeparator = '|'
      }
    let additions = Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
    let strings = Array(options.repeatTimes).fill(str + additions).join(options.separator);
    return strings;
};
  