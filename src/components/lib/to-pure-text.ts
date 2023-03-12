// returns a string with only English letters
function toPureText(str: String) {
  return str.replace(/[^a-z]/gi, "");
}

export default toPureText;
