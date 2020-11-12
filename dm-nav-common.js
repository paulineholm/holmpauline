
// Tilføjer logo til headeren

window.onload = function logoElement(){
    let logo = document.createElement("img");
    logo.setAttribute("src", "../img/logopurepinkbg.png");
    logo.setAttribute("class", "logo");

    let header = document.getElementById("header");
    header.appendChild(logo);

    header.innerHTML += "<a href='https:/www.linkedin.com/in/paulineholm/' class='personal-link'>Pauline Holm 👩🏻‍💻</a>"

    // Menu 

    let dmClass = ".dm-nav";

    let dmPages = [
    ["Home",   "../index.html"],
    ["About",     "../about/index.html"],
    ["Contact", "../contact/index.html"],
    ]

    let dmParent = document.querySelector(dmClass);

    let dmHTML = `<ul class="dm-menu">`;
    let dmUrl = window.location.pathname;
    let dmFileName = dmUrl.substring(dmUrl.lastIndexOf("/")+1);

    dmPages.forEach(function(element){
        let dmLinkClass = "";
        if(dmFileName == element[1]){
            dmLinkClass = "selected";
        }
        dmHTML += `           
            <li class="dm-menu-item">
                <a href="${element[1]}" class="${dmLinkClass}">${element[0]}</a>
            </li>
        `;
    });

    dmHTML += `</ul>`;

    dmParent.innerHTML = dmHTML;


    // Søgebar

    let search = document.createElement("img");
    let closeBtn = document.getElementById("closesrchbtn");
    search.setAttribute("src", "../img/searchicon.png");
    search.setAttribute("class", "search");
    //search.setAttribute("onclick", "openSearch()");

    
    header.appendChild(search);

    search.addEventListener("click", function(){
        document.getElementById("searchOverlay").style.display = "block";
    });

    closeBtn.addEventListener("click", function(){
        document.getElementById("searchOverlay").style.display = "none";
    });

    // Sidebar

    let sideOverlay = document.getElementById("sideOverlay");
    let sideBar = document.getElementById("sideBar");
    let bodyBgStyle = document.body.style.backgroundColor;

    let openSidebtn = document.createElement("img");
    //let closeSideBtn = document.getElementById("closesrchbtn");
    openSidebtn.setAttribute("src", "../img/star.png");
    openSidebtn.setAttribute("class", "sideopenbtn");
    openSidebtn.setAttribute("id", "sideOverOpenBtn");

    
    header.appendChild(openSidebtn);
    
    function openNav() {
        sideOverlay.style.width = "100%";
        sideBar.style.width= "350px";

        //document.querySelector(".main").style.marginRight = "350px";
        bodyBgStyle = "rgba(0,0,0,0.4)";
    }

    openSidebtn.addEventListener("click", function(){
    openNav();
    });

    let closeSidebtn = document.getElementById("closeoverbtn");
      
    function closeNav() {
        sideOverlay.style.width = "0";
        sideBar.style.width= "0";
        bodyBgStyle = "white";
      }

    closeSidebtn.addEventListener("click",function(){
        closeNav();
    });

    // Media queries dm-menu

    let burgerMenu = document.createElement("img");
    burgerMenu.setAttribute("src", "../img/burgermenu.png");
    burgerMenu.setAttribute("class", "burgermenu");

    let menuMobil = document.querySelector(".mobile-menu-overlay");
    let mmCloseBtn = document.querySelector(".dmoverclosebtn");
    //search.setAttribute("onclick", "openSearch()");

    
    header.appendChild(burgerMenu);

    burgerMenu.addEventListener("click", function(){
        menuMobil.style.display = "block";
        mmCloseBtn.addEventListener("click", function(){
            menuMobil.style.display = "none";
        });
    });



}
