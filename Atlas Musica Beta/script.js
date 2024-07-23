

function scrollLefta() {
    document.getElementById('photoGallery').scrollBy({
        top: 0,
        left: -320, 
        behavior: 'auto'
    });
}

function scrollRight() {
    document.getElementById('photoGallery').scrollBy({
        top: 0,
        left: 320, 
        behavior: 'auto'
    });
}

function scrollLeft2() {
    document.getElementById('photoGallery2').scrollBy({
        top: 0,
        left: -320, 
        behavior: 'auto'
    });
}

function scrollRight2() {
    document.getElementById('photoGallery2').scrollBy({
        top: 0,
        left: 320, 
        behavior: 'auto'
    });
}

function scrollLefta() {
    document.getElementById('videoGallery').scrollBy({
        top: 0,
        left: -300,
        behavior: 'auto'
    });
}

function scrollRight() {
    document.getElementById('videoGallery').scrollBy({
        top: 0,
        left: 300,
        behavior: 'auto'
    });
}

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].caption;

    // Add event listener for the Escape key to close the modal
    document.addEventListener('keydown', closeModalOnEscape);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";

    // Remove event listener when modal is closed
    document.removeEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

function previousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].caption;
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].caption;
}