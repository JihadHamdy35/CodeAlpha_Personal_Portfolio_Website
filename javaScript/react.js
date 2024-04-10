// Some Checks
// list and width
let listDiv = document.getElementsByClassName("list-div")[0];
let header = document.getElementsByTagName("header")[0];
let headerImages = header.getElementsByClassName("container")[0].getElementsByTagName("img");
function linksHover(){
    let headerLinks = header.getElementsByClassName("container")[0].getElementsByTagName("a");
    for(let i=0 ; i<headerLinks.length ; i++){
        headerLinks[i].onmouseenter = function(){
            headerImages[i].src=`./assets/img/B-link${i+1}.png`;
        }
        headerLinks[i].onmouseleave = function(){
            headerImages[i].src=`./assets/img/W-link${i+1}.png`;
        }
    }
}
linksHover();
function menuBarCreation(){
    if(listDiv.getElementsByTagName("img")[0]!=null) return;
    let listImg = document.createElement("img");
    listImg.setAttribute("class" , "listImg");
    listImg.setAttribute("src" , "./assets/img/menu-bar.png");
    listImg.setAttribute("alt" , "menu-bar");
    listDiv.appendChild(listImg);
}
function listDisplay(value){
    let listImg = listDiv.getElementsByTagName("img")[0];
    if(value>767 && listImg!=null){
        listImg.remove();
        header.style.height = "4em";
    }
    else if(value<=767){
        menuBarCreation();
        let image = listDiv.getElementsByTagName("img")[0];
        image.onclick = function(){
            let heightValue = header.style.getPropertyValue("height");
            if(heightValue=="20em"){ 
                header.style.height = "4em";
                image.style.cssText =`
                    rotate: 0deg;
                `;
            }
            else {
                header.style.height = "20em";
                image.style.cssText =`
                    rotate: 180deg;
                `;
            }
        }
    }
};
function headerBG(){
    if (window.scrollY>=16){
        header.style.backgroundColor = "black";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
}
window.onload = function(){
    listDisplay(innerWidth);
    headerBG();
}
window.onresize= function(){
    listDisplay(innerWidth);
}
window.onscroll = ()=> headerBG();