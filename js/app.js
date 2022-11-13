document.body.style.backgroundColor = `beige`;

// querySelector() 

// Changing an element style
let changeH1 = document.querySelector(`h1`);
changeH1.style.fontSize = `3.5em`;
// Adding new content to a tag using innerHTML
changeH1.innerHTML += `Adding new content!`;
// Adding a new nested tag using innerHtml
changeH1.innerHTML += `<h6>New nested tag!</h6>`;
// Adding a new tag before an existing tag using outerHTML
let head = document.querySelector(`header`);
head.outerHTML  = `<h6>Adding new tag before existing tag using outerHTML</h6>`;
// Changing a tag completely using outerHTML
changeH1.outerHTML = `<img src=/media/pineapple.webp>`;


// queryselectorAll()

// Changing an elements style
let changePTags = document.querySelectorAll(`p`);
for (let i =0; i < changePTags.length; i++){
    changePTags[i].style.color = `blue`;
// Adding new content to a tag using innerHTML
    changePTags[i].innerHTML += ` $$$$$ADDING STUFF TO ALL P TAGS!`
// Adding a new nested tag using innerHTML
    changePTags[i].innerHTML += `<h3>New H3 Tag with querySelectorAll</h3>`
// Changing a tag completely using outerHTML
    changePTags[i].outerHTML = `<button>Click Me!</button>`;
}
// Adding a new tag before an existing tag using outerHTML
let mainTag = document.querySelectorAll(`div`);
for (let i =0; i < mainTag.length; i++)
    mainTag[i].outerHTML = `<h6>New tag before existing tag!</h6>`;


// getElementById()

// Changing an elements style
let changeH2 = document.getElementById(`listToDo`);
changeH2.style.fontStyle = `italic`;
// Adding new content to a tag using innerHTML
changeH2.innerHTML += ` $$$ AND YOU BETTER DO IT!`;
// Adding a new nested tag using innerHTML
changeH2.innerHTML += ` <h2>Another H2 Tag!</h2>`;
// Changing a tag completely using outerHTML
changeH2.outerHTML = `<h4>I'm a little H4 Tag now!</h4>`;
// Adding a new tag before an existing tag using outerHTML
let changeFooter = document.getElementById(`foot`);
changeFooter.outerHTML = `<h6>New tag!</h6>`;


// getElementByClassName()

// Changing an elements style
let changedir = document.getElementsByClassName(`direction`);
for (i = 0; i < changedir.length; i++){
    changedir[i].style.listStyleType = `square`;
// Adding new content to a tag using innerHTML
    changedir[i].innerHTML += ` direction`;
// Adding a new nested tag using innerHTML
    changedir[i].innerHTML += `<h5>Come Here!</h5>`
// Changing a tag completely using outerHTML
    changedir[i].outerHTML = `<h6>Game Over!</h6>`
}
// Adding a new tag before an existing tag using outerHTML
let span = document.getElementsByClassName(`spanner`);
for (i = 0; i < span.length; i++){
    span[i].outerHTML = `<h1>End of Webpage!</h1>`
}





