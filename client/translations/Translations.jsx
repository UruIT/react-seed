import React from 'react';
import Root from '../routes/Root';
import { getJson } from '../utils/fetch';

// add internationalization support (english, chinese, japanesse, russian)
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ja from 'react-intl/locale-data/ja';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...zh, ...ja, ...ru]);

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

export default class Translations extends React.Component {
	constructor() {
		super();
		this.state = {
			translations: {}
		};
	}

	render() {
		if (JSON.stringify(this.state.translations) === JSON.stringify({})) {
			return <div> Loading ... </div>;
		}
		return (
			<IntlProvider locale={language} defaultLocale={language} messages={this.state.translations}>
				<Root />
			</IntlProvider>
		);
	}

	componentDidMount() {
		getJson('/api/translations/' + language).then(res => {
			this.setState({
				translations: res
			});
		});
	}
}
