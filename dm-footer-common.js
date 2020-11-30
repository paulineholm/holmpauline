let dmfooter = document.querySelector(".dm-footer");

function dmGenerateFooter(){
    let footer = document.querySelector(".footer");
    let dmHTML = '<p>2020 © Handcrafted with love by Pauline Holm |<a href="mailto:frk.paulineholm@gmail.com"> frk.paulineholm@gmail.com</a><br>'

    dmHTML += '<a href="https://www.facebook.com/pauline.holm.pau/"> fb </a>|<a href="https://instagram.com/frk.holminka/"> ig </a>|<a href="https://linkedin.com/in/paulineholm/"> in </a>|<a href=" https://github.com/paulineholm/"> gh </a>';

    dmHTML += '</p>';

    footer.innerHTML = dmHTML;

}

dmGenerateFooter();