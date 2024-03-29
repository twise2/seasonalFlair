import {
  lastTargetDayOfMonth,
  nthTargetDayOfMonth,
  collapseList,
} from "./utils.js"; //reliance on date prototype update

//Astrological signs
const aries = [{ "U+2648": [] }];
const taurus = [{ "U+2649": [] }];
const gemini = [{ "U+264A": [] }];
const cancer = [{ "U+264B": [] }];
const leo = [{ "U+264C": [] }];
const virgo = [{ "U+264D": [] }];
const libra = [{ "U+264E": [] }];
const scorpius = [{ "U+264F": [] }];
const sagittarius = [{ "U+2650": [] }];
const capricorn = [{ "U+2651": [] }];
const aquarius = [{ "U+2652": [] }];
const pisces = [{ "U+2653": [] }];

const winter = [
  //snowflake
  { "U+2744": ["O", "o", "a"] },
  //evergreen tree
  { "U+1F332": ["A"] },
  // snowman
  { "U+2603": ["B", "b"] },
];

const serviceWorkers = [
  //construction worker
  { "U+1F477": ["O", "o"] },
  //police officer
  { "U+1F46E": ["O", "o"] },
  //firefighter
  { "U+1F468, U+200D, U+1F692": [] },
];

const importantDocuments = [
  //memo
  { "U+1F4DD": [] },
  //scroll
  { "U+1F4DC": [] },
];

const valentines = [
  //heart with riboon
  { "U+1F49D": ["O", "U"] },
  //heart with arrow
  { "U+1F498": ["O", "U"] },
  //love letter
  { "U+1F48C	": ["O", "U"] },
];

const mothers = [
  { "U+2640": [] }, //female sign
  //TODO test this
  { "U+1F469, U+200D, U+1F466": [] }, //family man and boy
  { "U+1F469, U+200D, U+1F467": [] }, //family man and girl
];
const fathers = [
  { "U+2642": [] }, //male sign
  //TODO test this
  { "U+1F468, U+200D, U+1F466": [] }, //family man and boy
  { "U+1F468, U+200D, U+1F467": [] }, //family man and girl
];
const beerHolidays = [
  //beer mug
  { "U+1F37A": [] },
  //beer mugs
  { "U+1F37B": [] },
];
const fall = [
  //fallen leaf
  { "U+1F342": [] },
];

const sportingEvent = [
  //stadium
  { "U+1F3DF": [] },
];

const leapYear = [
  //fast forward button
  { "U+23E9": [] },
];

const newYears = [
  //party popper
  { "U+1F389": [] },
];

const canadaDay = [
  //maple leaf
  { "U+1F341": [] },
];

const americanHolidays = [
  //Statue of Liberty
  { "U+1F5FD": [] },
  //Eagle
  { "U+1F985	": [] },
  ...importantDocuments,
];

const civilRights = [
  //raised fist
  { "U+270A": [] },
];

const spring = [
  //seedling
  { "U+1F331": ["t", "T", "I", "i", "l", "L", "Y"] },
];

const thanksgiving = [
  //turkey
  { "U+1F983": ["a"] },
];

const pride = [
  //rainbow
  { "U+1F308": ["r"] },
];

const summer = [
  //palm tree
  { "U+1F334": ["t", "T", "I", "i", "l", "L", "Y"] },
  //Sun
  { "U+2600": ["O", "o", "a"] },
];

const saintPatricksDay = [
  //shamrock
  { "U+2618": [] },
  //four leaf clover
  { "U+1F340": [] },
];

const graduation = [
  //graduation cap
  { "U+1F393": [] },
];

const winterHolidays = [
  //christmas tree
  { "U+1F384": ["A"] },
];

//TODO think about how to choose between letters
const haloween = [
  { "U+1F578": ["O", "o", "a"] }, //spider webs
  { "U+1F315": ["O", "o", "a"] }, //full moon
  { "U+1F383": ["O", "o", "a"] }, //jack-o-lantern
];

const getEmojiisByMonth = {
  //winter months
  1: [...winter],
  2: [...winter, ...civilRights],
  3: [...spring],
  4: [...spring],
  5: [...spring],
  6: [...summer, ...pride],
  7: [...summer],
  8: [...summer],
  9: [...fall],
  10: [...haloween, ...fall],
  11: [...fall],
  12: [...winter],
};

const getEmojiisByDay = (year, month, day) => {
  const emojiisByDay = {
    1: {
      1: [...newYears], //new years
      20: [], //	Aquarius
      [nthTargetDayOfMonth(year, 1, 1, 3)]: [...civilRights], //MLK day
    },
    2: {
      14: [...valentines],
      19: [], //Pisces
      29: [...leapYear], //leap year
    },
    3: {
      17: [...saintPatricksDay], //saint patricks day
      20: [...aries, ...spring], //spring equinox, Aries
    },
    4: {
      19: [...taurus], //taurus
    },
    5: {
      1: [...importantDocuments],
      [nthTargetDayOfMonth(year, 5, 0, 2)]: [...mothers], //mothers day
      20: [...gemini], //gemini
      [lastTargetDayOfMonth(year, 5, 1)]: [...americanHolidays], //memorial day
    },
    6: {
      20: [...summer, ...cancer], //summer solstice, Cancer
      [nthTargetDayOfMonth(year, 6, 0, 3)]: [...fathers], //fathers day
    },
    7: {
      4: [...americanHolidays], //american independence day
      22: [...leo], //Leo
    },
    8: {
      22: [...virgo], //virgo
    },
    9: {
      [nthTargetDayOfMonth(year, 9, 0, 1)]: [...serviceWorkers], //labor day
      17: [...americanHolidays, ...serviceWorkers],
      22: [...fall, ...libra], //autumn equinox, Libra
    },
    10: {
      [nthTargetDayOfMonth(year, 10, 0, 1)]: [...beerHolidays], //octoberfest
      22: [...scorpius], //Scorpio
    },
    11: {
      21: [...sagittarius], //sagittarius
      [nthTargetDayOfMonth(year, 11, 4, 4)]: [...thanksgiving], //thanksgiving
    },
    12: {
      21: [...winter, ...capricorn], //winter solstice, Capricorn
      31: [...newYears], //new years
    },
  };
  return emojiisByDay[month][day] || [];
};

export const getEmojiReplacementList = date => {
  //returns a map of letters to emojis
  let emojiList = [];
  const week = date.getWeekNumber();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  emojiList = emojiList.concat(getEmojiisByMonth[month]);
  emojiList = emojiList.concat(getEmojiisByDay(year, month, day));
  //thanksgiving can move

  const cl = collapseList(emojiList.filter(item => !!item));
  return cl;
};
