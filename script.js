const images = ["images/MainAds/DTA5Off.jpg", "images/MainAds/MTB_122722_1217.jpg", "images/MainAds/ThreeChord_122722_1105.jpg","images/MainAds/WestHerr_122722_1216.jpg"];
const carousel =  document.querySelector(".carousel");
const interval = setInterval(function() {
	startCarousel();
}, 30000);
var index = 1;

startCarousel = () => {
	carousel.style.backgroundImage = `url(${images[index++]})`;
	carousel.classList.remove("fade");
	void carousel.offsetwidth;
	carousel.classList.add("fade");
	if(index > images.length - 1) index = 0;
}