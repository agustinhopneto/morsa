import { expect } from 'chai';
import { describe, it } from 'mocha';
import { flipObject } from './flip-object';

describe('Flip Object Suite Test', () => {
  it('should flip an object', () => {
    const object = {
      a: 'x',
      b: 'y',
      c: 'z',
    };

    const expected = {
      x: 'a',
      y: 'b',
      z: 'c',
    };

    const result = flipObject(object);

    expect(result).to.be.deep.equal(expected);
  });
});
