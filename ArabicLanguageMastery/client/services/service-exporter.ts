import { HtmlSanitisationService } from './html-sanitisation.service';
import { PhoneticConverterService } from './phonetic-converter/phonetic-converter.service';
import { StaticPageService } from './static-page.service';

export const htmlSanitisationService = new HtmlSanitisationService();
export const phoneticConverterService = new PhoneticConverterService();
export const staticPageService = new StaticPageService();
