function hero() {
    const width  = window.innerWidth;

    // Small
    if (width <= 840) {
        document.write('<div class="container">')
        document.write('<source media="min-width:600px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">Adventure Awaits...</div>')
        document.write('</div>')
    }
    // Large
    else if (width >= 1280) {
        document.write('<div class="container">')
        document.write('<source media="min-width:1000px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">Adventure Awaits...</div>')
        document.write('</div>')
     }
    // Medium
    else {
        document.write('<div class="container">')
        document.write('<source media="min-width:850px" srcset="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">Adventure Awaits...</div>')
        document.write('</div>')
        }
}