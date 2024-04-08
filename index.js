document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoPlayer');
    var image = document.getElementById('imageDisplay');
    var button = document.getElementById('butt');
    var charName = document.getElementById('charName');
    var charRarity = document.getElementById('charRarity');
    
    video.addEventListener('ended', function () {
        // Video has ended, show the image
        image.style.display = 'block';
        video.style.display = "none";
        setTimeout(function () {
            image.style.opacity = '1';
            button.style.opacity = '1';
            charName.style.opacity = '1';
            charRarity.style.opacity = '1';
        }, 100);
    });
});

var imageNames = [
    ["bailu.webp","⭐⭐⭐⭐⭐", "Bailu"], 
    ["kafka.webp","⭐⭐⭐⭐⭐","Kafka"], 
    ["welt.webp","⭐⭐⭐⭐⭐","Welt"], 
    ["gepard.webp", "⭐⭐⭐⭐⭐","Gepard"],
    ["luka.webp", "⭐⭐⭐⭐","Luka"], 
    ["sampo.webp","⭐⭐⭐⭐","Sampo"], 
    ["serval.webp", "⭐⭐⭐⭐","Serval"], 
    ["guinaifen.webp", "⭐⭐⭐⭐","Guinaifen"],
    ["a-secret-vow.jpg", "⭐⭐⭐⭐","A secret vow"],
    ["eyes-of-the-prey.webp", "⭐⭐⭐⭐","Eyes of the prey"],
];
var basePath = "/Gacha/Chars/"; // Corrected basePath assignment

function displayMedia(index) {
    document.querySelector('.content').style.opacity = '0';
    document.querySelector('.content-overlay').style.opacity = '1';
    document.querySelector('.content-overlay').style.pointerEvents = 'auto'; // Making overlay clickable
    var imageName = imageNames[index];
    var imagePath = basePath + imageName[0];

    // Display image
    document.getElementById("imageDisplay").src = imagePath;

    // Display character details
    document.getElementById("charName").textContent = imageName[2];
    document.getElementById("charRarity").textContent = imageName[1];

    // Display video based on index
    if (index == 0 || index == 1 || index == 2 || index == 3)  {
        document.getElementById("videoPlayer").src = "special.mp4";
    } else {
        document.getElementById("videoPlayer").src = "normal.mp4";
    }
}

// Example usage
function getRandomIndex() {
    return Math.floor(Math.random() * imageNames.length);
}

// Example usage: Display media for a random index
var randomIndex = getRandomIndex();
displayMedia(randomIndex);
