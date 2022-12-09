function lvisit() {
    const lastVisit = Math.round(localStorage.getItem('dayssince'));
    const now = Math.round(Date.now());
    if (lastVisit) {
        const sinceLastTime = Math.ceil((parseInt(lastVisit) - now) / 150);
        document.write("It's been " + sinceLastTime + " day(s) since your last visit.");
}
    else {
        document.write("It's your first time here!");
}}