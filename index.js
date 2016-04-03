/* Takes a string and exclaims it.
 * @param {string} any old string
 * @returns {string} string with an exclamation point
 * @example
 * var exclaim = require('exclaim');
 * var exciting = exclaim('hi');
 * console.log(exciting); // hi!
 */
module.exports = function(string) {
  return string + '!';
};