
(function(){


console.info(window.location.href)
let url = window.location.href
let filename = url.split("/").pop()
console.info(filename)

let listOfLinks = document.querySelectorAll("nav ul li")
console.dir(listOfLinks)
for(let i=0; i<listOfLinks.length; i ++){
    let currentLink = listOfLinks[i].querySelector("a").getAttribute("href")
    console.info(currentLink)
    if(currentlink === filename){
        listOfLinks[i].setAttribute("class", "currentPage")
        break
    } 
}


})()