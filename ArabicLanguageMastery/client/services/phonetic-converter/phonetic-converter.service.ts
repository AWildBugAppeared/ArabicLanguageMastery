import {
  ArabicLetter,
  arabicLettersWhichDontAcceptAlif,
  arabicLettersWhichDontAcceptSukoon,
  ArabicMiscCharacter,
  arabicShamsLetters,
  ArabicVowel,
} from './arabic-constants';
import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
  EnglishVowel,
  PhoneticArabicLetter,
  PhoneticArabicTanween,
  PhoneticArabicVowel,
  ligaturePrefixTag,
  PhoneticArabicSpecialWord,
} from './english-constants';
import { phoneticDictionary } from './phonetic-dictionary';

export class PhoneticConverterService {
  public convertToArabic(english: string, isVowelMode = true): string {
    const characterArray = english.split('');

    let arabic = '';

    let thirdLastArabicCharacter = '';
    let secondLastArabicCharacter = '';
    let lastArabicCharacter = '';
    let previousCharacter = '';
    let character = '';
    let nextCharacter = '';

    let previousWord = '';

    for (let i = 0; i < characterArray.length; i++) {
      thirdLastArabicCharacter = arabic[arabic.length - 3];
      secondLastArabicCharacter = arabic[arabic.length - 2];
      lastArabicCharacter = arabic[arabic.length - 1];
      previousCharacter = characterArray[i - 1];
      character = characterArray[i];
      nextCharacter = characterArray[i + 1];

      const isCharacterASpace = character === ' ';

      if (isCharacterASpace)
        previousWord = (english.substring(0, i + 1).match(/[^ ]+ $/) ?? [
          previousWord,
        ])[0];

      // Check for special words
      if (
        (!previousCharacter && !isCharacterASpace) ||
        previousCharacter === ' '
      ) {
        const results = english.substring(i).match(/[^ ]+/);

        if (
          results &&
          results?.length > 0 &&
          Object.values(PhoneticArabicSpecialWord).includes(
            results[0] as PhoneticArabicSpecialWord
          )
        ) {
          arabic += this.convert(results[0]);
          i += results[0].length - 1;
          continue;
        }
      }

      // Check for cases like bialnnaasi where an alif comes after a kasrah
      if (
        character === PhoneticArabicVowel.i &&
        nextCharacter === PhoneticArabicLetter.alif
      ) {
        arabic += `${ArabicVowel.kasrah}${ArabicLetter.alif}`;
        i++;
        continue;
      }

      // Check for ligatures
      if (`${character}${nextCharacter}` === ligaturePrefixTag) {
        const results = english
          .substring(i)
          .match(/(?<=\(\()[^((^)^)]+(?=\)\))/);

        if (results && results?.length > 0) {
          const ligature = results[0];
          arabic += this.convert(ligature);
          // ((saw))
          // ^Current character index which needs to be placed at the end
          i += ligature.length + ligaturePrefixTag.length + 1;
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

      // Check for Taa Marbootah
      if (
        `${previousCharacter}${character}${nextCharacter}` ===
        PhoneticArabicLetter.taaMarbootah
      ) {
        arabic += ArabicLetter.taaMarbootah;
        i++;
        continue;
      }

      // Check for shaddah
      if (
        lastArabicCharacter === thirdLastArabicCharacter &&
        secondLastArabicCharacter === ArabicMiscCharacter.sukoon
      ) {
        arabic = arabic.substring(0, arabic.length - 2);
        arabic += ArabicMiscCharacter.shaddah;
      }

      // Check for small hamza at the end or joined hamza in the middle of a word
      if (
        secondLastArabicCharacter === ArabicLetter.hamzaSmall &&
        lastArabicCharacter !== ' ' &&
        Object.values(PhoneticArabicLetter).includes(
          character as PhoneticArabicLetter
        ) &&
        (!Object.values(PhoneticArabicTanween).includes(
          `${previousCharacter}${character}` as PhoneticArabicTanween
        ) ||
          english[i + 1] !== ' ')
      ) {
        arabic = `${arabic.substring(0, arabic.length - 2)}${
          ArabicLetter.yaaHamzah
        }${arabic.substring(arabic.length - 1)}`;
      }

      // Check for plural masculine verb which requires an Alif to be appended
      if (
        character === ' ' &&
        `${thirdLastArabicCharacter}${secondLastArabicCharacter}${lastArabicCharacter}` ===
          ArabicVowel.harfIllahWaw
      ) {
        arabic += `${ArabicLetter.alif} `;
        continue;
      }

      // Check for tanween
      if (
        isCharacterASpace &&
        previousWord.length > 4 &&
        this.isLastWordEndingInTanween(english, i)
      ) {
        const secondLastLetter = english[i - 2];
        const lastLetter = english[i - 1];
        const tanweenSyllable = `${secondLastLetter}${lastLetter}`;

        arabic = arabic.substring(0, arabic.length - 2);
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
        this.isArabicLetter(lastArabicCharacter) &&
        this.isArabicLetterWhichAcceptsSukoon(lastArabicCharacter)
      ) {
        if (
          this.isPhoneticVowel(character) ||
          `${character}${nextCharacter}` === PhoneticArabicVowel.ee ||
          `${character}${nextCharacter}` === PhoneticArabicVowel.oo
        ) {
          const vowel =
            character === nextCharacter
              ? `${character}${characterArray[++i]}`
              : character;

          arabic += this.convert(vowel);
          continue;
        }
        if (
          lastArabicCharacter !== ArabicVowel.maddah &&
          (this.isEnglishConsonant(character) ||
            (character === ' ' &&
              Object.values(ArabicVowel).includes(
                arabic[arabic.length - 2] as ArabicVowel
              )))
        ) {
          if (lastArabicCharacter === ArabicLetter.hamzaSmall) {
            arabic = `${arabic.substring(0, arabic.length - 1)}${
              ArabicLetter.yaaHamzah
            }`;
          }
          arabic += ArabicMiscCharacter.sukoon;
        }
      }

      // Check for dual letter mappings e.g. kh, sh, zh
      if (
        nextCharacter &&
        dualCharacterMappingsFirstLetters.includes(character) &&
        dualCharacterMappingsSecondLetter === nextCharacter
      ) {
        arabic += this.convert(`${character}${characterArray[++i]}`);
      } else arabic += this.convert(character);

      const isDefiniteArticlePresent =
        `${secondLastArabicCharacter}${lastArabicCharacter}` ===
        `${ArabicLetter.alif}${ArabicLetter.laam}`;

      const isPossessiveDefiniteArticlePresent =
        `${thirdLastArabicCharacter}${secondLastArabicCharacter}${lastArabicCharacter}` ===
        `${ArabicLetter.laam}${ArabicVowel.kasrah}${ArabicLetter.laam}`;

      // Check for shams letters after al which will need the sukoon on the laam removing
      if (
        (isDefiniteArticlePresent || isPossessiveDefiniteArticlePresent) &&
        arabicShamsLetters.includes(arabic[arabic.length - 1])
      ) {
        arabic = `${arabic.substring(0, arabic.length - 2)}${
          arabic[arabic.length - 1]
        }`;
      }
    }

    if (!isVowelMode) {
      arabic = arabic.replace(/[\u0618-\u061A\u064B-\u0650\u0652-\u0657]/g, '');
    }

    return arabic;
  }

  convert(character: string): string {
    return phoneticDictionary[character] ?? character;
  }

  isArabicLetterWhichAcceptsSukoon(character: string): boolean {
    return !arabicLettersWhichDontAcceptSukoon.includes(character);
  }

  isArabicLetter(character: string): boolean {
    return (
      !Object.values(ArabicVowel).includes(character as ArabicVowel) &&
      Object.values(ArabicLetter).includes(character as ArabicLetter)
    );
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
    const englishTrimmed = english.substring(0, spaceCharacterIndex);

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
}
