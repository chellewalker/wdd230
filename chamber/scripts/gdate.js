function gdate() {
    var currentTime = new Date();

    var year = currentTime.getFullYear();

    var monthn = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    var day = currentTime.getDate();

    var dayn = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    document.write(dayn[currentTime.getDay()]+', '+day+' '+monthn[currentTime.getMonth()]+' '+year);
}