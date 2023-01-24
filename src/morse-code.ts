import ituData from './data/itu.json';

export class MorseCode {
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

  encode(textInput: string) {
    const normalizedString = MorseCode.normalizeString(textInput);

    let encodedText = '';

    for (const char of normalizedString) {
      encodedText += `${this.ituData[char]} `;
    }

    return encodedText.trim();
  }
}
