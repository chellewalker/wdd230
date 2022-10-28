document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll("img.lazy");    
    var lazyTimeout;
    
    function lazyload () {
      if(lazyTimeout) {
        clearTimeout(lazyTimeout);
      }    
      
      lazyTimeout = setTimeout(function() {
          var scroll = window.pageYOffset;
          lazyImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scroll)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });