const button = document.querySelector('.main-header__btn');
const popup = document.querySelector('.wraper-popap');
const closeButton = document.querySelector('.popup-close-img');

// burger menu
const menu = document.querySelector('.main-nav');
const burgerBtn = document.querySelector('.nav-burger-icon');

burgerBtn.addEventListener('click', showHideMenu);

function showHideMenu() {
	menu.classList.toggle('hide');
}
// burger menu
const solutionBtn = document.querySelector('.btn-click');
const solutionPopup = document.querySelector('.wrap-solution-popup');
const closeSolutionBtn = document.querySelector('.solution-close-img');


button.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
solutionBtn.addEventListener('click', openSolutionPopup);
closeSolutionBtn.addEventListener('click', closeSolutionPopup);




function openPopup() {
	popup.style.display = "block";
}
function closePopup() {
	popup.style.display = "none";
}

function openSolutionPopup() {
	solutionPopup.style.display = "block";
}

function closeSolutionPopup() {
	solutionPopup.style.display = "none";
}

const slidesContainer = document.querySelector("#slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");

nextButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});