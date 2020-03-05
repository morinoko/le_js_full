function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let galleryInfo = document.querySelector("#gallery-info");
  let title = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // Switch 'current' class
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Swap image
      mainImage.setAttribute("src", newImageSrc);

      // Swap alt text and image info
      let titleText = thumbnail.dataset.title;
      mainImage.setAttribute("alt", titleText);
      title.innerHTML = titleText;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}