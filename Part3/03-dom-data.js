

// this function should return a new string with a valid Wikipedia link of the form
// "https://en.wikipedia.org/wiki/Some Name"
function wikiUrl (name) {
  let output = `https://en.wikipedia.org/wiki/`;
  let wikiUrl = output + name;
  return wikiUrl;
}


// given a name, this function should return, as a string, a valid link to a wiki page
// of the form <a href='link url'>content</a>
// the function `wikiURL` should make it easier to do this.
function wikiLink (name) {
  let output = `<a href="` + wikiUrl(name) + `">` + name + `</a>`;
  let wikiLink = output;
  return wikiLink;
  // return $()
}

// passed an HTML element object as a parameter, this function should
// set the element's HTML content to a wikiLink whose internal text content is the original
// element's text content. 
function wikifyElementHtml (element) {
  let wikifyElementHtml = $(element).html(wikiLink(element.textContent));
  return wikifyElementHtml;
}

// passed a class name or other selector, this function should iterate through all
// the matching elements and wikify their text.  
function wikifyClass (selector) {
  let wiki = document.querySelectorAll(selector);
  wiki.forEach(element=>{
    wikifyElementHtml(element)
  })
}


function wikifySelector(selector) {
let wiki = document.querySelectorAll(selector);
wiki.forEach(element=>{
  wikifyElementHtml(element)
})
};
  

// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
// MODIFYING THIS CODE WILL ALMOST CERTAINLY CAUSE YOUR TESTS TO BREAK
// AND YOUR ASSIGNMENT TO FAIL!
var exports;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  exports = module.exports = {};
}
else {
  exports = window.skeleton = {};
  wikifyClass('.name');

}

let modFuns = [wikiUrl, wikiLink, wikifyElementHtml, wikifyClass];

for (let i in modFuns) {
  exports[modFuns[i].name] = modFuns[i]; // get the name as string first!
}



