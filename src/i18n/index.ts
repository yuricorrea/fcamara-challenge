import I18n from 'i18n-js';
import * as locales from './locales';

I18n.translations = locales;
I18n.fallbacks = true;
I18n.defaultLocale = 'en';

export default I18n;
