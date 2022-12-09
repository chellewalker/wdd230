function lupdate() {
    var text = "Last Updated: " + document.lastModified;
    var currentTime = new Date();
    var year = currentTime.getFullYear();

    document.write('<p style="font-family: Times, serif; font-size: small;"> © '+year+' | Marshall Warner | WDD 230 Project | '+text+'</p>');
}