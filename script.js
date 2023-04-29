const dropdowns = document.querySelectorAll('.dropDown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });


    options.forEach(option => {

        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});

//image gallery
function RPgalleryPicker(smallImg){
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
    fullImg.title = smallImg.title;
};
function MundyGalleryPicker(smallImg){
    var fullImg = document.getElementById("imageBox1");
    fullImg.src = smallImg.src;
    fullImg.title = smallImg.title;
};
function RAGGalleryPicker(smallImg){
    var fullImg = document.getElementById("imageBox2");
    fullImg.src = smallImg.src;
};



//misc slider
//Get elements from the DOM
const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
//const link = document.querySelector('.');

//data for the image slider
const images = [
    "Artinstituteofchicago.jpg",
    "CentennialWheelchicago.webp",
    "Chicagomuseumofice-cream.jpg",
    "Dusablemuseum.webp",
    "LoyolaUniversityMuseumofArt.jpg",
    "MuseumofContemporaryChicago.jpg",
    "Museumofcontemporaryphotography.jpg",
    "MuseumofMexicanart.webp",
    "Nationalveteransartmuseum.jpg",
    "Thefieldmuseum.jpg"
];

const headings = [
    "Art Institute of Chicago",
    "Centennial Wheel chicago",
    "Chicago Museum of Ice Cream",
    "Dusable Museum",
    "Loyola University Museum of Art",
    "Museum of Contemporary Arts Chicago",
    "Museum of Contemporary Photography",
    "Museum of Mexican Art",
    "National Veterans Art Museum",
    "The field Museum"
];

const descriptions = [
    "Discover paintings, drawings, sculpture, and design spanning the ancient to the contemporary world",
    "Soar to heights of nearly 200 feet on the iconic Centennial Wheel",
    "An ice cream fantasy of endless treats and playtime for all ages",
    "The Nation's Oldest Independent African American Museum",
    "Your Loyola Experience starts here",
    "Where new ideas are shown and tested",
    "Boldly presents thought-provoking photography through groundbreaking exhibitions and programming",
    "Recreation of the legacy left behind by Native cultures before Spanish colonizers arrived to present-day Mexico",
    "The impact of war through the collection, preservation and exhibition of art by military veterans",
    "Connects all of us to the natural world and the human story"
];

const links = [
    "https://www.artic.edu",
    "https://navypier.org/location/centennial-wheel/",
    "https://www.museumoficecream.com",
    "https://www.dusablemuseum.org",
    "https://www.luc.edu",
    "https://visit.mcachicago.org",
    "https://www.mocp.org",
    "https://nationalmuseumofmexicanart.org",
    "https://www.nvam.org",
    "https://www.fieldmuseum.org"
];

let id = 0;

//The slider function
function slide(id){
    //set background image
    slider.style.backgroundImage = `url(Misc/${images[id]})`;
    //change heading
    heading.innerHTML = `<a href="${links[id]}" target="_blank">${headings[id]}</a>}`;
    //change description
    description.innerText = descriptions[id];
}
//click arrows
arrLeft.addEventListener('click', () => {
    //decrement image id
    id--;
    if(id < 0){
        id = images.length - 1;
    }
    slide(id);
});
arrRight.addEventListener('click', () => {
    //increment image id
    id++;
    if(id > images.length - 1){
        id = 0;
    }
    slide(id);
});