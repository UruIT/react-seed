import React from 'react';
import PropTypes from 'prop-types';
import Root from '../routes/Root';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { translationsRequested } from './translations.action';

// Add internationalization support (english, chinese, japanesse, russian)
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ja from 'react-intl/locale-data/ja';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...zh, ...ja, ...ru]);

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

class Translations extends React.Component {
	render() {
		if (this.props.loading) {
			return <div> Loading ... </div>;
		}
		return (
			<IntlProvider locale={language} defaultLocale={language} messages={this.props.translations}>
				<Root />
			</IntlProvider>
		);
	}

	componentDidMount() {
		this.props.fetchTranslations(language);
	}
}

Translations.propTypes = {
	translations: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	fetchTranslations: PropTypes.func.isRequired
};

const mapStateToProps = ({ translations }) => translations;
const mapDispatchToProps = {
	fetchTranslations: translationsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Translations);
