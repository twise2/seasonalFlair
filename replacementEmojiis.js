import { isThanksgivingWeek } from "./utils.js"; //reliance on date prototype update

const winter = [
  //snowflake
  { O: "U+2744" },
  { o: "U+2744" },
  //evergreen tree
  { A: "U+1F332" },
  // snowman
  { B: "U+2603" },
  { b: "U+2603" }
];

const fall = [
  //fallen leaf
  { XXX: "U+1F342" }
];

const sportingEvent = [
  //stadium
  { XXX: "U+1F3DF" }
];

const newYears = [
  //party popper
  { XXX: "U+1F389" }
];

const canadaDay = [
  //maple leaf
  { XXX: "U+1F341" }
];

const americanHolidays = [
  //Statue of Liberty
  { XXX: "U+1F5FD" }
];
const spring = [
  //seedling
  { Y: "U+1F331" }
];

const thanksgiving = [
  //turkey
  { a: "U+1F983" }
];

const pride = [
  //rainbow
  { r: "U+1F308" }
];
const summer = [
  //palm tree
  { t: "U+1F334" },
  { T: "U+1F334" },
  //Sun
  { o: "U+2600" },
  { O: "U+2600" }
];

const saintPatricksDay = [
  //shamrock
  { XXX: "U+2618" },
  //four leaf clover
  { XXX: "U+1F340" }
];

const graduation = [
  //graduation cap
  { XXX: "U+1F393" }
];

const winterHolidays = [
  //christmas tree
  { A: "U+1F384" }
];

//TODO think about how to choose between letters
const haloween = [
  //spider webs
  { XXX: "U+1F578" },
  { XXX: "U+1F578" },
  //full moon
  { o: "U+1F315" },
  { O: "U+1F315" },
  //jack-o-lantern
  { o: "U+1F383" },
  { O: "U+1F383" }
];

const getEmojiisByMonth = {
  //winter months
  10: [...haloween]
};

const getEmojiisByWeek = {
  //winter months
  48: [...winter]
};

export const getEmojiReplacementList = () => {
  //returns a map of letters to emojis
  let emojiList = [];
  const d = new Date(2020, 10, 25);
  const week = d.getWeekNumber();
  const month = d.getMonth();
  console.log("week", week);
  console.log("month", month);
  emojiList = emojiList.concat(getEmojiisByWeek[week]);
  emojiList = emojiList.concat(getEmojiisByMonth[month]);
  //thanksgiving can move
  if (isThanksgivingWeek()) {
    emojiList = emojiList.concat(thanksgiving);
  }
  return emojiList.filter(item => !!item);
};
