/*
  randomInteger(min: <number>, max: <number>)
  @Return <number>
*/
module.exports = function randomInteger(min, max) {
  if (typeof(min) !== 'number' || typeof(max) !== 'number') throw new Error('Arguments should be numbers')
  var rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}