let dmfooter = document.querySelector(".dm-footer");

function dmGenerateFooter(){
    let footer = document.querySelector(".footer");
    let dmHTML = '<p>2020 © Handcrafted with love by Pauline Holm |<a href="mailto:paulinabryzgiel@gmail.com"> paulinabryzgiel@gmail.com</a><br>'

    dmHTML += '<a href="https://www.facebook.com/paulina.bryzgiel/"> fb </a>|<a href="https://instagram.com/bryzgielinka/"> ig </a>|<a href="https:/www.linkedin.com/in/paulineholm/"> in </a>|<a href="https:/github.com/paulinebryzgiel/"> gh </a>';

    dmHTML += '</p>';

    footer.innerHTML = dmHTML;

}

dmGenerateFooter();