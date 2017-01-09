var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en',
    xhttp = new XMLHttpRequest();


function newQuote() {
    if (xhttp) {
        xhttp.open('GET', url, true);
        
    }
}

