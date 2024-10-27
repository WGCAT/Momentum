const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// html src요소 생성
bgImage.src = `img/${chosenImage}`;

// appendChild = body에 html 추가
document.body.appendChild(bgImage);