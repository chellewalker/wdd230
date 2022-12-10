function hero() {
    const width  = window.innerWidth;

    // Small
    if (width <= 840) {
        document.write('<div class="container">')
        document.write('<source media="min-width:800px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/smoothie.webp" alt="smoothie-image" class="center">')
        document.write('</div>')
    }
    // Large
    else if (width >= 1280) {
        document.write('<div class="container">')
        document.write('<source media="min-width:1200px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/smoothie.webp" alt="smoothie-image" class="center">')
        document.write('</div>')
     }
    // Medium
    else {
        document.write('<div class="container">')
        document.write('<source media="min-width:1000px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/smoothie.webp" alt="smoothie-image" class="center">')
        document.write('</div>')
        }
}