import {
  isThanksgivingWeek,
  collapseList,
  getRandomDateInNextYear
} from "./utils.js"; //reliance on date prototype update

const winter = [
  //snowflake
  { "U+2744": ["O", "o", "a"] },
  //evergreen tree
  { "U+1F332": ["A"] },
  // snowman
  { "U+2603": ["B", "b"] }
];

const fall = [
  //fallen leaf
  { "U+1F342": [] }
];

const sportingEvent = [
  //stadium
  { "U+1F3DF": [] }
];

const newYears = [
  //party popper
  { "U+1F389": [] }
];

const canadaDay = [
  //maple leaf
  { "U+1F341": [] }
];

const americanHolidays = [
  //Statue of Liberty
  { "U+1F5FD": [] }
];
const spring = [
  //seedling
  { "U+1F331": ["Y"] }
];

const thanksgiving = [
  //turkey
  { "U+1F983": ["a"] }
];

const pride = [
  //rainbow
  { "U+1F308": ["r"] }
];

const summer = [
  //palm tree
  { "U+1F334": ["t", "T"] },
  //Sun
  { "U+2600": ["O", "o", "a"] }
];

const saintPatricksDay = [
  //shamrock
  { "U+2618": [] },
  //four leaf clover
  { "U+1F340": [] }
];

const graduation = [
  //graduation cap
  { "U+1F393": [] }
];

const winterHolidays = [
  //christmas tree
  { "U+1F384": ["A"] }
];

//TODO think about how to choose between letters
const haloween = [
  //spider webs
  { "U+1F578": ["O", "o", "a"] },
  //full moon
  { "U+1F315": ["O", "o", "a"] },
  //jack-o-lantern
  { "U+1F383": ["O", "o", "a"] }
];

const getEmojiisByMonth = {
  //winter months
  1: [...winter],
  2: [...winter],
  3: [...spring],
  4: [...spring],
  5: [...spring],
  6: [...summer],
  7: [...summer],
  8: [...summer],
  9: [...fall],
  10: [...haloween, ...fall],
  11: [...fall],
  12: [...winter]
};

const getEmojiisByWeek = {};

export const getEmojiReplacementList = () => {
  //returns a map of letters to emojis
  let emojiList = [];
  const date =
    process.env.NODE_ENV === "development"
      ? getRandomDateInNextYear()
      : new Date();
  console.log("date", date);
  const week = date.getWeekNumber();
  const month = date.getMonth() + 1;
  emojiList = emojiList.concat(getEmojiisByWeek[week]);
  emojiList = emojiList.concat(getEmojiisByMonth[month]);
  //thanksgiving can move
  if (isThanksgivingWeek(date)) {
    emojiList = emojiList.concat(thanksgiving);
  }
  const cl = collapseList(emojiList.filter(item => !!item));
  return cl;
};
