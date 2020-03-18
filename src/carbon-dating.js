const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sActivity = parseFloat(sampleActivity);
  if (isNaN(sActivity) || sActivity > MODERN_ACTIVITY || sActivity <= 0) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let result =  Math.log((MODERN_ACTIVITY / sActivity)) / k;
  return Math.ceil(result);
};
