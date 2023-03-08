// keep only letters and change string to lowercase or uppercase
function toPureText(str: String, Capital: boolean = false) {
  let newStr = "";

  if (Capital) {
    for (let i = 0, len = str.length; i < len; i++) {
      const strCode = str.charCodeAt(i);
      if (strCode >= 65 && strCode <= 90) {
        newStr += str[i];
      } else if (strCode >= 97 && strCode <= 122) {
        newStr += String.fromCharCode(strCode - 32);
      }
    }
  } else {
    for (let i = 0, len = str.length; i < len; i++) {
      const strCode = str.charCodeAt(i);

      if (strCode >= 65 && strCode <= 90) {
        newStr += String.fromCharCode(strCode + 32);
      } else if (strCode >= 97 && strCode <= 122) {
        newStr += str[i];
      }
    }
  }

  return newStr;
}

export default toPureText;
