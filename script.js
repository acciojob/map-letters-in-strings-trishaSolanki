//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!letterMap.hasOwnProperty(letter)) {
      // If the letter is not already a key in the object, initialize it as an array
      letterMap[letter] = [];
    }
    // Push the index to the array corresponding to the letter
    letterMap[letter].push(i);
  }

  return letterMap;
}