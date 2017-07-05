const request = require('request');
const pdfTemplate = require('../assets/report-template');
const pdfStyle = require('../assets/report-style-template');
const content = require('../assets/test-data');

class ReportTableService {
	getPDF() {
		const config = {
			url: 'https://docraptor.com/docs',
			encoding: null,
			headers: {
				'Content-Type': 'application/json'
			},
			json: {
				user_credentials: 'Chj0CjAtqbSp0oxSFLxY',
				doc: {
					document_content: pdfTemplate(content, pdfStyle),
					type: 'pdf',
					test: true
				}
			}
		};

		return new Promise(resolve => {
			request.post(config, function(err, response, body) {
				return resolve(body);
			});
		});
	}
}

module.exports = new ReportTableService();
