export default isPalindrome(inputString) {
  const reversedString = inputString.split("").reverse().join("");
  return inputString === reversedString;
}
