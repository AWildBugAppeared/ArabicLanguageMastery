export enum ArabicLetter {
  alif = 'ا',
  baa = 'ب',
  taa = 'ت',
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
}

export enum ArabicMiscCharacter {
  sukoon = 'ْ',
}

export enum ArabicVowel {
  dammah = 'ُ',
  dammatain = 'ٌ',
  fathah = 'َ',
  fathatain = 'ً',
  harfIllahAlif = 'َا',
  harfIllahWaw = 'ُوْ',
  harfIllahYaa = 'ِيْ',
  kasrah = 'ِ',
  kasratain = 'ٍ',
}

export const arabicLettersWhichDontAcceptAlif = ['ى', 'ء', 'إ', 'أ', 'ا'];
