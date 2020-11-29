import { getEmojiReplacementList } from "./replacementEmojiis.js";
import { seededRandom } from "./utils.js";

const emojifyText = text => {
  //get a list of potential emoji replacements
  const emojiList = getEmojiReplacementList();
  //filter out all potential emojis that are not included in letters
  //TODO: replace Math.random with seededRandom
  const randomEmoji = emojiList[Math.floor(seededRandom() * emojiList.length)];
  //get the emoji value to replace the letter with
  const emojiUnicode = Object.keys(randomEmoji)[0];
  const replacementValue = String.fromCodePoint(
    emojiUnicode.replace("U+", "0x")
  );
  //get the letters in it and concat a null for chance to push letter onto the end
  const potentialLettersToReplace = randomEmoji[emojiUnicode]
    .filter(letter => text.includes(letter))
    .concat([null]);
  if (potentialLettersToReplace.length) {
    //replace the letter truly randomly, only emoji should be deterministic
    const letterToReplace =
      potentialLettersToReplace[
        Math.floor(Math.random() * potentialLettersToReplace.length)
      ];
    if (letterToReplace && text.includes(letterToReplace)) {
      return text.replace(
        letterToReplace,
        //replace to make unicode string match code point
        replacementValue
      );
    }
  }
  return text + replacementValue;
};

//main function to convert text

//TEST
if (process.env.NODE_ENV === "development") {
  const testString = "Mosaic";
  console.log(emojifyText(testString));
}
