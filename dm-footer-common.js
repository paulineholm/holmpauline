let dmfooter = document.querySelector(".dm-footer");

//

/*let dmFooterPages = [
    ['2020 © Handcrafted with love by'],
    ['Paulina Sara Bryzgiel'],
    ['| tel. +45 53 80 92 24 |'],
    ['paulinabryzgiel@gmail.com', 'mailto:paulinabryzgiel@gmail.com'],
    ['fb', 'https://www.facebook.com/paulina.bryzgiel/'],
    ['ig', 'https://instagram.com/bryzgielinka/'],
    ['in', 'https:/www.linkedin.com/in/paulinasarabryzgiel/'],
    ['gh', '#']
];*/

function dmGenerateFooter(){
    let footer = document.querySelector(".footer");
    let dmHTML = '<p>2020 © Handcrafted with love by Paulina Sara Bryzgiel |<a href="mailto:paulinabryzgiel@gmail.com"> paulinabryzgiel@gmail.com</a><br>'

    dmHTML += '<a href="https://www.facebook.com/paulina.bryzgiel/"> fb </a>|<a href="https://instagram.com/bryzgielinka/"> ig </a>|<a href="https:/www.linkedin.com/in/paulinasarabryzgiel/"> in </a>|<a href="https:/github.com/paulinebryzgiel/"> gh </a>';

    dmHTML += '</p>';

    footer.innerHTML = dmHTML;

}

dmGenerateFooter();

/* let footer = document.getElementsByClassName("dm-footer");
    let dmHTML = `<ul class='ul-footer'>`;

    dmFooterPages.forEach(function(element){
    
    dmHTML += `
    <li><a href='${element[1]}' class=''>${element[0]}</a></li>`;

    //dmLinkClass = '';
    });

    dmHTML += `</ul>`;
    dmfooter.innerHTML = dmHTML; */