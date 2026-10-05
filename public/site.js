// New Gallery
var exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-gallery-image')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = exampleModal.querySelector('.modal-title')
        var modalBodyInput = exampleModal.querySelector('.modal-body input')
        var modalBodyImage = exampleModal.querySelector('.modal-body img')
        var modalBody = exampleModal.querySelector('.modal-body')
    
        // modalTitle.textContent = 'New message to ' + recipient
        //modalBodyInput.value = recipient
        modalBodyImage.src = recipient;
        modalBody.setAttribute('data-bs-current', recipient);
    })

}

var nextGalleryItemButton = document.getElementById('nextGalleryItem');
if (nextGalleryItemButton) {

    nextGalleryItemButton.addEventListener('click', function (event) {
        var galleryItems = document.querySelectorAll('button[data-bs-gallery-image]');
        var modalTitle = exampleModal.querySelector('.modal-title')
        var modalBodyInput = exampleModal.querySelector('.modal-body input')
        var modalBodyImage = exampleModal.querySelector('.modal-body img')
        var modalBody = exampleModal.querySelector('.modal-body');
        var current = modalBody.getAttribute('data-bs-current');
        var nextIndex = 0;
        galleryItems.forEach(function (galleryItem, index) {
            // find the next index
            console.log(index, galleryItem.getAttribute('data-bs-gallery-image'))
            if (galleryItem.getAttribute('data-bs-gallery-image') == current) {
                if (index == galleryItems.length - 1) {
                    nextIndex = 0;
                } else {
                    nextIndex = index + 1;
                }
            }
        });

        var next = galleryItems[nextIndex].getAttribute('data-bs-gallery-image');
        // modalTitle.textContent = 'New message to ' + next
        modalBodyImage.src = next;
        console.log(modalBodyImage);
        modalBody.setAttribute('data-bs-current', next);
        // console.log('galleryItems', galleryItems);
    })
}

// articles
var recentModal = document.getElementById('recentModal')
if (recentModal) {
    recentModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var article = button.getAttribute('data-bs-whatever');
        var galleryItems = document.querySelectorAll('input[data-bs-article="article' + article + '"]');
        
        // Update the modal's content.
        var modalBodyImage = recentModal.querySelector('.modal-body img')
        var modalBody = recentModal.querySelector('.modal-body')

        modalBodyImage.src = galleryItems[0].value;
        modalBody.setAttribute('data-bs-current', 0);
        modalBody.setAttribute('data-bs-article', article);
    })
}


var nextArticleImageButton = document.getElementById('nextArticleImageButton');
if (nextArticleImageButton) {

    nextArticleImageButton.addEventListener('click', function (event) {
        var modalBodyImage = recentModal.querySelector('.modal-body img')
        var modalBody = recentModal.querySelector('.modal-body');
        var current = modalBody.getAttribute('data-bs-current');
        var article = modalBody.getAttribute('data-bs-article');
        var galleryItems = document.querySelectorAll('input[data-bs-article="article' + article + '"]');
        var nextIndex = parseInt(current) + 1;
        if (nextIndex >= galleryItems.length) {
            nextIndex = 0;
        }
        modalBodyImage.src = galleryItems[nextIndex].value;
        modalBody.setAttribute('data-bs-current', nextIndex);
    })
}