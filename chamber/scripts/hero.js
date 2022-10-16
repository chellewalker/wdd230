function hero() {
    const width  = window.innerWidth;

    // Small
    if (width <= 840) {
        document.write('<div class="container">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-right">small</div>')
        document.write('</div>')
    }
    // Large
    else if (width >= 1280) {
        document.write('<div class="container">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-right">large</div>')
        document.write('</div>')
     }
    // Medium
    else {
        document.write('<div class="container">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-right">medium</div>')
        document.write('</div>')
        }
}