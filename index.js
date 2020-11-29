//THOUGHTS
//replace characters by day/week/month/etc....
//DAYS (holidays, independence days, canada days etc...)
//WEEKS (party on friday, happy on monday, camel on wednesday)
//prioritize the daily ones
//
//

//3 types of items
//1
//Items that show up after the text based on day/holiday/etc...
//These will be things like "canada day, 4th of july, and major holidays. These will be on specific days.

//2
//Seasonal letter replacements.
//These will be things like snowflakes replacing O/o.
//A maximum of one of these will be used per session and will be given back randomly/based on an ?hourly? seed. (Will change once an hour)

//Add getWeek to the date object to add a little more precision
//https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
//
import { getEmojiReplacementList } from "./replacementEmojiis.js";
import { seededRandom } from "./utils.js";

const emojifyText = text => {
  //get a list of potential emoji replacements
  const emojiList = getEmojiReplacementList();
  //filter out all potential emojis that are not included in letters
  //TODO: replace Math.random with seededRandom
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  const letterToReplace = Object.keys(randomEmoji)[0];
  //get the emoji value to replace the letter with
  const replacementValue = String.fromCodePoint(
    randomEmoji[letterToReplace].replace("U+", "0x")
  );
  if (text.includes(letterToReplace)) {
    return text.replace(
      letterToReplace,
      //replace to make unicode string match code point
      replacementValue
    );
  }
  return text + " " + replacementValue;
};

//main function to convert text

//TEST
const testString = "Mosaic";
console.log(emojifyText(testString));
