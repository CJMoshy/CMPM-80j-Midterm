// Get the images container and popup container
const imgsContainer: HTMLElement | null = document.getElementById('img-container');
const popupContainer: HTMLElement | null = document.getElementById('popup-container');
const popupImage: HTMLImageElement | null = document.getElementById('popup-img') as HTMLImageElement;
const imageInfo: HTMLElement | null = document.getElementById('image-info');
const closeBtn: HTMLElement | null = document.getElementById('closeBtn');

// Add event listener to each image
if (imgsContainer) {
    imgsContainer.querySelectorAll('.popup-trigger').forEach((img: Element) => {
        img.addEventListener('click', () => {
            if (popupImage && imageInfo && popupContainer) {
                // Set the source of the popup image and other info
                popupImage.src = (img as HTMLImageElement).src;
                if (imageInfo) {
                    // Retrieve unique information from data attribute
                    const info = (img as HTMLImageElement).getAttribute('data-info');
                    imageInfo.textContent = `More info: ${info}`;
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
