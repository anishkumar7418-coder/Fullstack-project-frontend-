//index page why choose us

var p1 = document.getElementById("sp1")
var p2 = document.getElementById("sp2")
var p3 = document.getElementById("sp3")


var section1 = document.getElementById("section1")
if (section1 && p1) {
    section1.addEventListener("mouseover", () => {
        p1.style.display = "block"


    })

    var section1 = document.getElementById("section1")
    section1.addEventListener("mouseout", () => {
        p1.style.display = "none"
    })
}

var section2 = document.getElementById("section2")
if (section2 && p2) {
    section2.addEventListener("mouseover", () => {
        p2.style.display = "block"

    })
    var section2 = document.getElementById("section2")
    section2.addEventListener("mouseout", () => {
        p2.style.display = "none"


    })
}

var section3 = document.getElementById("section3")
if (section3 && p3) {
    section3.addEventListener("mouseover", () => {
        p3.style.display = "block"
    })

    var section3 = document.getElementById("section3")
    section3.addEventListener("mouseout", () => {

        p3.style.display = "none"
    })
}


// create for casestudy

var case1 = document.getElementById("casestudy1")
if (case1) {
    case1.addEventListener("mouseover", () => {
        case1.style.backgroundImage = "none"

    })

    case1.addEventListener("mouseout", () => {
        case1.style.backgroundImage = "url(assets/e-commerce-img.webp)"

    })
}


var case2 = document.getElementById("casestudy2")
if (case2) {
    case2.addEventListener("mouseover", () => {
        case2.style.backgroundImage = "none"

    })

    case2.addEventListener("mouseout", () => {
        case2.style.backgroundImage = "url(assets/patient-portal.png)"

    })
}


var case3 = document.getElementById("casestudy3")
if (case3) {
    case3.addEventListener("mouseover", () => {
        case3.style.backgroundImage = "none"

    })

    case3.addEventListener("mouseout", () => {
        case3.style.backgroundImage = "url(assets/mobile-online-banking-concept_12892-62.jpg)"

    })
}

// create for filter

let departmentfilters = document.getElementById("departmentFilter");
let designationfilters = document.getElementById("DesignationFilter");
let cards = document.querySelectorAll(".jobcard");

if (departmentfilters && designationfilters && cards) {
    departmentfilters.addEventListener("change", filter)
    designationfilters.addEventListener("change", filter)
}



function filter() {

    let dept = departmentfilters.value.toLowerCase()
    let desi = designationfilters.value.toLowerCase()
    


    cards.forEach(card => {

        let carddept = card.dataset.department.toLowerCase();
        let cardesi = card.dataset.designation.toLowerCase();

        if ((dept == "all" || carddept == dept) && (desi == "all" || cardesi == desi)) {
            card.style.display = "block"

        }

        else {

            card.style.display = "none"

        }
    })
}

// create for index page service section 

let web=document.getElementById("Web-Development");
if(web)
{
web.addEventListener("click",()=>{

window.location.href = "web-Developmentpage.html";

})
}

let app=document.getElementById("App-Development");
if(app)
{
app.addEventListener("click",()=>{

window.location.href = "App-development.html";

})
}

let digi=document.getElementById("Digital-Marketing");
if(digi)
{
digi.addEventListener("click",()=>{

window.location.href = "Digital-Marketing.html";

})
}

let ar=document.getElementById("Ar-Vr");
if(ar)
{
ar.addEventListener("click",()=>{

window.location.href = "Ar-Vr.html";

})
}

let td=document.getElementById("3D-Modelling");
if(td)
{
td.addEventListener("click",()=>{

window.location.href = "3D-Modelling.html";

})
}

let gd=document.getElementById("Game-Development");
if(gd)
{
gd.addEventListener("click",()=>{

window.location.href = "Game-Development.html";

})
}

// sidenavvbar

var side=document.getElementById("sidenavbar");

function enable()
{

    side.style.left="0px"

}

function disable()
{
    side.style.left="-450px"
}


