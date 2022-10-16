function hero() {
    const width  = window.innerWidth;

    // Small
    if (width <= 840) {
    document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
    document.write('small')
    }
    // Large
    else if (width >= 1280) {
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('large')
     }
    // Medium
    else if (width > 840) {
        if (width < 1280) {
        document.write('<img src="images/golf.webp" alt="golfing-image" class="center">')
        document.write('medium')
        }}
}