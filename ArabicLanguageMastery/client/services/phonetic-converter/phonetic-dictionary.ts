import {
  ArabicLetter,
  ArabicPunctuation,
  ArabicSpecialWords,
  ArabicVowel,
} from './arabic-constants';
import {
  EnglishPunctuation,
  PhoneticArabicLetter,
  PhoneticArabicSpecialWords,
  PhoneticArabicTanween,
  PhoneticArabicVowel,
} from './english-constants';

const phoneticDictionary: { [id: string]: string } = {};

// #region Alphabet/Letters
phoneticDictionary[PhoneticArabicLetter.alif] = ArabicLetter.alif;
phoneticDictionary[PhoneticArabicLetter.baa] = ArabicLetter.baa;
phoneticDictionary[PhoneticArabicLetter.taa] = ArabicLetter.taa;
phoneticDictionary[PhoneticArabicLetter.thaa] = ArabicLetter.thaa;
phoneticDictionary[PhoneticArabicLetter.jeem] = ArabicLetter.jeem;
phoneticDictionary[PhoneticArabicLetter.Haa] = ArabicLetter.Haa;
phoneticDictionary[PhoneticArabicLetter.khaa] = ArabicLetter.khaa;
phoneticDictionary[PhoneticArabicLetter.dhaal] = ArabicLetter.dhaal;
phoneticDictionary[PhoneticArabicLetter.zhaal] = ArabicLetter.zhaal;
phoneticDictionary[PhoneticArabicLetter.raa] = ArabicLetter.raa;
phoneticDictionary[PhoneticArabicLetter.zaa] = ArabicLetter.zaa;
phoneticDictionary[PhoneticArabicLetter.seen] = ArabicLetter.seen;
phoneticDictionary[PhoneticArabicLetter.sheen] = ArabicLetter.sheen;
phoneticDictionary[PhoneticArabicLetter.saad] = ArabicLetter.saad;
phoneticDictionary[PhoneticArabicLetter.daad] = ArabicLetter.daad;
phoneticDictionary[PhoneticArabicLetter.Tha] = ArabicLetter.Tha;
phoneticDictionary[PhoneticArabicLetter.Zha] = ArabicLetter.Zha;
phoneticDictionary[PhoneticArabicLetter.ayn] = ArabicLetter.ein;
phoneticDictionary[PhoneticArabicLetter.ghayn] = ArabicLetter.ghayn;
phoneticDictionary[PhoneticArabicLetter.ghaynShort] = ArabicLetter.ghayn;
phoneticDictionary[PhoneticArabicLetter.faa] = ArabicLetter.faa;
phoneticDictionary[PhoneticArabicLetter.qaaf] = ArabicLetter.qaaf;
phoneticDictionary[PhoneticArabicLetter.kaaf] = ArabicLetter.kaaf;
phoneticDictionary[PhoneticArabicLetter.laam] = ArabicLetter.laam;
phoneticDictionary[PhoneticArabicLetter.meem] = ArabicLetter.meem;
phoneticDictionary[PhoneticArabicLetter.noon] = ArabicLetter.noon;
phoneticDictionary[PhoneticArabicLetter.waw] = ArabicLetter.waw;
phoneticDictionary[PhoneticArabicLetter.wawHamzah] = ArabicLetter.wawHamzah;
phoneticDictionary[PhoneticArabicLetter.haa] = ArabicLetter.haa;
phoneticDictionary[PhoneticArabicLetter.hamzah] = ArabicLetter.hamza;
phoneticDictionary[PhoneticArabicLetter.hamzahKasrah] =
  ArabicLetter.hamzaKasrah;
phoneticDictionary[PhoneticArabicLetter.hamzahSmall] = ArabicLetter.hamzaSmall;
phoneticDictionary[PhoneticArabicLetter.yaa] = ArabicLetter.yaa;
phoneticDictionary[PhoneticArabicLetter.alifMaqsoor] = ArabicLetter.alifMaqsoor;
phoneticDictionary[PhoneticArabicLetter.yaaHamzah] = ArabicLetter.yaaHamzah;
// #endregion

// #region Punctuation
phoneticDictionary[EnglishPunctuation.asterisk] = ArabicPunctuation.asterisk;
phoneticDictionary[EnglishPunctuation.at] = ArabicPunctuation.at;
phoneticDictionary[EnglishPunctuation.backslash] = ArabicPunctuation.backslash;
phoneticDictionary[EnglishPunctuation.carrot] = ArabicPunctuation.carrot;
phoneticDictionary[EnglishPunctuation.colon] = ArabicPunctuation.colon;
phoneticDictionary[EnglishPunctuation.comma] = ArabicPunctuation.comma;
phoneticDictionary[EnglishPunctuation.dollar] = ArabicPunctuation.dollar;
phoneticDictionary[EnglishPunctuation.equal] = ArabicPunctuation.equal;
phoneticDictionary[EnglishPunctuation.exclamationMark] =
  ArabicPunctuation.exclamationMark;
phoneticDictionary[EnglishPunctuation.forwardSlash] =
  ArabicPunctuation.forwardSlash;
phoneticDictionary[EnglishPunctuation.fullStop] = ArabicPunctuation.fullStop;
phoneticDictionary[EnglishPunctuation.leftAngleBracket] =
  ArabicPunctuation.leftAngleBracket;
phoneticDictionary[EnglishPunctuation.leftBrace] = ArabicPunctuation.leftBrace;
phoneticDictionary[EnglishPunctuation.leftBracket] =
  ArabicPunctuation.leftBracket;
phoneticDictionary[EnglishPunctuation.leftSquareBracket] =
  ArabicPunctuation.leftSquareBracket;
phoneticDictionary[EnglishPunctuation.line] = ArabicPunctuation.line;
phoneticDictionary[EnglishPunctuation.minus] = ArabicPunctuation.minus;
phoneticDictionary[EnglishPunctuation.percentage] =
  ArabicPunctuation.percentage;
phoneticDictionary[EnglishPunctuation.plus] = ArabicPunctuation.plus;
phoneticDictionary[EnglishPunctuation.questionMark] =
  ArabicPunctuation.questionMark;
phoneticDictionary[EnglishPunctuation.rightAngleBracket] =
  ArabicPunctuation.rightAngleBracket;
phoneticDictionary[EnglishPunctuation.rightBrace] =
  ArabicPunctuation.rightBrace;
phoneticDictionary[EnglishPunctuation.rightBracket] =
  ArabicPunctuation.rightBracket;
phoneticDictionary[EnglishPunctuation.rightSquareBracket] =
  ArabicPunctuation.rightSquareBracket;
phoneticDictionary[EnglishPunctuation.semicolon] = ArabicPunctuation.semicolon;
phoneticDictionary[EnglishPunctuation.underscore] =
  ArabicPunctuation.underscore;

// #endregion

// #region Special words
phoneticDictionary[PhoneticArabicSpecialWords.Allah] = ArabicSpecialWords.Allah;
phoneticDictionary[PhoneticArabicSpecialWords.Allahumma] =
  ArabicSpecialWords.Allahumma;
// #endregion

// #region Vowels
phoneticDictionary[PhoneticArabicVowel.a] = ArabicVowel.fathah;
phoneticDictionary[PhoneticArabicVowel.aa] = ArabicVowel.harfIllahAlif;
phoneticDictionary[PhoneticArabicVowel.standingAlif] =
  ArabicVowel.standingAlifSuper;
phoneticDictionary[PhoneticArabicTanween.an] = ArabicVowel.fathatain;
phoneticDictionary[PhoneticArabicVowel.ee] = ArabicVowel.harfIllahYaa;
phoneticDictionary[PhoneticArabicTanween.en] = ArabicVowel.kasratain;
phoneticDictionary[PhoneticArabicVowel.ii] = ArabicVowel.standingAlifSub;
phoneticDictionary[PhoneticArabicTanween.in] = ArabicVowel.kasratain;
phoneticDictionary[PhoneticArabicVowel.i] = ArabicVowel.kasrah;
phoneticDictionary[PhoneticArabicVowel.o] = ArabicVowel.dammah;
phoneticDictionary[PhoneticArabicVowel.oo] = ArabicVowel.harfIllahWaw;
phoneticDictionary[PhoneticArabicTanween.on] = ArabicVowel.dammatain;
phoneticDictionary[PhoneticArabicVowel.u] = ArabicVowel.dammah;
phoneticDictionary[PhoneticArabicVowel.uu] = ArabicVowel.dammahInverted;
phoneticDictionary[PhoneticArabicTanween.un] = ArabicVowel.dammatain;
phoneticDictionary[PhoneticArabicVowel.x] = '';
// #endregion

export { phoneticDictionary };
