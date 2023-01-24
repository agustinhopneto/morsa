import ituData from './data/itu.json';
import { flipObject } from './utils/flip-object';

export default class Morsa {
  private ituData: Record<string, string>;

  constructor() {
    this.ituData = ituData;
  }

  static normalizeString(textInput: string): string {
    return textInput
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  encode(textInput: string): string {
    const normalizedString = Morsa.normalizeString(textInput);

    let encodedText = '';

    for (const char of normalizedString) {
      if (!this.ituData[char]) {
        encodedText += '# ';
        continue;
      }

      encodedText += `${this.ituData[char]} `;
    }

    return encodedText.trim();
  }

  decode(codeInput: string): string {
    const flippedItuData = flipObject(this.ituData);
    const encodedWords = codeInput.trim().split(' / ');

    const mapWords = encodedWords.map((word) => {
      const codes = word.split(' ');

      let decodedWord = '';

      for (const code of codes) {
        if (!flippedItuData[code]) {
          decodedWord += '#';
          continue;
        }

        decodedWord += flippedItuData[code];
      }

      return decodedWord;
    });

    return mapWords.join(' ').toUpperCase();
  }
}

export const normalizeString = Morsa.normalizeString;
