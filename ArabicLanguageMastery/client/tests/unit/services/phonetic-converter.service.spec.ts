/* eslint-disable  @typescript-eslint/no-explicit-any */

import { phoneticConverterService as service } from '@/services/service-exporter';

describe('PhoneticConverterService', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should return the arabic alphabet', () => {
    const english =
      'a b t th j H kh d dh r z s sh S D T Z e g gh f q k l m n w W h A I á c y Y v';
    const expectedArabic =
      'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ غ ف ق ك ل م ن و ؤ ه أ إ ء ء ي ى ئ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should return the arabic alphabet', () => {
    const english = '1 2 3 4 5 6 7 8 9 0';
    const expectedArabic =
      '\u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should return the short Arabic vowels', () => {
    const english = 'yajidu';
    const expectedArabic = 'يَجِدُ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should return the long vowels', () => {
    const english = 'sooqeenaa';
    const expectedArabic = 'سُوْقِيْنَا';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should process sukoons', () => {
    const words = ['jurju', 'Aay '];

    const jurju = 'جُرْجُ';
    const ay = 'أَيْ ';

    const expectedArabicWords = [jurju, ay];

    words.forEach((word: string, index: number) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabicWords[index]);
    });
  });

  it('should not put sukoon on alif/alif maqsoor', () => {
    const english = "jaahidoo Iil'Y ";
    const expectedArabic = 'جَاهِدُوْا إِلٰى ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should allow baa in front of a word with al', () => {
    const english = 'bialnnaasi';
    const expectedArabic = 'بِالنَّاسِ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should not put sukoon on the laam of al if the next letter is a shams letter', () => {
    const english = "Iil'Y alqamari wa alshshamsi";
    const expectedArabic = 'إِلٰى الْقَمَرِ وَ الشَّمْسِ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should not put sukoon on the laam of lil if the next letter is a shams letter', () => {
    const english = 'lilshshamsi wa lilnnujoomi';
    const expectedArabic = 'لِلشَّمْسِ وَ لِلنُّجُوْمِ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should differentiate between وَشِرٌ and وَسْهِرٌ', () => {
    const english = 'washirun wasxhirun ';
    const expectedArabic = 'وَشِرٌ وَسْهِرٌ ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should process tanweens', () => {
    const english = 'Aabun Aaban Aabin ';
    const expectedArabic = 'أَبٌ أَبًا أَبٍ ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should not add tanween to two letter words', () => {
    const english = ' wa man wa min taHtihim ';

    const expectedArabic = ' وَ مَنْ وَ مِنْ تَحْتِهِمْ ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should not add alif after kasratain for letters which do not accept alif', () => {
    const words = ['maljaAan ', 'samaaáan '];

    const maljaAn = 'مَلْجَأً ';
    const sky = 'سَمَاءً ';

    const expectedArabicWords = [maljaAn, sky];

    words.forEach((word: string, index: number) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabicWords[index]);
    });
  });

  it('should add shaddahs to repeated letters', () => {
    const english = 'layusakhkhiranna';
    const expectedArabic = 'لَيُسَخِّرَنَّ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should write standing alifs', () => {
    const english = "Iiil'f";
    const expectedArabic = 'إٖلٰف';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should write inverted dammah', () => {
    const english = 'kitaabuhuu';
    const expectedArabic = 'كِتَابُهٗ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should display punctuation', () => {
    const english = '. , ? < > / : ; [ ] { } ! ( ) - + _ = * @ $ % ^ | \\';
    const expectedArabic =
      '. ، ؟ < > / : ؛ [ ] { } ! ( ) - + _ = * @ $ % ^ | \\';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should support taa marbootah', () => {
    const english = 'Taaliba-tun Taaliba-tan Taaliba-tin Taaliba-tu aleilmi';
    const expectedArabic = 'طَالِبَةٌ طَالِبَةً طَالِبَةٍ طَالِبَةُ الْعِلْمِ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should support maddah', () => {
    const english = 'Iinnaa~';
    const expectedArabic = 'إِنَّآ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should support writing hamza joined in the middle using standard phonetic letter for small hamzah', () => {
    const english = 'siy~áat jiánaa siy~áat siy~cat jicnaa siy~cat';
    const expectedArabic = 'سِيٓئَتْ جِئْنَا سِيٓئَتْ سِيٓئَتْ جِئْنَا سِيٓئَت';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should write alif after plural masculine verbs', () => {
    const english = 'kafaroo ';
    const expectedArabic = 'كَفَرُوْا ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should convert special words', () => {
    const english = 'Allahumma Allahu Allaha Allahi tallahi lillahi billahi ';
    const expectedArabic = 'اللّٰهُمَّ ﷲُ ﷲَ ﷲِ تاللّٰهِ لِلّٰهِ بِاللّٰهِ ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should process ligatures', () => {
    const english =
      'Aanzala Allahu ((jlh)) rasoolahu ((saw)) Iilaynaa faadeoo Allahumma ahdinaa bisunna-ti rasoolika';
    const expectedArabic =
      'أَنْزَلَ ﷲُ ﷻ رَسُوْلَهُ ﷺ إِلَيْنَا فَادْعُوْا اللّٰهُمَّ اهْدِنَا بِسُنَّةِ رَسُوْلِكَ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });
});
