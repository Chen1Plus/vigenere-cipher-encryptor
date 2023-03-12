# Vigenère Cipher Encryptor

This project is an app that can encrypt and decrypt text using Vigenère ciphers.

You can use the app at [chen1plus.github.io](https://chen1plus.github.io/vigenere-cipher-encryptor/){:target="_blank"}

## Vigenère Cipher

The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution.

This method had even been described as "impossible of translation". Although there are several cryptanalysis methods now, it could still be safe if you use a long keyword to encrypt short messages.

Read [Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher){:target="_blank"} for details.

## Usage

There are a few optional settings for encryption:

- Strict Mode: It will auto delete characters which is not English alphabets for safety. (Or others could easily guess that the three-letter word is "the" and then guess your keyword.)
- Capital: This is available only in Strict Mode. It decides if the output letters are capital or not.

## License

This project is licensed under [MIT License](./LICENSE).
