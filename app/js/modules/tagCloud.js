import WordCloud from 'wordcloud';

export default function tagsCloud() {

	document.querySelector('.js--cloud').width = 330;
	document.querySelector('.js--cloud').height = 310;

	// canvas.width  = div.offsetWidth;

	WordCloud(document.querySelector('.js--cloud'), {
		list: [
			['foo', 14],
			['bar', 16],
			['mass', 10],
			['surveillance', 15],
			['internet', 16],
			['privacy', 20],
			['china', 17],
			['whatsapp', 20],
			['police', 18],
			['dna', 30],
			['vpn', 25],
			['kingdom', 19],
			['Facebook', 20],
			['google', 20],
			['neutrality', 21],
			['copyright', 30],
			['germany', 22],
			['bitcoin', 20],
			['history', 23],
			['foo', 14],
			['bar', 16],
			['mass', 10],
			['surveillance', 15],
			['internet', 16],
			['privacy', 20],
			['china', 17],
			['whatsapp', 20],
			['police', 18],
			['dna', 30],
			['vpn', 25],
			['kingdom', 19],
			['Facebook', 20],
			['google', 20],
			['neutrality', 21],
			['copyright', 30],
			['germany', 22],
			['bitcoin', 20],
			['history', 23],
			['whatsapp', 20],
			['police', 18],
			['dna', 30],
			['vpn', 25],
			['kingdom', 19],
			['Facebook', 20],
			['google', 20],
			['neutrality', 21],
			['copyright', 30],
			['germany', 22],
			['bitcoin', 20],
			['history', 23],
			['foo', 14],
			['bar', 16],
			['mass', 10],
			['surveillance', 15],
			['internet', 16],
			['privacy', 20],
			['china', 17],
			['whatsapp', 20],
			['police', 18],
			['dna', 30],
			['vpn', 25],
			['kingdom', 19],
			['Facebook', 20],
			['google', 20],
			['neutrality', 21],
			['copyright', 30],
			['germany', 22],
			['bitcoin', 20],
			['history', 23]
		],
		minSize: 14,
		// gridSize: 5,
		fontFamily: 'Roboto',
		// gridSize: Math.round(16 * document.querySelector('.js--cloud').offsetWidth / 1024),
		// weightFactor: function (size) {
		// 	return Math.pow(size, 2.3) * document.querySelector('.js--cloud').offsetWidth / 1024;
		// },
		// fontFamily: 'Times, serif',
		color: function (word, weight) {
			return (weight === 14) ? 'rgba(34, 37, 46, 1)' : 'rgba(102, 103, 103, 1)';
		},
		rotateRatio: 0,
		rotationSteps: 2,
		shrinkToFit: true
		// backgroundColor: '#ffe0e0'
	})
}
