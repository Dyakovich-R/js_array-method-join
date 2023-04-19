'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separator === undefined ? ','
          : separator === null ? 'null'
            : typeof separator === 'number' && isNaN(separator) ? ','
              : separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
