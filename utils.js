//add get week function to date object
Date.prototype.getWeekNumber = function () {
  var d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

//Random number generated deterministic by hour of day
export const seededRandom = () => {
  if (process.env.NODE_ENV === "development") {
    return Math.random();
  }
  //get character code of the current hour to seed the random generator
  // build a number from that string "seed"
  const randomSeed = () => {
    const d = new Date();
    const seed =
      String.fromCharCode(d.getYear()) +
      String.fromCharCode(d.getMonth()) +
      String.fromCharCode(d.getWeek()) +
      String.fromCharCode(d.getDay()) +
      String.fromCharCode(d.getHours());
    for (var i = 0, h = 1779033703 ^ seed.length; i < seed.length; i++)
      (h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)),
        (h = (h << 13) | (h >>> 19));
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
  var a, b, c, d;
  a = b = c = d = randomSeed();
  var t = (a + b) | 0;
  a = b ^ (b >>> 9);
  b = (c + (c << 3)) | 0;
  c = (c << 21) | (c >>> 11);
  d = (d + 1) | 0;
  t = (t + d) | 0;
  c = (c + t) | 0;
  return (t >>> 0) / 4294967296;
};

export const nthTargetDayOfMonth = (year, month, targetDay, N) => {
  const lastDayOfMonth = {
    1: 31,
    2: (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 31,
    12: 31
  };
  const firstOfMonth = new Date(year, month - 1, 1);
  const firstDayOfMonth = firstOfMonth.getDay();
  const firstTargetDayOfMonth =
    firstDayOfMonth === targetDay
      ? 1
      : firstDayOfMonth < targetDay
      ? targetDay - firstDayOfMonth
      : 7 - firstDayOfMonth + targetDay;
  let NthTargetDayOfMonth = firstTargetDayOfMonth + 7 * (N - 1);
  return NthTargetDayOfMonth < lastDayOfMonth[month]
    ? NthTargetDayOfMonth
    : null;
};

//take a list of objects and merge matching keys values into single arrays of values
export const collapseList = list => {
  let res = [];
  let seenItems = [];
  list.forEach(object => {
    //get all the elements who's key matches
    if (!seenItems.includes(object)) {
      const key = Object.keys(object)[0];
      const items = list.filter(element => Object.keys(element)[0] === key);
      //mark all items in filter as seen
      seenItems = seenItems.concat(items);
      //concat all items with the same key into a single emoji option
      const collapsedArray = [].concat(...items.map(val => val[key]));
      res = res.concat({ [key]: collapsedArray });
    }
  });
  return res;
};

export const getRandomDateInNextYear = () => {
  return new Date(+new Date() - Math.floor(Math.random() * 1000000000000));
};
