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
    const seed = String.fromCharCode(d.getHours());
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

export const isThanksgivingWeek = today => {
  const year = today.getYear();
  const lastOfNov = new Date(year, 10, 30).getDay();
  const turkyDay = (lastOfNov >= 4 ? 34 : 27) - lastOfNov;
  const thanksgivingWeek = new Date(year, 10, turkyDay);
  return thanksgivingWeek.getWeekNumber() === today.getWeekNumber();
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
  return new Date(+new Date() - Math.floor(Math.random() * 100000000000));
};
