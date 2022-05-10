import getUserData from '../services/getUserData';


export default function informer(infSelector) {
	const informer = document.querySelector(infSelector);
	const header = document.querySelector('.header--js');

	const closeBtn = informer.querySelector('.informer-close--js');

	const ipText = informer.querySelector('.user-ip--js');
	const providerText = informer.querySelector('.user-provider--js');


	informer.classList.remove('visually-hidden');
	header.style.marginTop = `${informer.clientHeight}px`;

	closeBtn.addEventListener('click', () => {
		informer.classList.add('hidden');
		header.style.marginTop = '0';
	})

	getUserData('https://ipinfo.io?token=9b81ea5819f5d3')
	.then(({ip, org}) => {
		ipText.textContent = ip;
		providerText.textContent = org;
	}).catch((err) => {
		ipText.textContent = `Not detected: ${err}`;
		providerText.textContent = `Not detected: ${err}`;
	})
}
