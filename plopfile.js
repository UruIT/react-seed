const path = require('path');

module.exports = function(plop) {
	plop.setHelper('pwd', file => {
		const plopPath = process.cwd().substring(plop.getPlopfilePath().length + 1);
		return path.join(plopPath, file);
	});

	plop.setGenerator('component', {
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name:'
			}
		],
		actions: [
			{
				type: 'addMany',
				destination: '{{ pwd (dashCase name) }}',
				base: 'plop-templates/component',
				templateFiles: 'plop-templates/component/*'
			}
		]
	});
};
