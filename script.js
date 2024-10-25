let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const progressBar = document.getElementById('progress');
let progressInterval;

// const image=document.getElementsByClassName("carousel-images");
// const example=document.createElement("img");
// images.append(example);
// console.log("created");
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });


    progressBar.style.width = '0%';
    // clearInterval(progressInterval);
    // startProgress();
}

// function startProgress() {
//     let width = 0;
//     progressInterval = setInterval(() => {
//         width += 1; 
//         progressBar.style.width = width + '%';

     
//         if (width >= 100) {
//             clearInterval(progressInterval);
//             currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
//             showImage(currentIndex);
//         }
//     }, 50); 
// }

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// startProgress();
