module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js,svg,ttf}'
	],
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js',
};