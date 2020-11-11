
// Tilføjer logo til headeren

window.onload = function logoElement(){
    let logo = document.createElement("img");
    logo.setAttribute("src", "../img/logopurepinkbg.png");
    logo.setAttribute("class", "logo");

    let header = document.getElementById("header");
    header.appendChild(logo);

    header.innerHTML += "<a href='https:/www.linkedin.com/in/paulinasarabryzgiel/' class='personal-link'>Paulina Sara 👩🏻‍💻</a>"

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
    search.setAttribute("onclick", "openSearch()");

    
    header.appendChild(search);

    search.addEventListener("click", function(){
        document.getElementById("searchOverlay").style.display = "block";
    });

    closeBtn.addEventListener("click", function(){
        document.getElementById("searchOverlay").style.display = "none";
    });
/*
    // Sidebar

    let openSideBtn = document.getElementById("sideOverOpenBtn");
    let closeSideBtn = document.getElementById("sideOverCloseBtn");

    openSideBtn.addEventListener("click",

    function(){
        document.getElementById("sideOverlay").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    closeSideBtn.addEventListener("click",
    function(){
        document.getElementById("sideOverlay").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
    }); */
   
}
