"use strict";
// Get the images container and popup container
const imgsContainer = document.getElementById('img-container');
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-img');
const imageInfo = document.getElementById('image-info');
const closeBtn = document.getElementById('closeBtn');
// Add event listener to each image
if (imgsContainer) {
    imgsContainer.querySelectorAll('.popup-trigger').forEach((img) => {
        img.addEventListener('click', () => {
            if (popupImage && imageInfo && popupContainer) {
                // Set the source of the popup image and other info
                popupImage.src = img.src;
                if (imageInfo) {
                    // Retrieve unique information from data attribute
                    const info = img.getAttribute('info');
                    imageInfo.textContent =  `${info}`;
                }
                // Show the popup container
                if (popupContainer) {
                    popupContainer.style.display = 'block';
                }
            }
        });
    });
}
// Add event listener to the close button
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        // Hide the popup container
        if (popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
}
//# sourceMappingURL=index.js.map