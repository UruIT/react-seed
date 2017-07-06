const zh = require('../dictionaries/zh');
const ja = require('../dictionaries/ja');
const ru = require('../dictionaries/ru');
const en = require('../dictionaries/en');

class TranslationService {
	getDictionary(locale) {
		switch (locale) {
			case 'zh':
				return zh;
			case 'ja':
				return ja;
			case 'ru':
				return ru;
			default:
				return en;
		}
	}
}

module.exports = new TranslationService();
