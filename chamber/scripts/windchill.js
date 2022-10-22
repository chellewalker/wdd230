function windchill() {
    let temperature = 40;
    let wind = 4.9;
    let chill = (35.74+(0.6215*temperature)-(35.75*(wind**0.16))+(0.4275*temperature*(wind**0.16))).toFixed(2);

    document.write('<p style="font-family: Times, serif; font-size: small;">Wind Speed: '+wind+' km/h</p>');

    if (temperature<=50) {
        if (wind>3.0) {
            document.write('<p style="font-family: Times, serif; font-size: small;">Wind Chill: '+chill+'</p>');
        }
    }
    else {
        document.write('<p style="font-family: Times, serif; font-size: small;">N/A</p>');
    }
}