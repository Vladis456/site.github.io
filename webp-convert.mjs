import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(['src/img/content/*.{jpg,png}'], {
	destination: 'src/img/content',
	plugins: [
		imageminWebp({quality: 70}),
	]
});

console.log('Конвертация в webp завершена')