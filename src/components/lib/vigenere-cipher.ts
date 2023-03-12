const aCode = 97;
const zCode = 122;

function charCapital(char: String) {
  if (char.match(/[A-Z]/)) {
    return true;
  } else if (char.match(/[a-z]/)) {
    return false;
  } else {
    return null;
  }
}

function codeToString(code: number, capital: boolean = false) {
  let tempStr = String.fromCharCode(code);
  capital && (tempStr = tempStr.toUpperCase());
  return tempStr;
}

function encrypt(key: String, message: String) {
  const keyLength = key.length;
  let encryptedMessage = "";

  let i = 0;
  for (let char of message) {
    const capital = charCapital(char);

    if (capital === null) {
      encryptedMessage += char;
    } else {
      let encryptedCode =
        char.toLowerCase().charCodeAt(0) +
        key.charCodeAt(i % keyLength) -
        aCode;
      encryptedCode > zCode && (encryptedCode -= 26);

      encryptedMessage += codeToString(encryptedCode, capital);
      i++;
    }
  }

  return encryptedMessage;
}

function decrypt(key: String, encryptedMessage: String) {
  const keyLength = key.length;
  let decryptedMessage = "";

  let i = 0;
  for (let char of encryptedMessage) {
    const capital = charCapital(char);

    if (capital === null) {
      decryptedMessage += char;
    } else {
      let decryptedCode =
        char.toLowerCase().charCodeAt(0) -
        key.charCodeAt(i % keyLength) +
        aCode;
      decryptedCode < aCode && (decryptedCode += 26);

      decryptedMessage += codeToString(decryptedCode, capital);
      i++;
    }
  }

  return decryptedMessage;
}

export { encrypt, decrypt };
