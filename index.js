//THOUGHTS
//replace characters by day/week/month/etc....
//DAYS (holidays, independence days, canada days etc...)
//WEEKS (party on friday, happy on monday, camel on wednesday)
//prioritize the daily ones
//

//default variables
const d = new Date();
const month = d.getMonth();
const day = d.getDay();

const snowflakes = {
  //snowflakes for Os
  O: "\u2744",
  o: "\u2744"
};

const EmojiisByMonth = {
  //winter months
  10: { ...snowflakes },
  11: { ...snowflakes },
  12: { ...snowflakes }
};

//utility functions
const randomChance = chance => {
  const rand = Math.random();
  return rand > chance;
};

const getCharacterToUse = letter => {
  const emojiToUse = EmojiisByMonth[month][letter];
  const chance = letter === " " ? 0.02 : 0.5;
  if (emojiToUse && randomChance(chance)) {
    return emojiToUse;
  }
  return null;
};

//main function to convert text
const convertText = text => {
  let convertedText = [];
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    convertedText.push(getCharacterToUse(letter) || letter);
  }
  return convertedText.join("");
};

const testString = "test O o fpancpancpemninb kacpacmsdnrop vnapcnape";
console.log(convertText(testString));
