//Percorsi delle immagini che voglio inserire
imagesPath = [
    "img/03.webp",
    "img/01.webp",
    "img/02.webp",
    "img/04.webp",
    "img/05.webp",
];

//Inserisco le immagini nel DOM
let immaginiDaInserire = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    immaginiDaInserire += `<img src="${percorsoImmagine}">`;
}
document.getElementById("carousel-wrapper").innerHTML = immaginiDaInserire;

//Imposto la prima immagine come attiva
let currentImg = 0;
const images = document.querySelectorAll("#carousel-wrapper img");
images[currentImg].classList.add("active");

//Gestisco i pulsanti
document.getElementById("nextBtn").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
});

document.getElementById("prevBtn").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});

//Versione alternativa di "avanti", ma con ciclo for inutile
// document.getElementById("altroNextBtn").addEventListener("click", function () {
//     console.log("avanti");
//     currentImg++;

//     for (let i = 0; i < images.length; i++) {
//         const image = images[i];

//         if (i == currentImg) {
//             image.classList.add("active");
//         } else {
//             image.classList.remove("active");
//         }
//     }
// });