const textInput = document.getElementById("text");
const countBtn = document.getElementById("countBtn");
const result = document.getElementById("result");
const longest = document.getElementById("longest");

function countWords(textInput) {
  const trimmedText = textInput.trim();

  if (typeof textInput !== 'string') {
    return 0;
  }

  if (trimmedText === '') {
    return 0;
  }

  const wordCount = trimmedText.split(/\s+/);
  return wordCount.length;
}

function findLongestWordLength(textInput) {
  const wordsArr = textInput.split(" ");
  let longestWord = "";
  let longestLength = 0;
  for(let i = 0; i < wordsArr.length; i++) {
    const wordLength = wordsArr[i].length;
    longestLength = Math.max(longestLength, wordLength);
  }

  for(let i = 0; i < wordsArr.length; i++) {
    if(longestLength === wordsArr[i].length) {
      longestWord = wordsArr[i];
    }
  }

  return {word: longestWord, length: longestLength};
}

countBtn.addEventListener('click', function() {
  const currentText = textInput.value;
  const totalWords = countWords(currentText);
  const longestLen = findLongestWordLength(currentText);
  
  result.textContent = `Word count: ${totalWords}`;
  longest.textContent = `Longest word: ${longestLen.word} (${longestLen.length})`;
  
});
