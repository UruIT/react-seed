const pdfTemplate = require('../assets/report-template');
const pdfStyle = require('../assets/report-style-template');
const content = require('../assets/test-data');
const base64Img = require('base64-img');
const wkhtmltopdf = require('wkhtmltopdf');

class ReportTableService {
	getPDF(response) {
		const img = base64Img.base64Sync('./assets/logo-example.jpg');
		wkhtmltopdf(pdfTemplate(content, pdfStyle, img), {
			pageSize: 'letter'
		}).pipe(response);
	}
}

module.exports = new ReportTableService();
