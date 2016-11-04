/*Getting the data from mashape API*/

function getQuote(){
    $.ajax({
        headers: {
            'X-Mashape-Key': 'YA1YlFUqzfmshrFQ4tU39TknJ6l2p1ASZiSjsn9MzW4WwXXXTr',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        method: 'POST',
        success: function (response){
            var dataj=JSON.parse(response);
            var quoteText=dataj.quote;
            var author=dataj.author;

            document.getElementById("quote").innerHTML=quoteText;
            document.getElementById("author").innerHTML=author;
        }
    });
}


function tweet (){
    var quote=document.getElementById("quote").innerHTML;
    var author=document.getElementById("author").innerHTML;
    var link="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author);

    window.open(link,'_blank','height=350,width=650');
}


$(document).ready (function (){
    $('#generateQuote').click(function() {getQuote()});
    $('#tweet').click(function() {tweet()});

})
