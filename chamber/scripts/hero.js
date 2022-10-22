function hero() {
    const width  = window.innerWidth;

    // Small
    if (width <= 840) {
        document.write('<div class="container">')
        document.write('<source media="min-width:600px" srcset="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">small</div>')
        document.write('</div>')
    }
    // Large
    else if (width >= 1280) {
        document.write('<div class="container">')
        document.write('<source media="min-width:1000px" srcset="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">large</div>')
        document.write('</div>')
     }
    // Medium
    else {
        document.write('<div class="container">')
        document.write('<source media="min-width:850px" srcset="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<img src="images/wdd230-org.webp" alt="golfing-image" class="center">')
        document.write('<div class="bottom-left">medium</div>')
        document.write('</div>')
        }
}