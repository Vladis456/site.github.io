// Это функция для запрето большого вызова функций
const debounce = (fn, msec) => {
	let lastCall = 0;
	let lastCallTimer = 0;

	return (...arg) => {
		const prevCall = lastCall;
		lastCall = Date.now();

		if (prevCall && (lastCall - prevCall) < msec) {
			clearTimeout(lastCallTimer);
		}

		lastCallTimer = setTimeout(()=> fn(...arg), msec);
	}
}

const createArrow = (className = 'arrow-up') => {
	const button = document.createElement('button');
	button.innerHTML = `
		<svg class="${className}__svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M7.99998 2.95001C8.08887 2.95001 8.17221 2.96379 8.24998 2.99134C8.32776 3.0189 8.39998 3.06623 8.46665 3.13334L12.8667 7.53334C13 7.66668 13.0667 7.8249 13.0667 8.00801C13.0667 8.19112 13 8.34957 12.8667 8.48334C12.7333 8.61668 12.5778 8.68334 12.4 8.68334C12.2222 8.68334 12.0667 8.61668 11.9333 8.48334L8.66665 5.21668V12.6833C8.66665 12.8722 8.60265 13.0278 8.47465 13.15C8.34665 13.2722 8.18843 13.3333 7.99998 13.3333C7.8111 13.3333 7.65265 13.2693 7.52465 13.1413C7.39665 13.0133 7.33287 12.8551 7.33332 12.6667V5.21668L4.06665 8.48334C3.93332 8.61668 3.77776 8.68334 3.59998 8.68334C3.42221 8.68334 3.26665 8.61668 3.13332 8.48334C2.99998 8.35001 2.93332 8.19157 2.93332 8.00801C2.93332 7.82445 2.99998 7.66623 3.13332 7.53334L7.53332 3.13334C7.59998 3.06668 7.67221 3.01934 7.74998 2.99134C7.82776 2.96334 7.9111 2.94956 7.99998 2.95001Z"/>
		</svg>
	`;

	button.classList.add(className);

	const style = document.createElement('style');

	style.textContent = `
		.${className} {
			position: fixed;
			z-index: 999;
			bottom: 30px;
			right: 30px;
			cursor: pointer;
			border: none;
			background-color: #ffffff;
			box-shadow: 0px 4px 4px rgba(49, 33, 1, 0.15);
			border-radius: 50%;
			width: 50px;
			height: 50px;
			justify-content: center;
			align-items: center;
			display: none;
			color: #000000;
			transition: color .3s ease-in-out; background-color .3s ease-in-out;		
		}
		.${className}:hover {
			color: #ffffff;
			background-color: #000000;
		}
	`;

	document?.head.prepend(style)

	button.addEventListener('click', ()=> {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
	
	return button
}

export const initScrollTopButton = (className, hover) => {
	const arrow = createArrow(className, hover);

	document?.body.append(arrow);

	const showElemScrollPosition = () => {
		const scrollPosition = window.scrollY || document.documentElement.scrollTop;
		arrow.style.display = scrollPosition > window.innerHeight / 2 ? 'flex' : 'none';
	}


	window.addEventListener('scroll', debounce(showElemScrollPosition, 100));
}