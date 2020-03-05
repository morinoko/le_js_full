function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Switch 'current' class
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Swap image
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Swap alt text
      let title = thumbnail.dataset.title;
      mainImage.setAttribute("alt", title);
    });
  });
}