export enum ArabicLetter {
  alif = 'ا',
  baa = 'ب',
  taa = 'ت',
  taaMarbootah = 'ة',
  thaa = 'ث',
  jeem = 'ج',
  Haa = 'ح',
  khaa = 'خ',
  dhaal = 'د',
  zhaal = 'ذ',
  raa = 'ر',
  zaa = 'ز',
  seen = 'س',
  sheen = 'ش',
  saad = 'ص',
  daad = 'ض',
  Tha = 'ط',
  Zha = 'ظ',
  ein = 'ع',
  ghayn = 'غ',
  faa = 'ف',
  qaaf = 'ق',
  kaaf = 'ك',
  laam = 'ل',
  meem = 'م',
  noon = 'ن',
  waw = 'و',
  wawHamzah = 'ؤ',
  haa = 'ه',
  hamza = 'أ',
  hamzaKasrah = 'إ',
  hamzaSmall = 'ء',
  yaa = 'ي',
  alifMaqsoor = 'ى',
  yaaHamzah = 'ئ',
}

export enum ArabicMiscCharacter {
  shaddah = 'ّ',
  sukoon = 'ْ',
}

export enum ArabicPunctuation {
  asterisk = '*',
  at = '@',
  backslash = '\\',
  carrot = '^',
  colon = ':',
  comma = '،',
  dollar = '$',
  equal = '=',
  exclamationMark = '!',
  forwardSlash = '/',
  fullStop = '.',
  leftAngleBracket = '<',
  leftBrace = '{',
  leftBracket = '(',
  leftSquareBracket = '[',
  line = '|',
  minus = '-',
  percentage = '%',
  plus = '+',
  questionMark = '؟',
  rightAngleBracket = '>',
  rightSquareBracket = ']',
  rightBrace = '}',
  rightBracket = ')',
  semicolon = '؛',
  underscore = '_',
}

export enum ArabicSpecialWord {
  Allah = '\uFDF2',
  Allahumma = 'اللّ\u0670هُمَّ',
  jallajalaaluhu = '\uFDFB',
  saw = '\uFDFA',
}

export enum ArabicNumber {
  zero = '\u0660',
  one = '\u0661',
  two = '\u0662',
  three = '\u0663',
  four = '\u0664',
  five = '\u0665',
  six = '\u0666',
  seven = '\u0667',
  eight = '\u0668',
  nine = '\u0669',
}

export enum ArabicVowel {
  dammah = 'ُ',
  dammahInverted = '\u0657',
  dammatain = 'ٌ',
  fathah = 'َ',
  fathatain = 'ً',
  harfIllahAlif = 'َا',
  harfIllahWaw = 'ُوْ',
  harfIllahYaa = 'ِيْ',
  kasrah = 'ِ',
  kasratain = 'ٍ',
  maddah = '\u0653',
  standingAlifSuper = '\u0670',
  standingAlifSub = '\u0656',
}

export const arabicLettersWhichDontAcceptAlif = [
  'ئ',
  'ى',
  'ء',
  'إ',
  'أ',
  'ا',
  'ة',
];

export const arabicLettersWhichDontAcceptSukoon = ['ى', 'ا', 'ة'];

export const arabicStandingHamzahs = ['إ', 'أ'];
