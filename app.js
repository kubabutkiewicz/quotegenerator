const btn = document.querySelector('.send');
btn.addEventListener("click", newQuote);

function newQuote(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://talaikis.com/api/quotes/random/' , true);
    xhr.onload = function(){
        if(this.status === 200){
            let output = JSON.parse(this.responseText);
            document.querySelector('.text').innerHTML = output.quote;
            document.querySelector('.author').innerHTML = output.author;
        }

    };
    xhr.send();
}