const ACode = "A".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const ZCode = "Z".charCodeAt(0);
const zCode = "z".charCodeAt(0);

function charCapital(msgCode: number) {
  if (msgCode >= ACode && msgCode <= ZCode) {
    return true;
  } else if (msgCode >= aCode && msgCode <= zCode) {
    return false;
  } else {
    return null;
  }
}

function encrypt(key: String, message: String) {
  const keyLength = key.length;
  let encryptedMessage = "";

  for (let i = 0, len = message.length; i < len; i++) {
    const messageCode = message.charCodeAt(i);
    const Capital = charCapital(messageCode);

    if (Capital === null) {
      encryptedMessage += message[i];
    } else {
      let encryptedCode =
        messageCode +
        key.charCodeAt(i % keyLength) -
        (Capital ? ACode + 32 : aCode);
      if (encryptedCode > (Capital ? ZCode : zCode)) {
        encryptedCode -= 26;
      }

      encryptedMessage += String.fromCharCode(encryptedCode);
    }
  }

  return encryptedMessage;
}

function decrypt(key: String, encryptedMessage: String) {
  const keyLength = key.length;
  let decryptedMessage = "";

  for (let i = 0, len = encryptedMessage.length; i < len; i++) {
    const encryptedCode = encryptedMessage.charCodeAt(i);
    const Capital = charCapital(encryptedCode);

    if (Capital === null) {
      decryptedMessage += encryptedMessage[i];
    } else {
      let decryptedCode =
        encryptedCode -
        key.charCodeAt(i % keyLength) +
        (Capital ? ACode + 32 : aCode);
      if (decryptedCode < (Capital ? ACode : aCode)) {
        decryptedCode += 26;
      }

      decryptedMessage += String.fromCharCode(decryptedCode);
    }
  }

  return decryptedMessage;
}

export { encrypt, decrypt };
