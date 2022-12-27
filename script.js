const images = ["DTA5Off.jpg", "MTB_122722_1217.jpg", "ThreeChord_122722_1105.jpg","WestHerr_122722_1216.jpg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
	startCarousel();
}, 5000);
var index = 1;

startCarousel = () => {
	carousel.style.backgroundImage = `url(${images[index++]})`;
	carousel.classList.remove("fade");
	void carousel.offsetwidth;
	carousel.classList.add("fade");
	if(index > images.length - 1) index = 0;
}
