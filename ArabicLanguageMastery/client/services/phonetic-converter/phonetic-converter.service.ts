import {
  ArabicLetter,
  arabicLettersWhichDontAcceptAlif,
  ArabicLigature,
  ArabicMiscCharacter,
  arabicStandingHamzahs,
  ArabicVowel,
} from './arabic-constants';
import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
  EnglishVowel,
  PhoneticArabicLetter,
  PhoneticArabicTanween,
  PhoneticArabicVowel,
  specialWordPrefixTag,
} from './english-constants';
import { phoneticDictionary } from './phonetic-dictionary';

export class PhoneticConverterService {
  public convertToArabic(english: string): string {
    const characterArray = english.split('');

    let arabic = '';

    let thirdLastArabicCharacter = '';
    let secondLastArabicCharacter = '';
    let lastArabicCharacter = '';
    let previousCharacter = '';
    let character = '';
    let nextCharacter = '';

    for (let i = 0; i < characterArray.length; i++) {
      thirdLastArabicCharacter = arabic[arabic.length - 3];
      secondLastArabicCharacter = arabic[arabic.length - 2];
      lastArabicCharacter = arabic[arabic.length - 1];
      previousCharacter = characterArray[i - 1];
      character = characterArray[i];
      nextCharacter = characterArray[i + 1];

      // Check for special words
      if (`${character}${nextCharacter}` === specialWordPrefixTag) {
        const results = english.substring(i).match(/(?<=##)[^#]+(?=##)/);

        if (results && results?.length > 0) {
          const specialWord = results[0];
          arabic += this.convert(specialWord);
          // ##Allah##
          // ^Current character index which needs to be placed at the end
          i += specialWord.length + specialWordPrefixTag.length + 1;
          continue;
        }
      }

      // Check for Hamzatul Wasl
      if (
        (!previousCharacter || previousCharacter === ' ') &&
        character === EnglishVowel.a
      ) {
        arabic += ArabicLetter.alif;
        continue;
      }

      // Check for shaddah
      if (
        lastArabicCharacter === thirdLastArabicCharacter &&
        secondLastArabicCharacter === ArabicMiscCharacter.sukoon
      ) {
        arabic = arabic.substr(0, arabic.length - 2);
        arabic += ArabicMiscCharacter.shaddah;
      }

      // Check for tanween
      if (
        character === ' ' &&
        english[i - 5] &&
        english[i - 5] !== ' ' &&
        this.isLastWordEndingInTanween(english, i)
      ) {
        const secondLastLetter = english[i - 2];
        const lastLetter = english[i - 1];
        const tanweenSyllable = `${secondLastLetter}${lastLetter}`;

        arabic = arabic.substr(0, arabic.length - 2);
        arabic += this.convert(tanweenSyllable);
        arabic +=
          tanweenSyllable === PhoneticArabicTanween.an &&
          !arabicLettersWhichDontAcceptAlif.includes(arabic[arabic.length - 2])
            ? `${ArabicLetter.alif} `
            : ' ';

        continue;
      }

      // Check for vowels & sukoon
      if (
        (this.isArabicLigature(lastArabicCharacter) ||
          this.isArabicLetter(lastArabicCharacter)) &&
        lastArabicCharacter !== ArabicLetter.alif
      ) {
        if (this.isPhoneticVowel(character)) {
          let vowel = '';

          vowel =
            character === nextCharacter
              ? `${character}${characterArray[++i]}`
              : character;

          arabic += this.convert(vowel);
          continue;
        }
        if (
          this.isEnglishConsonant(character) ||
          (character === ' ' &&
            Object.values(ArabicVowel).includes(
              arabic[arabic.length - 2] as ArabicVowel
            ))
        ) {
          arabic += ArabicMiscCharacter.sukoon;
        }
      }

      if (
        nextCharacter &&
        dualCharacterMappingsFirstLetters.includes(character) &&
        dualCharacterMappingsSecondLetter === nextCharacter
      ) {
        arabic += this.convert(`${character}${characterArray[++i]}`);
        continue;
      }

      arabic += this.convert(character);
    }

    return arabic;
  }

  convert(character: string): string {
    return phoneticDictionary[character] ?? character;
  }

  deleteLastCharacter(input: string): string {
    input = input.substring(0, input.length - 1);
    return input;
  }

  isArabicLetter(character: string): boolean {
    return (
      !Object.values(ArabicVowel).includes(character as ArabicVowel) &&
      Object.values(ArabicLetter).includes(character as ArabicLetter)
    );
  }

  isArabicLigature(ligature: string): boolean {
    return Object.values(ArabicLigature).includes(ligature as ArabicLigature);
  }

  isEnglishConsonant(character: string): boolean {
    return !!Object.values(PhoneticArabicLetter).includes(
      character as PhoneticArabicLetter
    );
  }

  isLastWordEndingInTanween(
    english: string,
    spaceCharacterIndex: number
  ): boolean {
    const englishTrimmed = english.substr(0, spaceCharacterIndex);

    const secondLastLetter = englishTrimmed[englishTrimmed.length - 2];
    const lastLetter = englishTrimmed[englishTrimmed.length - 1];

    if (!secondLastLetter || !lastLetter) return false;

    const tanweenSyllable = `${secondLastLetter}${lastLetter}`;

    return !!Object.values(PhoneticArabicTanween).includes(
      tanweenSyllable as PhoneticArabicTanween
    );
  }

  isPhoneticVowel(character: string): boolean {
    return Object.values(PhoneticArabicVowel).includes(
      character as PhoneticArabicVowel
    );
  }

  isStandingHamzah(character: string): boolean {
    return arabicStandingHamzahs.includes(character);
  }
}
