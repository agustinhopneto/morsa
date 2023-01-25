import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import Morsa from '../src';

describe('Morsa Suite Test', () => {
  let morsa: Morsa;

  beforeEach(() => {
    morsa = new Morsa();
  });

  it('should replace special characters and normalize a text', () => {
    const textInput = ' mÓrsâ ';
    const expected = 'morsa';
    const result = Morsa.normalizeString(textInput);

    expect(result).to.be.deep.equal(expected);
  });

  it('should encode a text to code morse', () => {
    const textInput = 'This is MORSA!';
    const expected = '- .... .. ... / .. ... / -- --- .-. ... .- -.-.--';

    const result = morsa.encode(textInput);

    expect(result).to.be.deep.equal(expected);
  });

  it('should replace by "#" while encoding a non mapped char', () => {
    const textInput = 'This is MORSA! ぁ';
    const expected = '- .... .. ... / .. ... / -- --- .-. ... .- -.-.-- / #';

    const result = morsa.encode(textInput);

    expect(result).to.be.deep.equal(expected);
  });

  it('should decode a code morse to text', () => {
    const codeInput =
      '-.. . -.-. --- -.. . -.. / -... -.-- / -- --- .-. ... .- -.-.--';
    const expected = 'DECODED BY MORSA!';

    const result = morsa.decode(codeInput);

    expect(result).to.be.deep.equal(expected);
  });

  it('should replace by "#" while decoding a non mapped code', () => {
    const codeInput =
      '-.. . -.-. --- -.. . -.. / -... -.-- / -- --- .-. ... .- -.-.-- / ぁ';
    const expected = 'DECODED BY MORSA! #';

    const result = morsa.decode(codeInput);

    expect(result).to.be.deep.equal(expected);
  });
});
