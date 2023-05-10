export const videoBackgroundInit = () => {
	const videoBG = document.querySelectorAll('.video-bg');
	videoBG.forEach(element => {
  	element.innerHTML = `
  	<source src="video/video.webm" type="video/webm">
  	<source src="video/video.mp4" type="video/mp4">`
});
}
