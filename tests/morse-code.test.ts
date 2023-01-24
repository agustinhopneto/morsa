import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { SinonSandbox, createSandbox } from 'sinon';

import { MorseCode } from '../src/morse-code';

describe('Morse Code Test Suite', () => {
  let sandbox: SinonSandbox;
  let morseCode: MorseCode;

  beforeEach(() => {
    sandbox = createSandbox();
    morseCode = new MorseCode();
  });

  afterEach(() => {
    sandbox.reset();
  });

  it('should replace special characters and normalize a text', () => {
    const textInput = ' mÓrsâ ';
    const expected = 'morsa';
    const result = MorseCode.normalizeString(textInput);

    expect(result).to.be.deep.equal(expected);
  });

  it('should encode a text to code morse', () => {
    const textInput = 'This is MORSA!';
    const expected = '- .... .. ... / .. ... / -- --- .-. ... .- -.-.--';

    const spy = sandbox.spy(MorseCode, 'normalizeString');

    const result = morseCode.encode(textInput);

    expect(spy.calledOnce).to.be.ok;
    expect(result).to.be.equal(expected);
  });
});
