const Morsa = require('./lib/cjs').default;

const morsa = new Morsa();

const textEncoded =
  '-.. . -.-. --- -.. . -.. / -... -.-- / -- --- .-. ... .- -.-.--';
const textDecodedByMorsa = morsa.decode(textEncoded);

const textInput = 'This is MORSA!';
const textEncodedByMorsa = morsa.encode(textInput);

console.log({
  textEncoded,
  textDecodedByMorsa,
  textInput,
  textEncodedByMorsa,
});
