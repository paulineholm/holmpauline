let entries = document.querySelectorAll('.entry');

entries.forEach(function(element){
    element.addEventListener('click', clickHandler)
    
});

function clickHandler(event){
    if(event.target.className == 'pc-more'){
        this.classList.toggle('exp');
    }
}