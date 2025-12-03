let productimg = document.getElementById('memo-img');
let btn = document.querySelectorAll('.btn');

let images = [
    "/Images/About-images/Memories-img-2.jpg",
    "/Images/About-images/Memories-img-3.jpg",
    "/Images/About-images/Memories-img-4.jpg"
];

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        productimg.src = images[index];
    });
});
