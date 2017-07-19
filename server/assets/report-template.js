const generatePDF = (json, style, logo, fonts) => {
	return `<!DOCTYPE html>
	<html>
		<head>
			<title>${json.title}</title>
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			${fonts}
			${style}
		</head>
		<body>
			<div id="container">
			<div id="main">
				<div id="header">
				<img id='base64image' src='${logo}' />
					<div id="header_info black"> ${json.company} <span class="black">|</span> ${new Date()}</div>
				</div>
				<h1 class="black" id="quote_name">${json.title}</h1>
				<div id="client">
					<p class="black">
						${json.section}
					</p>
				</div>
				<table id="phase_details">
					<thead>
						<tr>
						${getColumnHeaders(json.data[0])}
						</tr>
					</thead>
					${getRows(json.data)}
				</table>
			</div>
			<div id="total_price">
				<h2>${json.summary}</h2>
			</div>
			<p class="black" id="new_page"> THIS TEXT AND THE FOLLOWING TABLE ARE RENDERER IN A NEW PAGE </p>
			<table id="phase_details">
				<thead>
					<tr>
					${getColumnHeaders(json.data[0])}
					</tr>
				</thead>
				${getRows(json.data)}
			</table>
			</div>
		</body>
	</html>`;
};

function getColumnHeaders(obj) {
	return Object.keys(obj).map(title => {
		return `<th class="title">${title}</th>`;
	});
}

function getRows(objs) {
	return objs.map(item => {
		return `<tr> ${getColumns(item)} </tr>`;
	});
}

function getColumns(obj) {
	return Object.values(obj).map(value => {
		return `<td> ${value} </td>`;
	});
}

module.exports = generatePDF;
