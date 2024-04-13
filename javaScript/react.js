//Header Functions 
let header = document.getElementsByTagName("header")[0];
let headerImages = header.getElementsByClassName("container")[0].getElementsByTagName("img");
let listDiv = document.getElementsByClassName("list-div")[0];
function headerBG() {
    if (window.scrollY >= 16) {
        header.style.backgroundColor = "black";
        header.style.top = "0";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.top = "1em";
    }
}
//      List 
function listDisplay(value) {
    let listImg = listDiv.getElementsByTagName("img")[0];
    if (value > 767 && listImg != null) {
        listImg.remove();
        header.style.height = "4em";
    }
    else if (value <= 767) {
        menuBarCreation();
        let image = listDiv.getElementsByTagName("img")[0];
        image.onclick = function () {
            let heightValue = header.style.getPropertyValue("height");
            if (heightValue == "22em") {
                header.style.height = "4em";
                image.style.cssText = `
                    rotate: 0deg;
                `;
            }
            else {
                header.style.height = "22em";
                image.style.cssText = `
                    rotate: 180deg;
                `;
            }
        }
    }
};
function menuBarCreation() {
    if (listDiv.getElementsByTagName("img")[0] != null) return;
    let listImg = document.createElement("img");
    listImg.setAttribute("class", "listImg");
    listImg.setAttribute("src", "./assets/img/menu-bar.png");
    listImg.setAttribute("alt", "menu-bar");
    listDiv.appendChild(listImg);
}
//      Links
function linksHover() {
    let headerLinks = header.getElementsByClassName("container")[0].getElementsByTagName("a");
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].onmouseenter = function () {
            headerImages[i].src = `./assets/img/B-link${i + 1}.png`;
        }
        headerLinks[i].onmouseleave = function () {
            headerImages[i].src = `./assets/img/W-link${i + 1}.png`;
        }
    }
}
// Home Page Functions
let homePage = document.getElementById("home");
let animatedText = homePage.getElementsByClassName("animated-text")[0];
let textToWrite = "Front-End Developer";
let index = 0;
function typeText() {
    if (index < textToWrite.length) {
        animatedText.innerText += textToWrite[index];
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 500);
    }
}
function eraseText() {
    if (index > 0) {
        const newText = animatedText.innerText.substring(0, animatedText.innerText.length - 1);
        animatedText.innerText = newText;
        index--;
        setTimeout(eraseText, 100);
    } else {
        index = 0;
        setTimeout(typeText, 500);
    }
}
typeText();

// Home Page 
// Functions to achieve onload
window.onload = function () {
    listDisplay(innerWidth);
    headerBG();
    linksHover();
}
// Skills Page 
let skillsPage = document.getElementById("skills");
let skillsArray = {
    "div": [`<h1>90%</h1>`, `<h1>80%</h1>`, `<h1>70%</h1>`,
        `<h1>80%</h1>`, `<h1>60%</h1>`, `<h1>60%</h1>`,
        `<h1>50%</h1>`, `<h1>60%</h1>`],

    "h3": ['HTML5', 'CSS3', 'JavaScript',
        'SASS', 'CPP', 'OOP', 'Data Structures', 'Problem Sloving']
};

let leftArrow = skillsPage.getElementsByClassName("left-arrow")[0];
let rightArrow = skillsPage.getElementsByClassName("right-arrow")[0];
let cur = 0;
function swipe(valOfMargin , direction) {
    let cur_Div = skillsPage.getElementsByClassName(`d${cur}`)[0];
    cur_Div.style.marginLeft = `${valOfMargin}em`;
    setTimeout(() => {
        cur_Div.getElementsByTagName("div")[0].innerHTML = "";
        cur_Div.getElementsByTagName("h3")[0].innerHTML = "";
        cur_Div.setAttribute("class", `d${cur} none`);
        if (direction=="left") {
            if(cur==0) cur = skillsArray["div"].length;
            cur--;
        } else {
            if(cur==skillsArray["div"].length-1) cur = 0;
            else cur++;
        } 
        cur_Div = skillsPage.getElementsByClassName(`d${cur}`)[0];
        cur_Div.getElementsByTagName("div")[0].innerHTML = skillsArray["div"][cur];
        cur_Div.getElementsByTagName("h3")[0].innerHTML = skillsArray["h3"][cur];
        cur_Div.setAttribute("class", `d${cur} small-container`);
        if(direction=="left") cur_Div.style.animation = "to-left 0.6s alternate 1";
        else cur_Div.style.animation = "to-right 0.6s alternate 1";
        cur_Div.style.marginLeft = '0';
    }, 100);
}
leftArrow.onclick = _ => swipe(-30 , "left");
rightArrow.onclick = _ => swipe(30 , "right");
// Functions to achieve onresize
window.onresize = function () {
    listDisplay(innerWidth);
}
// Functions to achieve onscroll
window.onscroll = function () {
    headerBG();
}