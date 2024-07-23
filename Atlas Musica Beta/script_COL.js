document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                this.textContent = this.getAttribute('data-original-text');
            } else {
                content.style.display = "block";
                if (this.getAttribute('data-original-text') === "► Flyer Gallery") {
                    this.textContent = "▼ Flyer Gallery";
                } else if (this.getAttribute('data-original-text') === "► Show History") {
                    this.textContent = "▼ Show History";
                } else {
                    this.textContent = "▼ Photo Gallery";
                }
            }
        });
    }

    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var thumbnails = document.getElementsByClassName("thumbnail");
    var currentIndex;

    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = Array.prototype.indexOf.call(thumbnails, this);
        });
    }

    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when the Escape key is pressed
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    function showImage(index) {
        if (index >= thumbnails.length) {
            index = 0;
        } else if (index < 0) {
            index = thumbnails.length - 1;
        }
        modalImg.src = thumbnails[index].src;
        captionText.innerHTML = thumbnails[index].alt;
        currentIndex = index;
    }

    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];

    prev.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    next.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    // Allow keyboard navigation in the modal
    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (event.key === "ArrowRight") {
                showImage(currentIndex + 1);
            }
        }
    });
});
